import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Gif, SearchResponse} from "../interfaces/gifs.interfaces";

@Injectable({providedIn: 'root'})
export class GifsService {

  public apiKey: string = 'pkiTOhBvQoaVUhvYkptrFs0M5LfVe61Q';
  public serviceUrl: string = 'https://api.giphy.com/v1/gifs/';
  public gifList: Gif[] = [];

  private _tagsHistory: string[] = [];

  constructor(private http: HttpClient) {
    this.loadLocalStore();
    console.log("GifsService service loaded");
  }

  get tagsHistory() {
    return [...this._tagsHistory] // se pasa una copia, no por referencia
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag)
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
    this.saveLocalStore();
  }

  private saveLocalStore(): void {
    localStorage.setItem('history', JSON.stringify(this.tagsHistory))
  }

  private loadLocalStore(): void {
    if (!localStorage.getItem('history')) return;
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
    if (this._tagsHistory.length === 0) return;
    this.searchTag(this._tagsHistory[0])
  }

  // Otras formas mas sencillas de consumir un API
  // async searchTag(tag: string): Promise<void> {
  //   if (tag.length < 4) return;
  //   this.organizeHistory(tag);

  // una forma sencilla
  // fetch('https://api.giphy.com/v1/gifs/search?api_key=pkiTOhBvQoaVUhvYkptrFs0M5LfVe61Q&q=valorant&limit=10')
  //   .then(rest => Response.json(rest))
  //   .then(data => console.log(data));


  // otra forma tambien sencilla
  // const rest = await fetch('https://api.giphy.com/v1/gifs/search?api_key=pkiTOhBvQoaVUhvYkptrFs0M5LfVe61Q&q=valorant&limit=10')
  // const data = await rest.json;
  // console.log(data);


  // }

  searchTag(tag: string): void {
    if (tag.length < 4) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', 10)
      .set('q', tag)


    this.http.get<SearchResponse>(`${this.serviceUrl}search`, {params})
      .subscribe(rest => {
        this.gifList = rest.data;
        console.log({gifs: this.gifList});
      })

  }
}


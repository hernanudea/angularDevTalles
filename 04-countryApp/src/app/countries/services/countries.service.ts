import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, delay, map, Observable, of, tap} from "rxjs";
import {CountryInterface} from "../interfaces/country.interface";
import {CacheStore} from "../interfaces/cache-store.interface";
import {Region} from "../interfaces/region.type";

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  public cacheStore: CacheStore = {
    byCapital: {term: '', countries: []},
    byCountries: {term: '', countries: []},
    byRegion: {region: '', countries: []},
  }

  constructor(private httpClient: HttpClient) {
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage() {
    if (!localStorage.getItem('cacheStore')) return;
    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
  }

  getCountriesRequest(url: string): Observable<CountryInterface[]> {
    return this.httpClient.get<CountryInterface[]>(url)
      .pipe(
        catchError(() => of([]) // si se produce error, retorna arreglo vacio
        ),
        delay(2000)
      );
  }

  searchCountryByAlphaCode(code: string): Observable<CountryInterface | null> {
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.httpClient.get<CountryInterface[]>(url)
      .pipe(
        map(country => country.length > 0 ? country[0] : null),
        catchError(() => of(null)
        )
      );
  }

  /*  searchCapital(term: string): Observable<CountryInterface[]> {
      const url = `${this.apiUrl}/capital/${term}`;
      return this.httpClient.get<CountryInterface[]>(url)
        .pipe(
          catchError(() => of([]) // si se produce error, retorna arreglo vacio
          )
        );
    }*/
  searchCapital(term: string): Observable<CountryInterface[]> {
    return this.getCountriesRequest(`${this.apiUrl}/capital/${term}`)
      .pipe(
        tap(countries => this.cacheStore.byCapital = {term, countries}),
        tap(() => this.saveToLocalStorage())
      );
  }

  searchCountry(term: string): Observable<CountryInterface[]> {
    return this.getCountriesRequest(`${this.apiUrl}/name/${term}`)
      .pipe(
        tap(countries => this.cacheStore.byCountries = {term, countries}),
        tap(() => this.saveToLocalStorage())
      );
  }

  searchRegion(region: Region): Observable<CountryInterface[]> {
    return this.getCountriesRequest(`${this.apiUrl}/region/${region}`)
      .pipe(
        tap(countries => this.cacheStore.byRegion = {region, countries}),
        tap(() => this.saveToLocalStorage())
      );
  }
}

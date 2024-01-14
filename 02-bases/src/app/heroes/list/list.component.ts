import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public deletedHero?: string;

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Ho', 'Thor'];

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }

}

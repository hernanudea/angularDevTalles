import {Component} from '@angular/core';

@Component({
  selector: 'products-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'samuel';
  public nameUpper: string = 'MATIAS';
  public fullName: string = 'eLiaNA cuADros';

  public custonDate: Date = new Date();
}

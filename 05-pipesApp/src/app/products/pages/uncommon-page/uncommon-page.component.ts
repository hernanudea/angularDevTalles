import {Component} from '@angular/core';
import {interval, Observable, tap} from "rxjs";

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Hernan';
  public gender: 'male' | 'female' = 'male';
  public invitacionMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient() {
    this.name = 'Eliana';
    this.gender = 'female';
  }

  // i18n Plural

  public clients: string [] = ['Eliana', 'Samuel', 'Matias', 'Hernan', 'Fabian', 'Cristina', 'Eliza', 'Juan', 'Joel']

  public clientsMap = {
    '=0': 'no tenemos clientes esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos cliente esperando',
    'other': 'tenemos # clientes esperando',
  }

  deleteClient() {
    this.clients.shift();
  }

  // KeyValue Pipe
  public Person = {
    name: 'Matias',
    age: 10,
    addres: 'Villa Fátima'
  }

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000,)
    .pipe(tap(value => console.log(value)));

  public promiseValue = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa')
    }, 3500);
  })
}

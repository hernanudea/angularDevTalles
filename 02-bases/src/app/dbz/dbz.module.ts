import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { AddcharacterComponent } from './components/addcharacter/add-character.component';



@NgModule({
  declarations: [
    ListComponent,
    AddcharacterComponent,
    MainPageComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }

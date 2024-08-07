import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import {PrimeNGModule} from "../prime-ng/prime-ng.module";
import {Ripple} from "primeng/ripple";


@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonPageComponent
  ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        PrimeNGModule,
        Ripple
    ]
})
export class ProductsModule { }

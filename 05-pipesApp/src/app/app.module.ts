import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {Ripple} from "primeng/ripple";
import {SharedModule} from "./shared/shared.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Configuración del locale de la app
import localeEsCo from '@angular/common/locales/es-CO'
import {registerLocaleData} from '@angular/common'

import localeFrCa from '@angular/common/locales/fr-CA'

registerLocaleData(localeEsCo);
registerLocaleData(localeFrCa);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    Ripple,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    // establece el idioma para toda la aplicación
    {provide: LOCALE_ID, useValue: 'es-CO'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

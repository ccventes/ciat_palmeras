import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'; //modulo agregado


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarZonaComponent } from './agregar-zona/agregar-zona.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarZonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

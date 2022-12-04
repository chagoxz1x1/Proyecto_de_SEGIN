import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { CardComponent } from './component/card/card.component';
import { FooterComponent } from './component/footer/footer.component';
import { CerroComponent } from './component/cerro/cerro.component';
import { HeadComponent } from './component/head/head.component';
import { ExclusivosComponent } from './component/exclusivos/exclusivos.component';
import { CategoriasComponent } from './component/categorias/categorias.component';
import { CatalogoComponent } from './component/catalogo/catalogo.component';
import {  HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormControlDirective } from '@angular/forms';
import { NavComponent } from './component/nav/nav.component';
import { ContactoComponent } from './component/contacto/contacto.component';
import { SomosComponent } from './component/somos/somos.component';
import { RecomendacionesComponent } from './component/recomendaciones/recomendaciones.component';
import { PruebaComponent } from './component/prueba/prueba.component';
import { CompraComponent } from './component/compra/compra.component';
import { LoginComponent } from './component/login/login.component';
import { GraciasComponent } from './component/gracias/gracias.component';
import { PrivacidadComponent } from './component/privacidad/privacidad.component';
import { DeslindeComponent } from './component/deslinde/deslinde.component';
import { NormasComponent } from './component/normas/normas.component';
import { CriptografiaComponent } from './criptografia/criptografia.component';
import { AplicacionesComponent } from './aplicaciones/aplicaciones.component';
import { IntegridadComponent } from './integridad/integridad.component';
import { ProtocoloComponent } from './protocolo/protocolo.component';

const appRoutes: Routes =[
  
]



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    FooterComponent,
    CerroComponent,
    HeadComponent,
    ExclusivosComponent,
    CategoriasComponent,
    CatalogoComponent,
    NavComponent,
    ContactoComponent,
    SomosComponent,
    RecomendacionesComponent,
    PruebaComponent,
    CompraComponent,
    LoginComponent,
    GraciasComponent,
    PrivacidadComponent,
    DeslindeComponent,
    NormasComponent,
    CriptografiaComponent,
    AplicacionesComponent,
    IntegridadComponent,
    ProtocoloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

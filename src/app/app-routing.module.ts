import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './component/catalogo/catalogo.component';
import { ContactoComponent } from './component/contacto/contacto.component';
import { HomeComponent } from './component/home/home.component';
import { RecomendacionesComponent } from './component/recomendaciones/recomendaciones.component';
import { SomosComponent } from './component/somos/somos.component';
import { LoginComponent } from './component/login/login.component';
import { GraciasComponent } from './component/gracias/gracias.component';
import { PrivacidadComponent } from './component/privacidad/privacidad.component';
import { DeslindeComponent } from './component/deslinde/deslinde.component';
import { NormasComponent } from './component/normas/normas.component';
import { CriptografiaComponent } from './criptografia/criptografia.component';
import { AplicacionesComponent } from './aplicaciones/aplicaciones.component';
import { IntegridadComponent } from './integridad/integridad.component';
import { ProtocoloComponent } from './protocolo/protocolo.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'catalogo', component: CatalogoComponent},
  {path:'home', component: HomeComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'somos', component: SomosComponent},
  {path: 'gracias', component: GraciasComponent},
  {path: 'recomendaciones', component: RecomendacionesComponent},
  {path: 'recomendaciones', component: LoginComponent},
  {path:'**',redirectTo: "homeComponent", pathMatch : 'full'},
  {path: 'privacidad', component: PrivacidadComponent},
  {path: 'normas', component: NormasComponent},
  {path: 'deslinde', component: DeslindeComponent},
  {path: 'aplicaciones', component: AplicacionesComponent},
  {path: 'criptografia', component: CriptografiaComponent},
  {path: 'protocolo', component: ProtocoloComponent},
  {path: 'integtridad', component: IntegridadComponent}

  
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

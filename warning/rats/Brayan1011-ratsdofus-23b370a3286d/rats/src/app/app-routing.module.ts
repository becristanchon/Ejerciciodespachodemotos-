import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';

import { AppComponent } from './app.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { PrincipallistadoladronesComponent } from './principallistadoladrones/principallistadoladrones.component';
import { PrincipalclonadoresComponent } from './principalclonadores/principalclonadores.component';
import { LoginComponent } from '././user/login/login.component';
import { CompetenciaComponent } from '././competencia/competencia.component';

import { ReportarbootsComponent } from '././reportarboots/reportarboots.component';
import { BienvenidaComponent } from '././bienvenida/bienvenida.component';
import { CostruccionComponent } from '././costruccion/costruccion.component';



const routes: Routes = [
{path :'',component :PrincipallistadoladronesComponent},
{path :'clonadores',component :PrincipalclonadoresComponent},
{path :'LoginI',component :LoginComponent},
{path :'boots',component :CostruccionComponent} ,
{path :'bienvenidamensaje',component :BienvenidaComponent} ,
{path :'PListadoLadrones',component :PrincipallistadoladronesComponent},
{path :'PGultar',component :CompetenciaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}

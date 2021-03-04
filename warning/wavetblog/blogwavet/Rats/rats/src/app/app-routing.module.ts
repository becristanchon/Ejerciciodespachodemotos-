import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';

import { AppComponent } from './app.component';
import { NavegacionComponent } from './navegacion/navegacion.component';

const routes: Routes = [
{path :'',component :AppComponent},
{path :'Inicio',component :NavegacionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}

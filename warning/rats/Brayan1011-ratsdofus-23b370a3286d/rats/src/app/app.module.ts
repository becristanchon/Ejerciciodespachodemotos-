import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import  {MaterialModule} from './Matrial';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { InicioComponent } from './inicio/inicio.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { ConsultaListadoComponent } from './consultalistado/consultalistado.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FooterComponent } from './footer/footer.component';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from  'angularfire2/database';
import {AngularFirestore} from  'angularfire2/firestore';
import {AngularFireModule} from  'angularfire2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//services
import {ProductService} from './services/product.service';
import { PrincipallistadoladronesComponent } from './principallistadoladrones/principallistadoladrones.component';
import { NavpruebaComponent } from './navprueba/navprueba.component';
import { PrincipalclonadoresComponent } from './principalclonadores/principalclonadores.component';
import { LoginComponent } from './user/login/login.component';

//login
import { AngularFireAuth } from '@angular/fire/auth';
import { ReportarbootsComponent } from './reportarboots/reportarboots.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { CostruccionComponent } from './costruccion/costruccion.component';
import { PListadoBootsComponent } from './plistado-boots/plistado-boots.component';
import { RegistrarbotComponent } from './registrarbot/registrarbot.component';
import { CompetenciaComponent } from './competencia/competencia.component';
import { ListadoCompetidoresComponent } from './listadocompetidores/listadocompetidores.component';
import { ListadoequiposComponent } from './listadoequipos/listadoequipos.component';
import { ListadocombatesComponent } from './listadocombates/listadocombates.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ConsultaListadoComponent,
    NavegacionComponent,
    FooterComponent,
    PrincipallistadoladronesComponent,
    NavpruebaComponent,
    PrincipalclonadoresComponent,
    LoginComponent,
    ReportarbootsComponent,
    BienvenidaComponent,
    CostruccionComponent,
    PListadoBootsComponent,
    RegistrarbotComponent,
    CompetenciaComponent,
    ListadoCompetidoresComponent,
    ListadoequiposComponent,
    ListadocombatesComponent
  

  ],
  imports: [
    FormsModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
     AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [AngularFireAuth,ProductService,AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }

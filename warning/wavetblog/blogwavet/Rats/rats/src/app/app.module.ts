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
import {ProductService} from './services/product.service'



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ConsultaListadoComponent,
    NavegacionComponent,
    FooterComponent

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
  providers: [ProductService,AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }

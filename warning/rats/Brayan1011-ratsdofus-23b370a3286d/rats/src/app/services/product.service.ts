import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';
import {Product}  from  '../models/product'
import { Observable } from 'rxjs';
import  {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})

export class ProductService {


  //firebase
  PersonasCollection:AngularFirestoreCollection<Product>;
  Personas:Observable<Product[]>;
  Productodoc:AngularFirestoreDocument<Product>;
  ///



  constructor(public afs:AngularFirestore){
     //firebase
    this.PersonasCollection = afs.collection<Product>('rat');
    this.Personas = this.PersonasCollection.snapshotChanges().pipe(
    map(actions => actions.map(a => {
   const  data = a.payload.doc.data() as Product;
   const id = a.payload.doc.id;
   return {id,...data}
    }))
  );
  ///
  }

  ///firebase
   getPersona(){
  return this.Personas;
  }

  public createpersona(value){
    return this.afs.collection('rat').add({
      nombre: value.nombre,
      facebook: value.facebook,
      nombrePersonaje: value.nombrePersonaje,
      servidor: value.servidor,
      modus:value.modus,
      wapp:value.wapp
    });
  }


  ///
}

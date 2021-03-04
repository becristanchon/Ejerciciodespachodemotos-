import { Injectable } from '@angular/core';

import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';
import {boot}  from  '../models/boots'
import { Observable } from 'rxjs';
import  {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class BootService {

  //firebase
  BootsCollection:AngularFirestoreCollection<boot>;
  Boots:Observable<boot[]>;
  ///
  constructor(public afs:AngularFirestore){
     //firebase
    this.BootsCollection = afs.collection<boot>('boots');
    this.Boots = this.BootsCollection.snapshotChanges().pipe(
    map(actions => actions.map(a => {
   const  data = a.payload.doc.data() as boot;
   const id = a.payload.doc.id;
   return {id,...data}
    }))
  );
  ///
  }
  ///firebase
   getPersona(){
  return this.Boots;
  }

  public createpersona(value){
    return this.afs.collection('boots').add({
      nombre: value.nombre,
      servidor: value.servidor,
      modus:value.modus,
     
    });
  }


  

  ///
}

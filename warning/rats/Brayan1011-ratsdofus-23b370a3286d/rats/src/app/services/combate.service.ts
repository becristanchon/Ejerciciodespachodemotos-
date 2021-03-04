import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';
import {combate}  from  '../models/combate'
import { Observable } from 'rxjs';
import  {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class combateService {
 //firebase
  combateCollection:AngularFirestoreCollection<combate>;
  combate:Observable<combate[]>;
  //combatedoc:AngularFirestoreDocument<combate>;
  ///


  constructor(public afs:AngularFirestore){
     //firebase
    this.combateCollection = afs.collection<combate>('combate');
    this.combate = this.combateCollection.snapshotChanges().pipe(
    map(actions => actions.map(a => {
   const  data = a.payload.doc.data() as combate;
   const id = a.payload.doc.id;
   return {id,...data}
    }))
  );
  ///
  }

  ///firebase
   getcombate(){
  return this.combate;
  }


  public createcombate(value){
    return this.afs.collection('combate').add({
      posmapa: value.posmapa,
      transmision: value.transmision,
      fecha : value.fecha
     // integrantes:value.combate
    });
  }


  ///
}

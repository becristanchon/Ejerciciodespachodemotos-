
import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';
import {equipo}  from  '../models/Equipo'
import { Observable } from 'rxjs';
import  {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})

export class equipoService {

  //firebase
  equipoCollection:AngularFirestoreCollection<equipo>;
  equipo:Observable<equipo[]>;
  //equipodoc:AngularFirestoreDocument<equipo>;
  ///


  constructor(public afs:AngularFirestore){
     //firebase
    this.equipoCollection = afs.collection<equipo>('equipo');
    this.equipo = this.equipoCollection.snapshotChanges().pipe(
    map(actions => actions.map(a => {
   const  data = a.payload.doc.data() as equipo;
   const id = a.payload.doc.id;
   return {id,...data}
    }))
  );
  ///
  }

  ///firebase
   getequipo(){
  return this.equipo;
  }


  public createequipo(value){
    return this.afs.collection('equipo').add({
      nombreEquipo: value.nombreEquipo,
      nombreGremio: value.nombreGremio,
     // integrantes:value.equipo
    });
  }


  ///
}

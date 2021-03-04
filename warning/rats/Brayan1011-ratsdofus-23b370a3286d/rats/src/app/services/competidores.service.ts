import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';
import {competidores}  from  '../models/competidores'
import { Observable } from 'rxjs';
import  {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CompetidoresServices {


  //firebase
  competidoresCollection:AngularFirestoreCollection<competidores>;
  competidores:Observable<competidores[]>;
  //Competidoresdoc:AngularFirestoreDocument<competidores>;
  ///



  constructor(public afs:AngularFirestore){
     //firebase
    this.competidoresCollection = afs.collection<competidores>('competidores');
    this.competidores = this.competidoresCollection.snapshotChanges().pipe(
    map(actions => actions.map(a => {
   const  data = a.payload.doc.data() as competidores;
   const id = a.payload.doc.id;
   return {id,...data}
    }))
  );
  ///
  }

  ///firebase
   getCompetidores(){
  return this.competidores;
  }


  public createCompetidor(value){
    return this.afs.collection('competidores').add({
      nombreCompetidor: value.nombreCompetidor,
      facebook: value.facebook,
      nombrePersonaje: value.nombrePersonaje,
      servidor: value.servidor,
      gremio:value.gremio,
      equipo:value.equipo
    });
  }


  ///
}

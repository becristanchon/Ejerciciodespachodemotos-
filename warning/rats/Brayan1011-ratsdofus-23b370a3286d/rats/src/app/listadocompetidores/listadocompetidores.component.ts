import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort,MatTableDataSource} from '@angular/material';

//service
import {CompetidoresServices} from '../services/competidores.service'
import { Product } from '../models/product';
import { competidores } from '../models/competidores';
//class
@Component({
  selector: 'app-listado-competidores',
  templateUrl: './listadocompetidores.component.html',
  styleUrls: ['./listadocompetidores.component.css']
})
export class ListadoCompetidoresComponent implements OnInit {

 public  competidorList : competidores[];
 displayedColumns: string[] = ['nombreCompetidor' ,
 'nombrePersonaje',
 'servidor',
 'gremio',
 'equipo',
 'facebook'];
  dataSource: MatTableDataSource<competidores>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private competidorservice : CompetidoresServices) {
 
  }
 
  ngOnInit() {
    this.competidorservice.getCompetidores().subscribe(item  =>{
     this.competidorList = item;
     this.dataSource = new MatTableDataSource(this.competidorList);
     this.dataSource.paginator = this.paginator;
    });
   
  
    /*this.dataSource.paginator = this.personaList.length;
    this.dataSource.sort = this.sort;*/
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

export class PaginatorOverviewExample {}






import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort,MatTableDataSource} from '@angular/material';

//service
import {equipoService} from '../services/equipo.service'
import { equipo } from '../models/Equipo';
@Component({
  selector: 'app-listadoequipos',
  templateUrl: './listadoequipos.component.html',
  styleUrls: ['./listadoequipos.component.css']
})
export class ListadoequiposComponent implements OnInit {

 public  equipoList : equipo[];
 displayedColumns: string[] = ['nombreEquipo' ,
 'nombreGremio'
 ];

 
  dataSource: MatTableDataSource<equipo>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private equiposervice : equipoService) {
 
  }
  
  ngOnInit() {
    this.equiposervice.getequipo().subscribe(item  =>{
     this.equipoList = item;
     this.dataSource = new MatTableDataSource(this.equipoList);
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






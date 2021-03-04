import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort,MatTableDataSource} from '@angular/material';

//service
import {combateService} from '../services/combate.service'
import { combate } from '../models/combate';
@Component({
  selector: 'app-listadocombates',
  templateUrl: './listadocombates.component.html',
  styleUrls: ['./listadocombates.component.css']
})
export class ListadocombatesComponent implements OnInit {

 public  combateList : combate[];
 displayedColumns: string[] = ['posmapa' ,
 'transmision','fecha'
 ];

 
  dataSource: MatTableDataSource<combate>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private combateservice : combateService) {
 
  }
  
  ngOnInit() {
    this.combateservice.getcombate().subscribe(item  =>{
     this.combateList = item;
     this.dataSource = new MatTableDataSource(this.combateList);
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






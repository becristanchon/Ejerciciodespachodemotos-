import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort,MatTableDataSource} from '@angular/material';


//service

import {ProductService} from '../services/product.service'
import { Product } from '../models/product';

//class




/** Constants used to fill up our data base. */
const COLORS: string[] = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];




@Component({
  selector: 'app-consultalistado',
  templateUrl: './consultalistado.component.html',
  styleUrls: ['./consultalistado.component.css']
})
export class ConsultaListadoComponent implements OnInit {
 public  personaList : Product[];
 displayedColumns: string[] = ['Nombrecompleto' ,'facebook',
 'nombrePersonaje',
 'servidor',
 'modus',
 'wapp'];
  dataSource: MatTableDataSource<Product>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private personaservice : ProductService) {
    // Create 100 users
   
    // Assign the data to the data source for the table to render
  
  }

  ngOnInit() {

    this.personaservice.getPersona().subscribe(item  =>{
     this.personaList = item;
     this.dataSource = new MatTableDataSource(this.personaList);
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





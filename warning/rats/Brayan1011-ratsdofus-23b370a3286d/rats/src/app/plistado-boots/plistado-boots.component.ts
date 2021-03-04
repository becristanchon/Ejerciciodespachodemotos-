
import { boot } from '../models/boots';
import { BootService } from '../services/boot.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort,MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-plistado-boots',
  templateUrl: './plistado-boots.component.html',
  styleUrls: ['./plistado-boots.component.css']
})
export class PListadoBootsComponent implements OnInit {

   public  bootList : boot[];
  displayedColumns: string[] = ['nombre' , 'servidor','modus'];
   dataSource: MatTableDataSource<boot>;
 
   @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatSort) sort: MatSort;
 
   constructor(private bootservice : BootService) {
     // Create 100 users
    
     // Assign the data to the data source for the table to render
   
   }
  
   ngOnInit() {
    
     this.bootservice.getPersona().subscribe(item  =>{
      this.bootList = item;
      this.dataSource = new MatTableDataSource(this.bootList);
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

import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

export interface UserDataPersonajes {
  idPersonaje: string;
  NombrePersonaje: string;
  NombreGremioPersonaje: string;
  Combates: string;
}


/** Constants used to fill up our data base. */
const COLORS: string[] = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];

  const COMBATES: string[] = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];

const NAMES: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

@Component({
  selector: 'app-competencia',
  templateUrl: './competencia.component.html',
  styleUrls: ['./competencia.component.css']
})


export class CompetenciaComponent implements OnInit {

  displayedColumns: string[] = ['id', 'NombreEquipo', 'NombreGremio', 'Participantes'];
  displayedColumnsPersonajes: string[] = ['idpersonaje', 'NombrePersonaje', 'NombreGremioPersonaje', 'Combates'];
  dataSource: MatTableDataSource<UserData>;
  dataSourcePersonajes : MatTableDataSource<UserDataPersonajes>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  //personajes

  @ViewChild(MatPaginator) paginatorPersonajes: MatPaginator;
  @ViewChild(MatSort) sortPersonajes: MatSort;

  public userUid: string = null;
  panelOpenState = false;
  constructor(private breakpointObserver: BreakpointObserver,private auth : AuthService, private router :Router) { 

 // Create 100 users
 const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

 // personajes 

  // Create 100 users
  const userspersonajes = Array.from({length: 100}, (_, k) => createNewUserPersonajes(k + 1));
 // Assign the data to the data source for the table to render
 this.dataSource = new MatTableDataSource(users);
 this.dataSourcePersonajes = new MatTableDataSource(userspersonajes);
 
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    ///personajes

    this.dataSourcePersonajes.paginator = this.paginator;
    this.dataSourcePersonajes.sort = this.sort;
    this.getCurrentUser();
  }
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );
  onLogout() {
    this.auth.logoutUser();
  }
 

  getCurrentUser() {
    this.auth.isAuth().subscribe(auth => {
      if (auth) {
        this.userUid = auth.uid;
        this.router.navigate(['/PGultar']);
      }else {
        this.router.navigate(['/LoginI']);
      }
    })
  }



  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  applyFilterPersonajes(filterValue: string) {
    this.dataSourcePersonajes.filter = filterValue.trim().toLowerCase();

    if (this.dataSourcePersonajes.paginator) {
      this.dataSourcePersonajes.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}


/** Builds and returns a new User. */
function createNewUserPersonajes(id: number): UserDataPersonajes {
  const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    idPersonaje: id.toString(),
    NombrePersonaje: name,
    NombreGremioPersonaje: Math.round(Math.random() * 100).toString(),
    Combates: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}


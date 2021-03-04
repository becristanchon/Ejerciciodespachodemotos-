import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-reportarboots',
  templateUrl: './reportarboots.component.html',
  styleUrls: ['./reportarboots.component.css']
})
export class ReportarbootsComponent implements OnInit {

  public userUid: string = null;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );
  constructor(private breakpointObserver: BreakpointObserver,private auth : AuthService, private router :Router) { }


  ngOnInit() {
   /* this.personaservice.getPersona().subscribe(item  =>{
      this.personaList = item;
      this.dataSource = new MatTableDataSource(this.personaList);
      this.dataSource.paginator = this.paginator;
     });*/
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.auth.isAuth().subscribe(auth => {
      if (auth) {
        this.userUid = auth.uid;
        this.router.navigate(['/boots']);
      }else {
        this.router.navigate(['/LoginI']);
      }
    })
  }


 /* applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }*/


}

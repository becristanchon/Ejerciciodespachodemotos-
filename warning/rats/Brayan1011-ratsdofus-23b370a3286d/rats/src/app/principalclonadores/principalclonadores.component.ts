import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
@Component({
  selector: 'app-principalclonadores',
  templateUrl: './principalclonadores.component.html',
  styleUrls: ['./principalclonadores.component.css']
})
export class PrincipalclonadoresComponent implements OnInit {
  public userUid: string = null;

  constructor(private breakpointObserver: BreakpointObserver,private auth : AuthService, private router :Router) { }

  ngOnInit() {
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
        this.router.navigate(['/clonadores']);
      }else {
        this.router.navigate(['/LoginI']);
      }
    })
  }
}

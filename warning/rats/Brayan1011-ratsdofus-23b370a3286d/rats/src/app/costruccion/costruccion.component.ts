import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-costruccion',
  templateUrl: './costruccion.component.html',
  styleUrls: ['./costruccion.component.css']
})
export class CostruccionComponent implements OnInit {
  public userUid: string = null;
  constructor(public afAuth: AngularFireAuth, private router: Router, private authService: AuthService,private auth : AuthService) { }

  ngOnInit() {
  }

  onLoginFacebook(): void {
    this.authService.loginFacebookUser()
      .then((res) => {
        this.onLoginRedirect();
      }).catch(err => console.log('err', err.message));
  }

 

  onLogout() {
    this.authService.logoutUser();
  }
  
  onLoginRedirect(): void {
    this.router.navigate(['clonadores']);
    this.router.navigate(['boots']);
  }

  
  onInicio(): void {
    this.router.navigate(['PListadoLadrones']);
}

}

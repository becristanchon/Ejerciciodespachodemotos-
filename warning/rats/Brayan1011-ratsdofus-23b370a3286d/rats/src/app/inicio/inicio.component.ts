import { Component, OnInit } from '@angular/core';
import {ProductService } from '../services/product.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import {Product} from '../models/product';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  
public  persona: Product = {
    nombre: '',
    facebook: '',
    nombrePersonaje: '',
    servidor: '',
    modus: '',
    wapp: ''
  };

  constructor(private personaservice : ProductService,private breakpointObserver: BreakpointObserver) { 

  }

  onGuardarpersona(myForm: NgForm) {
      this.personaservice.createpersona(this.persona);
  }

  ngOnInit() {
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );

 
}

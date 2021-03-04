import { Component, OnInit } from '@angular/core';
import {ProductService } from '../services/product.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import {Product} from '../models/product';

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

  constructor(private personaservice : ProductService) { 

  }

  onGuardarpersona(myForm: NgForm) {
      this.personaservice.createpersona(this.persona);
  }

  ngOnInit() {
  }

 
}

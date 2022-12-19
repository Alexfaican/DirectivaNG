import { Component, OnInit } from '@angular/core';
import { Route , Router } from '@angular/router';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  constructor(private nav:Router) { }
  numero:any = 0;
  nombre:string
  correo:string
  contrasena:string
  confirmar:string
  telefono:string
  sueldos:number[]=[1700,1600,1900];
  ngOnInit(): void {
    this.numero= 0;
    localStorage.clear();
  }
  almacenamiento(){
    //localStorage.setItem('valor_total', this.numero)//
    //localStorage.setItem('mensaje',"hola")//
    localStorage.setItem('nombre',this.nombre.toString())
    localStorage.setItem('correo',this.correo.toString())
    localStorage.setItem('contrasena',this.contrasena.toString())
    localStorage.setItem('confirmar',this.confirmar.toString())
    localStorage.setItem('telefono',this.telefono.toString())
  }
  Pagina2(){
    this.nav.navigate(['web2'])
    this.almacenamiento()
  }
}


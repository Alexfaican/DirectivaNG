import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(private nav:Router) { }
  resultado:any
  mensaje: any
  nombre: string
  correo:string
  contrasena:string
  confirmar:string
  telefono:string
  ngOnInit(): void {
    this.recuperar()
  }
  recuperar(){
    this.resultado = localStorage.getItem ('valor_total');
    this.mensaje = localStorage.getItem ('mensaje');
    this.nombre = localStorage.getItem ('nombre');
    this.correo= localStorage.getItem('correo');
    this.contrasena= localStorage.getItem('contrasena');
    this.confirmar= localStorage.getItem('confirmar');
    this.telefono= localStorage.getItem('telefono');
  }

}

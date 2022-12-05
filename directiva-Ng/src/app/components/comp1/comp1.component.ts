import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private nav:Router) { }
  numero:any
  sueldos:number[]=[1700,1600,1900];
  ngOnInit(): void {
    this.numero= 0;
  }
}

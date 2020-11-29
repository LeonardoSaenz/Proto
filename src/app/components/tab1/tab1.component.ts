import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.css']
})
export class Tab1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nombre:string ="Jose Pancho"
  description:string = "Lo que más me gusta hacer en la vida es pasar el tiempo mejorando para ser mejor."
  birthday:string = "19 Junio 2001"


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.css']
})
export class Tab2Component implements OnInit {

  constructor() { }

  nombre:string="21 Days"
  description:string="come kk angular"
  birthday:string="hoy"
  ngOnInit(): void {
  }

}

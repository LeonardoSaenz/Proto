import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';



@NgModule({
  declarations: [Tab1Component, Tab2Component],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }

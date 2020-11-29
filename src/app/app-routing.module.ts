import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tab1Component } from './components/tab1/tab1.component';
import { Tab2Component } from './components/tab2/tab2.component';

const routes: Routes = [
  {
    path: '', component: Tab1Component, pathMatch:'full'
  },
  {
    path: 'tab2', component:Tab2Component
  },
  {
    path:'tab1',component:Tab1Component
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

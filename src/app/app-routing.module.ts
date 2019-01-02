import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PadreComponent} from './home/padre/padre.component';

const routes: Routes = [
  {path:'',component:PadreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }

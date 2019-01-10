import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PadreComponent} from './home/padre/padre.component';
import { PadreProductosComponent } from './productos/padre-productos/padre-productos.component';

const routes: Routes = [
  {path:'',component:PadreComponent},
  {path:'productos',component:PadreProductosComponent},
  {path:'inicio',component:PadreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }

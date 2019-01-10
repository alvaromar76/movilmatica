import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlAccesoComponent } from './control-acceso/control-acceso.component';
import {PadreProductosComponent} from './padre-productos/padre-productos.component';

@NgModule({
  declarations: [ControlAccesoComponent,PadreProductosComponent],
  imports: [
    CommonModule
  ],
  exports: [PadreProductosComponent]
})
export class ProductosModule { }

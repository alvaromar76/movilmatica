import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PadreComponent } from './padre/padre.component';
import { CarruselComponent } from './carrusel/carrusel.component';

@NgModule({
  declarations: [PadreComponent, CarruselComponent],
  imports: [
    CommonModule
  ],
  exports :[PadreComponent,CarruselComponent]
})
export class HomeModule { }

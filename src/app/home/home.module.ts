import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PadreComponent } from './padre/padre.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  declarations: [PadreComponent, CarruselComponent, IntroComponent],
  imports: [
    CommonModule
  ],
  exports :[PadreComponent,CarruselComponent,IntroComponent]
})
export class HomeModule { }

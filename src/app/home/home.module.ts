import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PadreComponent } from './padre/padre.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { IntroComponent } from './intro/intro.component';
import { ProductosComponent } from './productos/productos.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [PadreComponent, CarruselComponent, IntroComponent, ProductosComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports :[PadreComponent,CarruselComponent,IntroComponent,ProductosComponent,FooterComponent]
})
export class HomeModule { }

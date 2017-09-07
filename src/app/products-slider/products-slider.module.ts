import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsSliderComponent } from './products-slider/products-slider.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductsSliderComponent],
  exports: [
    ProductsSliderComponent
  ]
})
export class ProductsSliderModule { }

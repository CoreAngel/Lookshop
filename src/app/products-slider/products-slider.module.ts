import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsSliderComponent } from './products-slider/products-slider.component';
import { ProductCardModule } from './../product-card/product-card.module';

@NgModule({
  imports: [
    CommonModule,
    ProductCardModule
  ],
  declarations: [
    ProductsSliderComponent
  ],
  exports: [
    ProductsSliderComponent
  ]
})
export class ProductsSliderModule { }

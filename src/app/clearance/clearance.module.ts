import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClearanceComponent } from './clearance/clearance.component';
import { ProductCardModule } from './../product-card/product-card.module';

@NgModule({
  imports: [
    CommonModule,
    ProductCardModule
  ],
  declarations: [ClearanceComponent],
  exports: [ClearanceComponent]
})
export class ClearanceModule { }

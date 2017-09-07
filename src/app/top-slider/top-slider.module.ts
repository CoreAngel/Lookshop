import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopSliderComponent } from './top-slider/top-slider.component';
import { FirstSlideComponent } from './first-slide/first-slide.component';
import { SecoundSlideComponent } from './secound-slide/secound-slide.component';
import { ThirdSlideComponent } from './third-slide/third-slide.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TopSliderComponent, FirstSlideComponent, SecoundSlideComponent, ThirdSlideComponent],
  exports: [
    TopSliderComponent
  ]
})
export class TopSliderModule { }

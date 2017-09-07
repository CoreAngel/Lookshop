import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderModule } from './header/header.module';
import { TopSliderModule } from './top-slider/top-slider.module';
import { SocialMediaModule } from './social-media/social-media.module';
import { TilesModule } from './tiles/tiles.module';
import { ProductsSliderModule } from './products-slider/products-slider.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    TopSliderModule,
    SocialMediaModule,
    TilesModule,
    ProductsSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

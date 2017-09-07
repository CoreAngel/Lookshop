import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TilesComponent } from './tiles/tiles.component';
import { FirstTileComponent } from './first-tile/first-tile.component';
import { SecondTileComponent } from './second-tile/second-tile.component';
import { ThirdTileComponent } from './third-tile/third-tile.component';
import { FourthTileComponent } from './fourth-tile/fourth-tile.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TilesComponent, FirstTileComponent, SecondTileComponent, ThirdTileComponent, FourthTileComponent],
  exports: [
    TilesComponent
  ]
})
export class TilesModule { }

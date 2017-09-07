import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserBarComponent } from './user-bar/user-bar.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CardComponent } from './card/card.component';
import { HeaderService } from './header.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UserBarComponent,
    HeaderComponent,
    NavBarComponent,
    NavigationComponent,
    CardComponent
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    HeaderService
  ]
})
export class HeaderModule { }

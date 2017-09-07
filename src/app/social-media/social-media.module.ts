import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialMediaComponent } from './social-media/social-media.component';
import { EmailComponent } from './email/email.component';
import { SocialIconsComponent } from './social-icons/social-icons.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SocialMediaComponent,
    EmailComponent,
    SocialIconsComponent
  ],
  exports: [
    SocialMediaComponent
  ]
})
export class SocialMediaModule { }

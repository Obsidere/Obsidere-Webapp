import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdHomeRoutingModule } from './ad-home-routing.module';
import { AdHomeComponent } from './ad-home.component';


@NgModule({
  declarations: [
    AdHomeComponent
  ],
  imports: [
    CommonModule,
    AdHomeRoutingModule
  ]
})
export class AdHomeModule { }

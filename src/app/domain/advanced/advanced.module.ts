import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedRoutingModule } from './advanced-routing.module';
import { AdLayoutComponent } from './ad-layout/ad-layout.component';
import { AdNavigationComponent } from './ad-layout/ad-navigation/ad-navigation.component';


@NgModule({
  declarations: [
    AdLayoutComponent,
    AdNavigationComponent
  ],
  imports: [
    CommonModule,
    AdvancedRoutingModule
  ]
})
export class AdvancedModule { }

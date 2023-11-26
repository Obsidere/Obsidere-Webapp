import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdDashboardRoutingModule } from './ad-dashboard-routing.module';
import { AdDashboardComponent } from './ad-dashboard.component';


@NgModule({
  declarations: [
    AdDashboardComponent
  ],
  imports: [
    CommonModule,
    AdDashboardRoutingModule
  ]
})
export class AdDashboardModule { }

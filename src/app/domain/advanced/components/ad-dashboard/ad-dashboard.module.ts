import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdDashboardRoutingModule } from './ad-dashboard-routing.module';
import { AdDashboardComponent } from './ad-dashboard.component';
import {SimpleStatComponent} from "../../../shared/simple-stat/simple-stat.component";


@NgModule({
  declarations: [
    AdDashboardComponent
  ],
  imports: [
    CommonModule,
    AdDashboardRoutingModule,
    SimpleStatComponent,
  ]
})
export class AdDashboardModule { }

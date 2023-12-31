import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdDashboardComponent} from "./ad-dashboard.component";

const routes: Routes = [
  {path: '', component: AdDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdDashboardRoutingModule { }

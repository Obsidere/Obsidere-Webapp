import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdLayoutComponent} from "./ad-layout/ad-layout.component";
import {AdDashboardModule} from "./components/ad-dashboard/ad-dashboard.module";

const routes: Routes = [
  {
    path: '', component: AdLayoutComponent, children: [
      { path: '', loadChildren: () => import('./components/ad-home/ad-home.module').then((m) => m.AdHomeModule) },
      { path: 'dashboard', loadChildren: () => import('./components/ad-dashboard/ad-dashboard.module').then((m) => AdDashboardModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvancedRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdHomeComponent} from "./ad-home.component";

const routes: Routes = [
  {path: '', component: AdHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdHomeRoutingModule { }

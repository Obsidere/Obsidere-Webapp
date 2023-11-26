import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/ad', pathMatch: 'full' },
  { path: 'ad', loadChildren: () => import('./domain/advanced/advanced.module').then((m) => m.AdvancedModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

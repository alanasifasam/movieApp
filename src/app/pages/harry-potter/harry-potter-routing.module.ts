import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HarryPotterPage } from './harry-potter.page';

const routes: Routes = [
  {
    path: '',
    component: HarryPotterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HarryPotterPageRoutingModule {}

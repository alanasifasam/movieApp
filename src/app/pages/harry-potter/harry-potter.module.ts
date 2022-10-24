import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HarryPotterPageRoutingModule } from './harry-potter-routing.module';

import { HarryPotterPage } from './harry-potter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HarryPotterPageRoutingModule
  ],
  declarations: [HarryPotterPage]
})
export class HarryPotterPageModule {}

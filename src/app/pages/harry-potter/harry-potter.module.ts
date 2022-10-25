import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HarryPotterPageRoutingModule } from './harry-potter-routing.module';

import { HarryPotterPage } from './harry-potter.page';
import { HttpClientModule } from '@angular/common/http';
import { HarryPotterService } from 'src/app/services/harry-potter.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    IonicModule,
    HarryPotterPageRoutingModule
  ],
  declarations: [HarryPotterPage],
   providers: [HarryPotterService]
})
export class HarryPotterPageModule {}

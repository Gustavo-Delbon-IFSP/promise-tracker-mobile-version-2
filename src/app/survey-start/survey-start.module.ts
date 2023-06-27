import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurveyStartPageRoutingModule } from './survey-start-routing.module';

import { SurveyStartPage } from './survey-start.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurveyStartPageRoutingModule
  ],
  declarations: [SurveyStartPage]
})
export class SurveyStartPageModule {}

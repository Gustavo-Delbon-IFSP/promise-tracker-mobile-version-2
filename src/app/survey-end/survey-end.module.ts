import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurveyEndPageRoutingModule } from './survey-end-routing.module';

import { SurveyEndPage } from './survey-end.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurveyEndPageRoutingModule
  ],
  declarations: [SurveyEndPage]
})
export class SurveyEndPageModule {}

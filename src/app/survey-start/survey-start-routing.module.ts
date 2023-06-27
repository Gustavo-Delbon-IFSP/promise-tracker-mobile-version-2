import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurveyStartPage } from './survey-start.page';

const routes: Routes = [
  {
    path: '',
    component: SurveyStartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurveyStartPageRoutingModule {}

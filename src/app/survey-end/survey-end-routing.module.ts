import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurveyEndPage } from './survey-end.page';

const routes: Routes = [
  {
    path: '',
    component: SurveyEndPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurveyEndPageRoutingModule {}

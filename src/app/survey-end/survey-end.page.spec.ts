import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SurveyEndPage } from './survey-end.page';

describe('SurveyEndPage', () => {
  let component: SurveyEndPage;
  let fixture: ComponentFixture<SurveyEndPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SurveyEndPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

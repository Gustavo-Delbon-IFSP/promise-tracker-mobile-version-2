import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SurveyStartPage } from './survey-start.page';

describe('SurveyStartPage', () => {
  let component: SurveyStartPage;
  let fixture: ComponentFixture<SurveyStartPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SurveyStartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

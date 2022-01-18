import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionActiveComponent } from './question-active.component';

describe('QuestionActiveComponent', () => {
  let component: QuestionActiveComponent;
  let fixture: ComponentFixture<QuestionActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionActiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

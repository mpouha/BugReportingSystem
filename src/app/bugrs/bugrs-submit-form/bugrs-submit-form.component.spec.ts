import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugrsSubmitFormComponent } from './bugrs-submit-form.component';

describe('BugrsSubmitFormComponent', () => {
  let component: BugrsSubmitFormComponent;
  let fixture: ComponentFixture<BugrsSubmitFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugrsSubmitFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugrsSubmitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

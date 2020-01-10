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
  it('Form is invalid', () => {
    expect(component.submitForm.invalid).toBeTruthy();
  });

  it('Form is valid', () => {
    const title = component.submitForm.get('title');
    const description = component.submitForm.get('description');
    const priority = component.submitForm.get('priority');
    const reporter = component.submitForm.get('reporter');

    title.setValue('CFPBUG');
    expect(title.valid).toBeTruthy();

    description.setValue('TOBEDONE');
    expect(description.valid).toBeTruthy();

    priority.setValue('HIGH');
    expect(priority.valid).toBeTruthy();

    expect(component.submitForm.valid).toBeTruthy();
  });


  it('Form is invalid', () => {
    const title = component.submitForm.get('title');
    const description = component.submitForm.get('description');
    const reporter = component.submitForm.get('reporter');

    title.setValue('CFPBUG');
    expect(title.valid).toBeTruthy();

    description.setValue('TOBEDONE');
    expect(description.valid).toBeTruthy();

    reporter.setValue('QA');
    expect(reporter.valid).toBeTruthy();

    expect(component.submitForm.valid).toBeTruthy();
  });

});






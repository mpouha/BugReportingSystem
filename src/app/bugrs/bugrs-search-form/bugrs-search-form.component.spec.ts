import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BugrsSearchFormComponent } from './bugrs-search-form.component';

describe('BugrsSearchFormComponent', () => {
  let component: BugrsSearchFormComponent;
  let fixture: ComponentFixture<BugrsSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugrsSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugrsSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});












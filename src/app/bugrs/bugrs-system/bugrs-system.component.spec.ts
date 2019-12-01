import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugrsSystemComponent } from './bugrs-system.component';

describe('BugrsSystemComponent', () => {
  let component: BugrsSystemComponent;
  let fixture: ComponentFixture<BugrsSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugrsSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugrsSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

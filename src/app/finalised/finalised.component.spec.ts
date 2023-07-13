import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalisedComponent } from './finalised.component';

describe('FinalisedComponent', () => {
  let component: FinalisedComponent;
  let fixture: ComponentFixture<FinalisedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalisedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

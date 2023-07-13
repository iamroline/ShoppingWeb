import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenActiveset1Component } from './women-activeset1.component';

describe('WomenActiveset1Component', () => {
  let component: WomenActiveset1Component;
  let fixture: ComponentFixture<WomenActiveset1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenActiveset1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenActiveset1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

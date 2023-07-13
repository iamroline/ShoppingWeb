import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenActiveset2Component } from './women-activeset2.component';

describe('WomenActiveset2Component', () => {
  let component: WomenActiveset2Component;
  let fixture: ComponentFixture<WomenActiveset2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenActiveset2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenActiveset2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsDComponent } from './ms-d.component';

describe('MsDComponent', () => {
  let component: MsDComponent;
  let fixture: ComponentFixture<MsDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

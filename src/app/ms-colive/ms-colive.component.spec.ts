import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsColiveComponent } from './ms-colive.component';

describe('MsColiveComponent', () => {
  let component: MsColiveComponent;
  let fixture: ComponentFixture<MsColiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsColiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsColiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

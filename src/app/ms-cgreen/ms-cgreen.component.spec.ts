import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsCgreenComponent } from './ms-cgreen.component';

describe('MsCgreenComponent', () => {
  let component: MsCgreenComponent;
  let fixture: ComponentFixture<MsCgreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsCgreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsCgreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

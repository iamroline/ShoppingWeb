import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Activeset1GreenComponent } from './activeset1-green.component';

describe('Activeset1GreenComponent', () => {
  let component: Activeset1GreenComponent;
  let fixture: ComponentFixture<Activeset1GreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Activeset1GreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Activeset1GreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

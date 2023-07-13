import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsEComponent } from './ms-e.component';

describe('MsEComponent', () => {
  let component: MsEComponent;
  let fixture: ComponentFixture<MsEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

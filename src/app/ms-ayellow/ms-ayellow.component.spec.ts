import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsAyellowComponent } from './ms-ayellow.component';

describe('MsAyellowComponent', () => {
  let component: MsAyellowComponent;
  let fixture: ComponentFixture<MsAyellowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsAyellowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsAyellowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

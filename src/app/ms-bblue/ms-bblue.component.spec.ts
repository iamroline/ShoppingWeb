import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsBblueComponent } from './ms-bblue.component';

describe('MsBblueComponent', () => {
  let component: MsBblueComponent;
  let fixture: ComponentFixture<MsBblueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsBblueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsBblueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

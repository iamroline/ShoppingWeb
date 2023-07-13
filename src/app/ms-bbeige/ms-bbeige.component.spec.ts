import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsBbeigeComponent } from './ms-bbeige.component';

describe('MsBbeigeComponent', () => {
  let component: MsBbeigeComponent;
  let fixture: ComponentFixture<MsBbeigeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsBbeigeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsBbeigeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

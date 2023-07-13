import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsFComponent } from './ms-f.component';

describe('MsFComponent', () => {
  let component: MsFComponent;
  let fixture: ComponentFixture<MsFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

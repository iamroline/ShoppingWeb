import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Activeset2BlueComponent } from './activeset2-blue.component';

describe('Activeset2BlueComponent', () => {
  let component: Activeset2BlueComponent;
  let fixture: ComponentFixture<Activeset2BlueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Activeset2BlueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Activeset2BlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

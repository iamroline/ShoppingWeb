import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomendressComponent } from './womendress.component';

describe('WomendressComponent', () => {
  let component: WomendressComponent;
  let fixture: ComponentFixture<WomendressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomendressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomendressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

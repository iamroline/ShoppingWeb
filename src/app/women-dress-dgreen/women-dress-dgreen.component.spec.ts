import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenDressDgreenComponent } from './women-dress-dgreen.component';

describe('WomenDressDgreenComponent', () => {
  let component: WomenDressDgreenComponent;
  let fixture: ComponentFixture<WomenDressDgreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenDressDgreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenDressDgreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

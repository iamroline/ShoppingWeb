import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenDressDblackComponent } from './women-dress-dblack.component';

describe('WomenDressDblackComponent', () => {
  let component: WomenDressDblackComponent;
  let fixture: ComponentFixture<WomenDressDblackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenDressDblackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenDressDblackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

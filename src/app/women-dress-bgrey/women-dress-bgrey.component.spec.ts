import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenDressBGreyComponent } from './women-dress-bgrey.component';

describe('WomenDressBGreyComponent', () => {
  let component: WomenDressBGreyComponent;
  let fixture: ComponentFixture<WomenDressBGreyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenDressBGreyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenDressBGreyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

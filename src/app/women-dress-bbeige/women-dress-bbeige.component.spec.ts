import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenDressBbeigeComponent } from './women-dress-bbeige.component';

describe('WomenDressBbeigeComponent', () => {
  let component: WomenDressBbeigeComponent;
  let fixture: ComponentFixture<WomenDressBbeigeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenDressBbeigeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenDressBbeigeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

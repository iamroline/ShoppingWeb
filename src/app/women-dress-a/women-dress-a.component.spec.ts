import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenDressAComponent } from './women-dress-a.component';

describe('WomenDressAComponent', () => {
  let component: WomenDressAComponent;
  let fixture: ComponentFixture<WomenDressAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenDressAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenDressAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

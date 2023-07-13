import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenDressDbeigeComponent } from './women-dress-dbeige.component';

describe('WomenDressDbeigeComponent', () => {
  let component: WomenDressDbeigeComponent;
  let fixture: ComponentFixture<WomenDressDbeigeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenDressDbeigeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenDressDbeigeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

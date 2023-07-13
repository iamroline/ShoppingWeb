import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenDressCComponent } from './women-dress-c.component';

describe('WomenDressCComponent', () => {
  let component: WomenDressCComponent;
  let fixture: ComponentFixture<WomenDressCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenDressCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenDressCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

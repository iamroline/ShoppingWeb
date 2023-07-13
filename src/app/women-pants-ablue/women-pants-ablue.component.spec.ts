import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenPantsAblueComponent } from './women-pants-ablue.component';

describe('WomenPantsAblueComponent', () => {
  let component: WomenPantsAblueComponent;
  let fixture: ComponentFixture<WomenPantsAblueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenPantsAblueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenPantsAblueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

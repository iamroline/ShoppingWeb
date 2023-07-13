import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenPantsAbrownComponent } from './women-pants-abrown.component';

describe('WomenPantsAbrownComponent', () => {
  let component: WomenPantsAbrownComponent;
  let fixture: ComponentFixture<WomenPantsAbrownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenPantsAbrownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenPantsAbrownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

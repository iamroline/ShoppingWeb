import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenActiveComponent } from './women-active.component';

describe('WomenActiveComponent', () => {
  let component: WomenActiveComponent;
  let fixture: ComponentFixture<WomenActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

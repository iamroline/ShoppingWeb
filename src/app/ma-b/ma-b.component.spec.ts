import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaBComponent } from './ma-b.component';

describe('MaBComponent', () => {
  let component: MaBComponent;
  let fixture: ComponentFixture<MaBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

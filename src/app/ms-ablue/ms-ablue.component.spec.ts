import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsAblueComponent } from './ms-ablue.component';

describe('MsAblueComponent', () => {
  let component: MsAblueComponent;
  let fixture: ComponentFixture<MsAblueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsAblueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsAblueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

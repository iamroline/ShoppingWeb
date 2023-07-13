import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MablackComponent } from './mablack.component';

describe('MablackComponent', () => {
  let component: MablackComponent;
  let fixture: ComponentFixture<MablackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MablackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MablackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenactiveComponent } from './menactive.component';

describe('MenactiveComponent', () => {
  let component: MenactiveComponent;
  let fixture: ComponentFixture<MenactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

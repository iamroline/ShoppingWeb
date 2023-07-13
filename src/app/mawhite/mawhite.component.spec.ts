import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MawhiteComponent } from './mawhite.component';

describe('MawhiteComponent', () => {
  let component: MawhiteComponent;
  let fixture: ComponentFixture<MawhiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MawhiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MawhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

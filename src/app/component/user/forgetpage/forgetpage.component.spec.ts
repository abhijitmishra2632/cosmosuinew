import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetpageComponent } from './forgetpage.component';

describe('ForgetpageComponent', () => {
  let component: ForgetpageComponent;
  let fixture: ComponentFixture<ForgetpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

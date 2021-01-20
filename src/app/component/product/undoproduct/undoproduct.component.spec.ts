import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UndoproductComponent } from './undoproduct.component';

describe('UndoproductComponent', () => {
  let component: UndoproductComponent;
  let fixture: ComponentFixture<UndoproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UndoproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndoproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

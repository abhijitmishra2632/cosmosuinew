import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadpicComponent } from './uploadpic.component';

describe('UploadpicComponent', () => {
  let component: UploadpicComponent;
  let fixture: ComponentFixture<UploadpicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadpicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadpicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

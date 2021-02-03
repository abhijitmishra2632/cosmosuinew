import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfcreatorComponent } from './pdfcreator.component';

describe('PdfcreatorComponent', () => {
  let component: PdfcreatorComponent;
  let fixture: ComponentFixture<PdfcreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfcreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfcreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

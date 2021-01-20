import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedproductComponent } from './deletedproduct.component';

describe('DeletedproductComponent', () => {
  let component: DeletedproductComponent;
  let fixture: ComponentFixture<DeletedproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletedproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

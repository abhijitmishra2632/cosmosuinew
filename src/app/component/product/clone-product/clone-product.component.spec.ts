import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloneProductComponent } from './clone-product.component';

describe('CloneProductComponent', () => {
  let component: CloneProductComponent;
  let fixture: ComponentFixture<CloneProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloneProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloneProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

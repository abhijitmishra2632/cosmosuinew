import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListbylocationComponent } from './listbylocation.component';

describe('ListbylocationComponent', () => {
  let component: ListbylocationComponent;
  let fixture: ComponentFixture<ListbylocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListbylocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListbylocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproductdetailsComponent } from './addproductdetails.component';

describe('AddproductdetailsComponent', () => {
  let component: AddproductdetailsComponent;
  let fixture: ComponentFixture<AddproductdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddproductdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddproductdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

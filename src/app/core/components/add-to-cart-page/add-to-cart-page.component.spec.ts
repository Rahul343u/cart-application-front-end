import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCartPageComponent } from './add-to-cart-page.component';

describe('AddToCartPageComponent', () => {
  let component: AddToCartPageComponent;
  let fixture: ComponentFixture<AddToCartPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToCartPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToCartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

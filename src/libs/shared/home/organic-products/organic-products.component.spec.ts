import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganicProductsComponent } from './organic-products.component';

describe('OrganicProductsComponent', () => {
  let component: OrganicProductsComponent;
  let fixture: ComponentFixture<OrganicProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganicProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganicProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendordetComponent } from './vendordet.component';

describe('VendordetComponent', () => {
  let component: VendordetComponent;
  let fixture: ComponentFixture<VendordetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendordetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendordetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

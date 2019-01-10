import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreProductosComponent } from './padre-productos.component';

describe('PadreProductosComponent', () => {
  let component: PadreProductosComponent;
  let fixture: ComponentFixture<PadreProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadreProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadreProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarZonaComponent } from './agregar-zona.component';

describe('AgregarZonaComponent', () => {
  let component: AgregarZonaComponent;
  let fixture: ComponentFixture<AgregarZonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarZonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarZonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

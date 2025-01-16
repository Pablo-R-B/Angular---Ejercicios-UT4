import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaVehiculosComponent } from './sistema-vehiculos.component';

describe('SistemaVehiculosComponent', () => {
  let component: SistemaVehiculosComponent;
  let fixture: ComponentFixture<SistemaVehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SistemaVehiculosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistemaVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

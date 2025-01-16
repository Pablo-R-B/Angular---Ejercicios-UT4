import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaPagoComponent } from './sistema-pago.component';

describe('SistemaPagoComponent', () => {
  let component: SistemaPagoComponent;
  let fixture: ComponentFixture<SistemaPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SistemaPagoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistemaPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

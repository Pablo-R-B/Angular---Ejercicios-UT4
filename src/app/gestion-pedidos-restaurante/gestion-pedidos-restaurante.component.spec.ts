import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPedidosRestauranteComponent } from './gestion-pedidos-restaurante.component';

describe('GestionPedidosRestauranteComponent', () => {
  let component: GestionPedidosRestauranteComponent;
  let fixture: ComponentFixture<GestionPedidosRestauranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionPedidosRestauranteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionPedidosRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

class Pago {
  procesarPago(): string {
    return 'Procesando pago...';
  }
}

class PagoConTarjeta extends Pago {

  override procesarPago(): string {
    return 'Procesando pago con tarjeta';
  }
}

class PagoConPaypal extends Pago {
 override procesarPago(): string {
    return 'Procesando pago con PayPal';
  }
}

@Component({
  selector: 'app-sistema-pago',
  imports: [
    NgForOf
  ],
  templateUrl: './sistema-pago.component.html',
  styleUrl: './sistema-pago.component.css'
})
export class SistemaPagoComponent {

  pagos: Pago[] = [];
  resultados: string[] = [];

  agregarPagoConTarjeta(): void {
    this.pagos.push(new PagoConTarjeta());
    this.actualizarResultados();
  }

  agregarPagoConPaypal(): void {
    this.pagos.push(new PagoConPaypal());
    this.actualizarResultados();
  }

  procesarTodosLosPagos(): void {
    this.resultados = this.pagos.map((pago) => pago.procesarPago());
  }

  actualizarResultados(): void {
    this.resultados = this.pagos.map((pago) => pago.procesarPago());
  }

}

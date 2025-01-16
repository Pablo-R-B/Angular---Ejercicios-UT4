import { Component } from '@angular/core';

class Cliente {
  constructor(
    public id: number,
    public nombre: string,
    public saldo: number
  ) {}

  realizarDeposito(cantidad: number): string {
    if (cantidad <= 0) {
      return 'La cantidad debe ser mayor a 0.';
    }
    this.saldo += cantidad;
    return `Depósito realizado. Nuevo saldo: ${this.saldo}€.`;
  }

  realizarRetiro(cantidad: number): string {
    if (cantidad > this.saldo) {
      return 'Fondos insuficientes.';
    }
    if (cantidad <= 0) {
      return 'La cantidad debe ser mayor a 0.';
    }
    this.saldo -= cantidad;
    return `Retiro realizado. Nuevo saldo: ${this.saldo}€.`;
  }

  mostrarEstado(): string {
    return `Cliente: ${this.nombre} | Saldo: ${this.saldo}€`;
  }
}

class Banco {
  clientes: Cliente[] = [];

  agregarCliente(cliente: Cliente): string {
    if (this.clientes.some(c => c.id === cliente.id)) {
      return `El cliente con ID ${cliente.id} ya existe.`;
    }
    this.clientes.push(cliente);
    return `Cliente ${cliente.nombre} añadido con éxito.`;
  }

  buscarClientePorId(id: number): Cliente | null {
    return this.clientes.find(cliente => cliente.id === id) || null;
  }

  calcularSaldoTotal(): number {
    return this.clientes.reduce((total, cliente) => total + cliente.saldo, 0);
  }
}


@Component({
  selector: 'app-banco-clientes',
  imports: [],
  templateUrl: './banco-clientes.component.html',
  styleUrl: './banco-clientes.component.css'
})
export class BancoClientesComponent {

  banco = new Banco();
  mensaje: string = '';

  interactuarConBanco(opcion: number, argumento1: any, argumento2: any = null): void {
    switch (opcion) {
      case 1:
        const nuevoCliente = new Cliente(argumento1, argumento2, 0);
        this.mensaje = this.banco.agregarCliente(nuevoCliente);
        break;
      case 2:
        const cliente = this.banco.buscarClientePorId(argumento1);
        this.mensaje = cliente ? cliente.mostrarEstado() : 'Cliente no encontrado.';
        break;
      case 3:
        const saldoTotal = this.banco.calcularSaldoTotal();
        this.mensaje = `Saldo total del banco: ${saldoTotal}€.`;
        break;
      case 4:
        const clienteDeposito = this.banco.buscarClientePorId(argumento1);
        if (clienteDeposito) {
          this.mensaje = clienteDeposito.realizarDeposito(argumento2);
        } else {
          this.mensaje = 'Cliente no encontrado para realizar depósito.';
        }
        break;
      case 5:
        const clienteRetiro = this.banco.buscarClientePorId(argumento1);
        if (clienteRetiro) {
          this.mensaje = clienteRetiro.realizarRetiro(argumento2);
        } else {
          this.mensaje = 'Cliente no encontrado para realizar retiro.';
        }
        break;
      default:
        this.mensaje = 'Opción inválida.';
    }
  }

}

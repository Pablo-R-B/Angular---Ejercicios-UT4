import {Component, OnInit} from '@angular/core';
import {NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';

class Plato {
  constructor(
    public id: number,
    public nombre: string,
    public precio: number
  ) {}
}

class Pedido {
  constructor(
    public id: number,
    public cliente: string,
    public platos: Plato[]
  ) {}

  calculaTotal(): number {
    return this.platos.reduce((sum, plato) => sum + plato.precio, 0);
  }
}

class Restaurante {
  private pedidos: Pedido[] = [];

  agregarPedido(pedido: Pedido): void {
    this.pedidos.push(pedido);
  }

  calcularTotalVentas(): number {
    return this.pedidos.reduce((sum, pedido) => sum + pedido.calculaTotal(), 0);
  }

  buscarPedidosCliente(cliente: string): Pedido[] {
    return this.pedidos.filter(pedido =>
      pedido.cliente.toLowerCase().includes(cliente.toLowerCase())
    );
  }

  filtrarPedidosPorTotal(cantidad: number): Pedido[] {
    return this.pedidos.filter(pedido => pedido.calculaTotal() > cantidad);
  }
}

@Component({
  selector: 'app-gestion-pedidos-restaurante',
  imports: [
    NgForOf,
    FormsModule
  ],
  templateUrl: './gestion-pedidos-restaurante.component.html',
  styleUrl: './gestion-pedidos-restaurante.component.css'
})
export class GestionPedidosRestauranteComponent implements OnInit{

  restaurante = new Restaurante();
  pedidos: Pedido[] = [];
  platos: Plato[] = [
    new Plato(1, 'Paella', 20),
    new Plato(2, 'Gazpacho', 8),
    new Plato(3, 'Tortilla', 10),
    new Plato(2, "Calamares", 15)
  ];

  nuevoCliente = '';
  platosSeleccionados: Plato[] = [];
  filtroCliente = '';
  filtroCantidad = 0;

  ngOnInit(): void {
    // Añadir algunos pedidos de ejemplo
    this.restaurante.agregarPedido(new Pedido(1, 'Juan', [this.platos[0], this.platos[1]]));
    this.actualizarPedidos();
  }

  agregarPedido(): void {
    if (this.nuevoCliente && this.platosSeleccionados.length > 0) {
      const nuevoPedido = new Pedido(
        this.pedidos.length + 1,
        this.nuevoCliente,
        [...this.platosSeleccionados]
      );
      this.restaurante.agregarPedido(nuevoPedido);
      this.actualizarPedidos();
      this.resetForm();
    }
  }

  actualizarPedidos(): void {
    this.pedidos = [...this.restaurante.buscarPedidosCliente(this.filtroCliente)]
      .filter(pedido => pedido.calculaTotal() > this.filtroCantidad);
  }

  private resetForm(): void {
    this.nuevoCliente = '';
    this.platosSeleccionados = [];
  }


}

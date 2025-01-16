import { Component } from '@angular/core';
import {DecimalPipe, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-listado-productos',
  imports: [
    NgForOf,
    DecimalPipe,
    NgIf
  ],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent {

  productos = [
    { nombre: "Manzana", precio: 5, categoria: "alimentos" },
    { nombre: "Cereales", precio: 12, categoria: "alimentos" },
    { nombre: "Detergente", precio: 15, categoria: "limpieza" },
    { nombre: "Champú", precio: 8, categoria: "higiene" }
  ];

  nombresCaros: string[] = [];
  promedioAlimentos: number | null = null;
  productosConDescuento: any[] = [];

  obtenerNombresCaros(): void {
    this.nombresCaros = this.productos
      .filter(producto => producto.precio > 10)
      .map(producto => producto.nombre);
  }

  calcularPromedioAlimentos(): void {
    const alimentos = this.productos.filter(producto => producto.categoria === "alimentos");
    const total = alimentos.reduce((acc, curr) => acc + curr.precio, 0);
    this.promedioAlimentos = alimentos.length ? total / alimentos.length : null;
  }

  aplicarDescuento(): void {
    this.productosConDescuento = this.productos.map(producto => ({
      ...producto,
      precio: producto.precio * 0.9
    }));
  }

}

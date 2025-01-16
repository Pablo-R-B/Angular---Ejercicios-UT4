import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

class Vehiculo {
  constructor(public marca: string, public modelo: string, public anyo: number) {}

  mostrarDetalles(): string {
    return `Marca: ${this.marca} | Modelo: ${this.modelo} | Año: ${this.anyo}`;
  }
}

class Coche extends Vehiculo {
  constructor(
    marca: string,
    modelo: string,
    anyo: number,
    public numeroDePuertas: number
  ) {
    super(marca, modelo, anyo);
  }

  override mostrarDetalles(): string {
    return `${super.mostrarDetalles()} | Número de puertas: ${this.numeroDePuertas}`;
  }
}

class Motocicleta extends Vehiculo {
  constructor(
    marca: string,
    modelo: string,
    anyo: number,
    public tipoDeManillar: string
  ) {
    super(marca, modelo, anyo);
  }

  override mostrarDetalles(): string {
    return `${super.mostrarDetalles()} | Tipo de manillar: ${this.tipoDeManillar}`;
  }
}

@Component({
  selector: 'app-sistema-vehiculos',
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './sistema-vehiculos.component.html',
  styleUrl: './sistema-vehiculos.component.css'
})
export class SistemaVehiculosComponent {

  vehiculos: Vehiculo[] = [];
  mensaje: string = '';

  agregarCoche(marca: string, modelo: string, año: number, puertas: number): void {
    const nuevoCoche = new Coche(marca, modelo, año, puertas);
    this.vehiculos.push(nuevoCoche);
    this.mensaje = 'Coche añadido con éxito.';
  }

  agregarMotocicleta(marca: string, modelo: string, año: number, manillar: string): void {
    const nuevaMotocicleta = new Motocicleta(marca, modelo, año, manillar);
    this.vehiculos.push(nuevaMotocicleta);
    this.mensaje = 'La motocicleta añadida con éxito.';
  }

  mostrarDetalles(): string[] {
    return this.vehiculos.map((vehiculo) => vehiculo.mostrarDetalles());
  }

}

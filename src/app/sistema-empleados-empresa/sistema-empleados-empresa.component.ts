import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

class Empleado {
  constructor(public nombre: string, public apellido: string, public salario: number) {}

  mostrarDetalles(): string {
    return `Nombre: ${this.nombre} ${this.apellido} | Salario: $${this.salario}`;
  }
}

class EmpleadoTiempoCompleto extends Empleado {
  constructor(
    nombre: string,
    apellido: string,
    salario: number,
    public horasExtras: number,
    public bonoPorHora: number
  ) {
    super(nombre, apellido, salario);
  }

  calcularSalario(): number {
    return this.salario + this.horasExtras * this.bonoPorHora;
  }

  override mostrarDetalles(): string {
    return `${super.mostrarDetalles()} | Salario Total (con horas extras): $${this.calcularSalario()}`;
  }
}

class EmpleadoPorHoras extends Empleado {
  constructor(
    nombre: string,
    apellido: string,
    public tarifaPorHora: number,
    public horasTrabajadas: number
  ) {
    super(nombre, apellido, tarifaPorHora * horasTrabajadas);
  }

  calcularSalario(): number {
    return this.tarifaPorHora * this.horasTrabajadas;
  }

  override mostrarDetalles(): string {
    return `${super.mostrarDetalles()} | Salario Total (por horas): $${this.calcularSalario()}`;
  }
}

@Component({
  selector: 'app-sistema-empleados-empresa',
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './sistema-empleados-empresa.component.html',
  styleUrl: './sistema-empleados-empresa.component.css'
})
export class SistemaEmpleadosEmpresaComponent {

  empleados: Empleado[] = [];
  mensaje: string = '';

  agregarEmpleadoTiempoCompleto(nombre: string, apellido: string, salario: number, horasExtras: number, bonoPorHora: number): void {
    const nuevoEmpleado = new EmpleadoTiempoCompleto(nombre, apellido, salario, horasExtras, bonoPorHora);
    this.empleados.push(nuevoEmpleado);
    this.mensaje = 'El empleado a tiempo completo ha sido añadido.';
  }

  agregarEmpleadoPorHoras(nombre: string, apellido: string, tarifaPorHora: number, horasTrabajadas: number): void {
    const nuevoEmpleado = new EmpleadoPorHoras(nombre, apellido, tarifaPorHora, horasTrabajadas);
    this.empleados.push(nuevoEmpleado);
    this.mensaje = 'El empleado por horas ha sido añadido.';
  }

  mostrarDetalles(): string[] {
    return this.empleados.map((empleado) => empleado.mostrarDetalles());
  }

}

import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

class Animal {
  constructor(
    public especie: string,
    public nombre: string,
    public edad: number,
    public habitat: string
  ) {}

  cambiarHabitat(nuevoHabitat: string): void {
    this.habitat = nuevoHabitat;
  }

  incrementarEdad(): void {
    this.edad += 1;
  }

  mostrarInformacion(): string {
    return `Especie: ${this.especie} | Nombre: ${this.nombre} | Edad: ${this.edad} | Hábitat: ${this.habitat}`;
  }
}

class Zoologico {
  animales: Animal[] = [];

  agregarAnimal(animal: Animal): string {
    this.animales.push(animal);
    return `Animal ${animal.nombre} añadido con éxito.`;
  }

  buscarPorEspecie(especie: string): Animal[] {
    return this.animales.filter(animal => animal.especie === especie);
  }

  mostrarPorHabitat(habitat: string): Animal[] {
    return this.animales.filter(animal => animal.habitat === habitat);
  }
}


@Component({
  selector: 'app-zoo-virtual',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './zoo-virtual.component.html',
  styleUrl: './zoo-virtual.component.css'
})
export class ZooVirtualComponent {

  zoologico = new Zoologico();
  mensaje: string = '';
  resultados: string[] = [];

  interactuarConZoo(opcion: number, argumento1: any, argumento2: any = null): void {
    switch (opcion) {
      case 1:
        const nuevoAnimal = new Animal(argumento1, argumento2.nombre, argumento2.edad, argumento2.habitat);
        this.mensaje = this.zoologico.agregarAnimal(nuevoAnimal);
        break;
      case 2:
        const animalesPorEspecie = this.zoologico.buscarPorEspecie(argumento1);
        this.resultados = animalesPorEspecie.map(animal => animal.mostrarInformacion());
        break;
      case 3:
        const animalesPorHabitat = this.zoologico.mostrarPorHabitat(argumento1);
        this.resultados = animalesPorHabitat.map(animal => animal.mostrarInformacion());
        break;
      case 4:
        const animalHabitat = this.zoologico.animales.find(a => a.nombre === argumento1);
        if (animalHabitat) {
          animalHabitat.cambiarHabitat(argumento2);
          this.mensaje = `Hábitat de ${argumento1} actualizado a ${argumento2}.`;
        } else {
          this.mensaje = 'No se encontró el animal.';
        }
        break;
      case 5:
        const animalEdad = this.zoologico.animales.find(a => a.nombre === argumento1);
        if (animalEdad) {
          animalEdad.incrementarEdad();
          this.mensaje = `Edad de ${argumento1} incrementada. Nueva edad: ${animalEdad.edad}`;
        } else {
          this.mensaje = 'Animal no encontrado.';
        }
        break;
      default:
        this.mensaje = 'Opción inválida.';
    }
  }

}

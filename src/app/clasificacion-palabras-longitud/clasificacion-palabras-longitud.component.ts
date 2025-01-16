import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-clasificacion-palabras-longitud',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './clasificacion-palabras-longitud.component.html',
  styleUrl: './clasificacion-palabras-longitud.component.css'
})
export class ClasificacionPalabrasLongitudComponent {

  palabras: string[] = ['manzana', 'pera', 'melon', 'plátano', 'níspero', 'fresa'];

  palabrasMayusculas: string[] = [];
  palabrasLargas: string[] = [];
  palabrasOrdenadas: string[] = [];

  procesarPalabras(): void {

    this.palabrasMayusculas = this.palabras.map((palabra) => palabra.toUpperCase());

    this.palabrasLargas = this.palabras.filter((palabra) => palabra.length > 5);

    this.palabrasOrdenadas = [...this.palabras].sort((a, b) => b.length - a.length);
  }

}

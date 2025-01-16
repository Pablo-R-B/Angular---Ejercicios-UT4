import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-libreria-palabras-clave',
  imports: [
    NgForOf
  ],
  templateUrl: './libreria-palabras-clave.component.html',
  styleUrl: './libreria-palabras-clave.component.css'
})
export class LibreriaPalabrasClaveComponent {

  keywords: string[] = ['JavaScript', 'TypeScript', 'Node', 'React', 'Angular'];
  message: string = '';

  buscarPalabra(palabra: string): string {
    const index = this.keywords.indexOf(palabra);
    return index !== -1
      ? `La palabra "${palabra}" está en la posición ${index + 1}.`
      : `La palabra "${palabra}" no se encontró.`;
  }

  agregarPalabra(nuevaPalabra: string): string {
    if (!nuevaPalabra.trim()) {
      return 'La palabra no puede estar vacía.';
    }
    if (this.keywords.indexOf(nuevaPalabra) === -1) {
      this.keywords.push(nuevaPalabra);
      return `La palabra "${nuevaPalabra}" ha sido añadida.`;
    } else {
      return `La palabra "${nuevaPalabra}" ya existe.`;
    }
  }
  ordenarPalabras(): void {
    this.keywords.sort((a, b) => a.localeCompare(b));
    this.message = 'Las palabras han sido ordenadas alfabéticamente.';
  }

  interactuarConMenu(opcion: number, argumento: string = ''): void {
    switch (opcion) {
      case 1:
        this.message = this.buscarPalabra(argumento);
        break;
      case 2:
        this.message = this.agregarPalabra(argumento);
        break;
      case 3:
        this.ordenarPalabras();
        break;
      default:
        this.message = 'Opción inválida.';
    }
  }

}

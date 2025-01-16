import { Component } from '@angular/core';
import {DecimalPipe, NgForOf} from '@angular/common';

interface Pelicula {
  titulo: string;
  director: string;
  anyo: number;
  genero: string;
  valoracion: number;
}

@Component({
  selector: 'app-catalogo-peliculas',
  imports: [
    NgForOf,
    DecimalPipe
  ],
  templateUrl: './catalogo-peliculas.component.html',
  styleUrl: './catalogo-peliculas.component.css'
})
export class CatalogoPeliculasComponent {

  peliculas: Pelicula[] = [
    { titulo: "Inception", director: "Christopher Nolan", anyo: 2010, genero: "Ciencia ficcion", valoracion: 9 },
    { titulo: "El padrinno", director: "Francis Ford Coppola", anyo: 1972, genero: "Poliaco", valoracion: 10 },
    { titulo: "Interstellar", director: "Christopher Nolan", anyo: 2014, genero: "Ciencia ficcion", valoracion: 8 },
    { titulo: "Parásitos", director: "Bong Joon-ho", anyo: 2019, genero: "Suspense", valoracion: 9 },
    { titulo: "Pulp Fiction", director: "Quentin Tarantino", anyo: 1994, genero: "Poliaco", valoracion: 8 },
  ];

  peliculasFiltradas: Pelicula[] = [];

  busquedaPorGenero(genre: string): void {
    this.peliculasFiltradas = this.peliculas.filter(pelicula => pelicula.genero.toLowerCase() === genre.toLowerCase());
  }

  obtenerMayorValoracion(): Pelicula[] {
    return [...this.peliculas]
      .sort((a, b) => b.valoracion - a.valoracion)
      .slice(0, 3);
  }

  caularValoracionMedia(): number {
    const totalRating = this.peliculas.reduce((sum, pelicula) => sum + pelicula.valoracion, 0);
    return totalRating / this.peliculas.length;
  }

  acualizaValoracion(title: string, newRating: number): void {
    const pelicula = this.peliculas.find(pelicula => pelicula.titulo.toLowerCase() === title.toLowerCase());
    if (pelicula && newRating >= 1 && newRating <= 10) {
      pelicula.valoracion = newRating;
    }
  }


}

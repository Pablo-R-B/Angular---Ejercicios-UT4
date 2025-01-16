import { Component } from '@angular/core';
import {CatalogoPeliculasComponent} from './catalogo-peliculas/catalogo-peliculas.component';
import {GestionPedidosRestauranteComponent} from './gestion-pedidos-restaurante/gestion-pedidos-restaurante.component';
import {
  AnalisisDatosMeteorologicosComponent
} from './analisis-datos-meteorologicos/analisis-datos-meteorologicos.component';
import {LibreriaPalabrasClaveComponent} from './libreria-palabras-clave/libreria-palabras-clave.component';
import {BancoClientesComponent} from './banco-clientes/banco-clientes.component';
import {ZooVirtualComponent} from './zoo-virtual/zoo-virtual.component';
import {ListadoProductosComponent} from './listado-productos/listado-productos.component';
import {
  ClasificacionPalabrasLongitudComponent
} from './clasificacion-palabras-longitud/clasificacion-palabras-longitud.component';
import {SistemaVehiculosComponent} from './sistema-vehiculos/sistema-vehiculos.component';
import {SistemaEmpleadosEmpresaComponent} from './sistema-empleados-empresa/sistema-empleados-empresa.component';


@Component({
  selector: 'app-root',
  imports: [CatalogoPeliculasComponent, GestionPedidosRestauranteComponent, AnalisisDatosMeteorologicosComponent, LibreriaPalabrasClaveComponent, BancoClientesComponent, ZooVirtualComponent, ListadoProductosComponent, ClasificacionPalabrasLongitudComponent, SistemaVehiculosComponent, SistemaEmpleadosEmpresaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Arrays-Funciones-Objetos';
}

import { Component } from '@angular/core';
import {DecimalPipe, NgForOf, NgIf} from '@angular/common';

interface DiaMeteorologico {
  fecha: string;
  temperatura: number;
  humedad: number;
  precipitacion: number;
}


@Component({
  selector: 'app-analisis-datos-meteorologicos',
  imports: [
    NgIf,
    NgForOf,
    DecimalPipe
  ],
  templateUrl: './analisis-datos-meteorologicos.component.html',
  styleUrl: './analisis-datos-meteorologicos.component.css'
})
export class AnalisisDatosMeteorologicosComponent {

  dias: DiaMeteorologico[] = [
    { fecha: '01/01/2025', temperatura: 20, humedad: 80, precipitacion: 5 },
    { fecha: '02/01/2025', temperatura: 25, humedad: 60, precipitacion: 0 },
    { fecha: '03/01/2025', temperatura: 30, humedad: 50, precipitacion: 0 },
    { fecha: '04/01/2025', temperatura: 18, humedad: 90, precipitacion: 10 },
    { fecha: '05/01/2025', temperatura: 22, humedad: 70, precipitacion: 2 },
  ];

  calcularTemperaturaPromedio(): number {
    const totalTemperatura = this.dias.reduce((sum, dia) => sum + dia.temperatura, 0);
    return totalTemperatura / this.dias.length;
  }

  filtrarDiasConLluvia(): DiaMeteorologico[] {
    return this.dias.filter(dia => dia.precipitacion > 0);
  }

  encontrarDiaConMaximaTemperatura(): DiaMeteorologico | null {
    return this.dias.reduce((max, dia) => (dia.temperatura > max.temperatura ? dia : max), this.dias[0]);
  }

  generarResumen(): string {
    const diasLluviosos = this.filtrarDiasConLluvia().length;
    const temperaturaPromedio = this.calcularTemperaturaPromedio().toFixed(1);
    const diaMaxTemp = this.encontrarDiaConMaximaTemperatura();

    return `Resumen del mes:\nDías lluviosos: ${diasLluviosos}\nTemperatura promedio: ${temperaturaPromedio}°C\nMáxima temperatura: ${diaMaxTemp?.temperatura}°C el día ${diaMaxTemp?.fecha}`;
  }

}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificacionPalabrasLongitudComponent } from './clasificacion-palabras-longitud.component';

describe('ClasificacionPalabrasLongitudComponent', () => {
  let component: ClasificacionPalabrasLongitudComponent;
  let fixture: ComponentFixture<ClasificacionPalabrasLongitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClasificacionPalabrasLongitudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasificacionPalabrasLongitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

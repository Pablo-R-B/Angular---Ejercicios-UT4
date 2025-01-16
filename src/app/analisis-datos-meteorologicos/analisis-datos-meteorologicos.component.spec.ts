import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisDatosMeteorologicosComponent } from './analisis-datos-meteorologicos.component';

describe('AnalisisDatosMeteorologicosComponent', () => {
  let component: AnalisisDatosMeteorologicosComponent;
  let fixture: ComponentFixture<AnalisisDatosMeteorologicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalisisDatosMeteorologicosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalisisDatosMeteorologicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

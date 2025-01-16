import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaEmpleadosEmpresaComponent } from './sistema-empleados-empresa.component';

describe('SistemaEmpleadosEmpresaComponent', () => {
  let component: SistemaEmpleadosEmpresaComponent;
  let fixture: ComponentFixture<SistemaEmpleadosEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SistemaEmpleadosEmpresaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistemaEmpleadosEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

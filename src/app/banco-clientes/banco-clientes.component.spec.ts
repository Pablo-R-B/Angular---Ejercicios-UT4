import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BancoClientesComponent } from './banco-clientes.component';

describe('BancoClientesComponent', () => {
  let component: BancoClientesComponent;
  let fixture: ComponentFixture<BancoClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BancoClientesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BancoClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

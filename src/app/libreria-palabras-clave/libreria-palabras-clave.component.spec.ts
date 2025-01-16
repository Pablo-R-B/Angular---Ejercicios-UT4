import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibreriaPalabrasClaveComponent } from './libreria-palabras-clave.component';

describe('LibreriaPalabrasClaveComponent', () => {
  let component: LibreriaPalabrasClaveComponent;
  let fixture: ComponentFixture<LibreriaPalabrasClaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibreriaPalabrasClaveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibreriaPalabrasClaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

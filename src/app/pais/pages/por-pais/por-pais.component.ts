import { Currency, Country } from './../../interfaces/pais.interface';
import { PaisService } from './../../services/pais.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  constructor(private paisService: PaisService) {}
  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);
    this.paisService.buscarPais(this.termino).subscribe(
      (paises) => {
        console.log('xxx');
        console.log(paises);
        this.paises = paises;
      },
      (err) => {
        console.log(err);
        this.hayError = true;
        this.paises = [];
      }
    );
  }
  sugerencias(termino: string) {
    this.hayError = false;
  }
}

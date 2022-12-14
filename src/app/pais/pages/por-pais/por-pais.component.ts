import { PaisService } from './../../services/pais.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
})
export class PorPaisComponent {
  termino: string = 'Hola Mundo';
  constructor(private paisService: PaisService) {}
  buscar() {
    console.log(this.termino);
    this.paisService.buscarPais(this.termino).subscribe((resp) => {
      console.log(resp);
    });
  }
}

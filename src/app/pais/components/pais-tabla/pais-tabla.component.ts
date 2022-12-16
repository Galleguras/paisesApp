import { Country } from './../../interfaces/pais.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
})
export class PaisTablaComponent implements OnInit {
  constructor() {}
  @Input() paises: Country[] = [];
  ngOnInit() {}
}

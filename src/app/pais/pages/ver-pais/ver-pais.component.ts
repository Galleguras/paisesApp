import { Country } from './../../interfaces/pais.interface';
import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
})
export class VerPaisComponent implements OnInit {
  pais!: Country;
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}
  ngOnInit() {
    /*     this.activatedRoute.params.subscribe((params) => {
      console.log(params);
      this.paisService.verPaisPorAlpha(params['id']).subscribe((pais) => {
        console.log(pais);
      });
    }); */
    this.activatedRoute.params
      .pipe(
        switchMap((param) => this.paisService.verPaisPorAlpha(param['id'])),
        tap(console.log)
      )
      .subscribe((resp) => {
        console.log(resp);
        this.pais = resp;
      });
  }
}

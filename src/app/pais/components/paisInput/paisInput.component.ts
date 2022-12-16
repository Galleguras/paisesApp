import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';
@Component({
  selector: 'app-paisInput',
  templateUrl: './paisInput.component.html',
})
export class PaisInputComponent implements OnInit {
  ngOnInit() {
    this.debouncer.pipe(debounceTime(300)).subscribe((valor) => {
      console.log('debouncer', valor);
      this.onDebounce.emit(valor);
    });
  }
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';
  debouncer: Subject<string> = new Subject();
  termino: string = '';
  buscar() {
    console.log(
      '🚀 ~ file: paisInput.component.ts:9 ~ PaisInputComponent ~ termino',
      this.termino
    );
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(event: any) {
    const valor = event.target.value;
    console.log(valor);
    console.log(this.termino);

    this.debouncer.next(this.termino);
  }
}

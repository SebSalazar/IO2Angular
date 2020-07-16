import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styles: []
})
export class EstadisticasComponent implements OnInit {

  @Input('acierto') public acierto;
  @Input('error') public error;
  @Input('usadas') public usadas;

  constructor() {

  }

  ngOnInit() {
  }

}

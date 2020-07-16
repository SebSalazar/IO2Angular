import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-figura',
  templateUrl: './figura.component.html',
  styles: []
})
export class FiguraComponent implements OnInit {

  @Input('figura') public figura;
  @Input('palabraMostrar') public palabraMostrar;

  constructor() { }

  ngOnInit() {
  }

}

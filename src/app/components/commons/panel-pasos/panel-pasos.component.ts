import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-c-commons-panelpasos',
  templateUrl: './panel-pasos.component.html',
  styleUrls: ['./panel-pasos.component.css']
})
export class PanelPasosComponent implements OnInit {

  _pasos: {}[];
  _pasosestado: boolean[] = [];

  @Input() infoInput: any[];
  @Output() salida: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this._pasos = this.infoInput;
  }
  
  CambiaDePaso(pasonumero: number) {
    console.log('voy a emitir: ' + pasonumero);
    this.salida.emit(pasonumero);
  }

}

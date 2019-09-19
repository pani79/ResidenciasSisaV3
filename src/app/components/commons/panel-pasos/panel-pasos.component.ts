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

  /* 
  infoPasoAPaso: any[] = [
    {
      titlulo: 'Formulario de residente',
      subtitulo: null,
      descripcion: 'Completar formulario',
      icono: 'icon-bot_ico_cmdb_ciudadano',
      seleccionado: false,
      completado: false,
      habilitado: false
    }
  ];
  */
  constructor() { }

  ngOnInit() {
    this._pasos = this.infoInput;
  }
  
  CambiaDePaso(pasonumero: number) {
    console.log('voy a emitir: ' + pasonumero);
    this.salida.emit(pasonumero);
  }

}

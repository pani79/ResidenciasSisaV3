import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-paginabase',
  templateUrl: './pagina-base.component.html',
  styleUrls: ['./pagina-base.component.css']
})
export class PaginaBaseComponent implements OnChanges, OnInit{
  @Input() info: string[];
  private _info: string[];

  infoPagina = {
    titulo: null,
    subtitulo: null,
    color: null,
    icono: null,
    textontroductorio: [],
    location: null,
    ayuda: {}
  };

  constructor() { }

  ngOnInit() {
    this.Configura('ngOnInit', this.info);
  }

  ngOnChanges(changes: SimpleChanges) {
    const info: SimpleChange = changes.info;
    //console.log('dato anterior : ' + info.previousValue);
    //console.log('dato ahora : ' + info.currentValue);
    this._info = info.currentValue;
    this.Configura('ngOnChanges', this._info);
  }


  Configura(quienLoPide: string, datos: any[]) {
    //console.log(quienLoPide + 'BasicPageComponent => ' + datos);
    this.infoPagina.subtitulo = datos[0];
    this.infoPagina.titulo = datos[1];
    this.infoPagina.color = datos[2];
    this.infoPagina.icono = datos[3];
    this.infoPagina.textontroductorio = datos[4];
    this.infoPagina.location = datos[5];
    this.infoPagina.ayuda = datos[6];
    //console.log(quienLoPide + 'BasicPageComponent titulo => ' + this.infoPagina['titulo']);
  }

  /*  Para implementar  - - - - - - - - - - - - - - - - - - - - - - - - */

  ayudaEnLinea() {    console.log('ayudaEnLinea 0> ' + this.info[5]);  }


}

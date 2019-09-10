import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-c-comons-botonctextoeicono',
  templateUrl: './boton-ctextoeicono.component.html',
  styleUrls: ['./boton-ctextoeicono.component.css']
})
export class BotonCtextoeiconoComponent implements OnInit {

  @Input() infoBoton: string[];

  tipo = 'boton boton_general';
  icono = 'bot_ico_aceptar';
  texto = 'Enviar datos';

  constructor() { }

  ngOnInit() {
    this.tipo = this.infoBoton[0];
    this.icono = this.infoBoton[1];
    this.texto = this.infoBoton[2];
  }

}

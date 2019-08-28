import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-residencias',
  templateUrl: './residencias.component.html',
  styleUrls: ['./residencias.component.css']
})
export class ResidenciasComponent implements OnInit {

  infoPaginaBase: string[] = [
    '',
    'Exámenes para residencias',
    'reg_residencias',
    'reg_residencias',
    'Para información sobre los distintos concursos de residencias consulte la web del <a href="http://www.msal.gov.ar/residencias" target="_blank">Ministerio de Salud de la Nación</a>'
  ];
  
  constructor() { }

  ngOnInit() {
  }

}

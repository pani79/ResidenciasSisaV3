import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent implements OnInit {

  infoPaginaBase: string[] = [
    '',
    'Pre-inscripción a Concurso de Residencias',
    'reg_residencias',
    'reg_residencias',
    // tslint:disable-next-line:max-line-length
    'Para facilitar su proceso de inscripción antes de comenzar por favor lea la siguiente información: <a href="https://sisa.msal.gov.ar/sisadoc/index.jsp?id=resid_inscribir" target="_blank">instructivo de inscripción</a>.',
    'x', // tirandole verdura va al home
    'https://sisa.msal.gov.ar/sisadoc/index.jsp?id=resid_inscribir'
  ];

  constructor() { }

  ngOnInit() {
  }

}

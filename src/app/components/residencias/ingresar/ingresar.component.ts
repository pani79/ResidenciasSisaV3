import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormArray, Validators, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit {

  ingreso: FormGroup;
  nDocumento: string = '';
  codigoAlfanumerico: string = '';

  infoPaginaBase: string[] = [
    '',
    'Exámenes para residencias',
    'reg_residencias',
    'reg_residencias',
    // tslint:disable-next-line:max-line-length
    'Para información sobre los distintos concursos de residencias consulte la web del <a href="http://www.msal.gov.ar/residencias" target="_blank">Ministerio de Salud de la Nación</a>.'
  ];
  // tslint:disable-next-line:max-line-length
  infoContacto = 'Para obtener soporte técnico y asistencia, escriba a <a href="mailto:soporte@sisa.msal.gov.ar">soporte@sisa.msal.gov.ar</a>';

  botones = {
    ingresar: ['boton boton_general', 'bot_ico_acceder', 'Ingresar'],
    crear: ['boton boton_pos', 'mod_usuarios', 'Crear residente']
  };

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    this.ingreso = this.fb.group({
      nDocumento: [''],
      codigoAlfanumerico: ['']
    });

  }

  formularioEnviar() {  this.router.navigateByUrl('consultas'); }
  ingresar() {
    //alert('(');
    this.router.navigateByUrl('residencias');
  }

}

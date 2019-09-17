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
    'Para información sobre los distintos concursos de residencias consulte la web del <a href="http://www.msal.gov.ar/residencias" target="_blank">Ministerio de Salud de la Nación</a>'
  ];
  botones = {
    bRenaper: ['boton boton_general', 'bot_ico_renaper'],
    bSisa: ['boton boton_general', 'ico_sisa_icono'],
    enviarFormulario: ['boton_pos', 'bot_ico_aceptar', 'Enviar formulario de preinscripción'],
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

  formularioEnviar() {}
  ingresar() {
    //alert('(');
    this.router.navigateByUrl('residencias');
  }

}

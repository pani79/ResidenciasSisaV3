import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, Validators, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

//  Servicio
import { ResidenciasService } from 'src/app/services/residencias.service';

@Component({
  selector: 'app-residente-crear',
  templateUrl: './residente-crear.component.html',
  styleUrls: ['./residente-crear.component.css']
})
export class ResidenteCrearComponent implements OnInit {

  infoPaginaBase: string[] = [
    'Residencias',
    'Formulario de residente',
    'reg_residencias',
    'reg_residencias',
    // tslint:disable-next-line:max-line-length
    'Para información sobre los distintos concursos de residencias consulte la web del <a href="http://www.msal.gov.ar/residencias" target="_blank">Ministerio de Salud de la Nación</a>.'
  ];

  muestraFormularioResidente = false;
  traeInfo: FormGroup;
  residenteNuevo: FormGroup;
/*   nombre: string = '';
  apellido: string = '';
  nDocumento: string = '';
  sexo: string = '';
  estadoCivil: string = '';
  hijos: string = '';
  email: string = '';
  emailConfirmar: string = ''; */

  botones = {
    crear: ['boton boton_pos', 'mod_usuarios', 'Crear residente'],
    renaper: ['boton boton_general', 'bot_ico_renaper', 'Obtener de Renaper']
  };

  constructor(
    private fb: FormBuilder,
    private residenciasServicio: ResidenciasService
  ) { }

  ngOnInit() {

    this.traeInfo = this.fb.group({
      nDocumento: [''],
      sexo: [''],
      fechaNacmiento: ['']
    });

    this.residenteNuevo = this.fb.group({
      nombre: [''],
      apellido: [''],
      nDocumento: [''],
      sexo: [''],
      estadoCivil: [''],
      hijos: [''],
      email: [''],
      emailConfirmar: ['']
    });
  }

  get nombre() {          return this.residenteNuevo.get('nombre'); }
  get apellido() {        return this.residenteNuevo.get('apellido'); }
  get nDocumento() {      return this.residenteNuevo.get('nDocumento'); }
  get sexo() {            return this.residenteNuevo.get('sexo'); }
  get estadoCivil() {     return this.residenteNuevo.get('estadoCivil'); }
  get hijos() {           return this.residenteNuevo.get('hijos'); }
  get email() {           return this.residenteNuevo.get('email'); }
  get emailConfirmar() {  return this.residenteNuevo.get('emailConfirmar'); }

  residenteCrear() {
    alert('(');
    console.log('residente -> ' + this.residenteNuevo.value);
    this.residenciasServicio.residenteCrea(this.residenteNuevo.value)
      .subscribe(
        response => console.log('Grade champion residente', response),
        error => console.error('A donde vas mostro?', error)
      );
  }

  obtieneInfo() {
    this.muestraFormularioResidente = true;
  }

}

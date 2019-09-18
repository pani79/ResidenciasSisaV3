import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, Validators, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

//  Modelos
import { ResidenciasPreinscripcionInscripcionModel } from 'src/app/models/residencias_preinscripcion_inscripcion';
import { ResidenciasPreinscripcionResidenteModel } from 'src/app/models/residencias_preinscripcion_residente';
import { ResidenciasPreinscripcionEncuestaModel } from 'src/app/models/residencias_preinscripcion_encuesta';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent implements OnInit {

  inscripcionConcurso: FormGroup;
  nombre: string = '';
  apellido: string = '';
  nDocumento: string = '';
  sexo: string = '';
  estadoCivil: string = '';
  hijos: string = '';
  email: string = '';
  emailConfirmar: string = '';

  residente = new FormControl('');
  //email = new FormControl('', [Validators.required, Validators.email]);
  //nombre = new FormControl('');



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

  botones = {
    /* bRenaper: ['boton boton_general', 'bot_ico_renaper'],
    bSisa: ['boton boton_general', 'ico_sisa_icono'], */
    enviarFormulario: ['boton_pos', 'bot_ico_aceptar', 'Enviar formulario de preinscripción']
  };
  formularioCompleto = false;


  // Panel paso a paso    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  pasoActual = 0;
  infoPasoAPaso: any[] = [
    {
      titlulo: 'Formulario de residente',
      subtitulo: null,
      descripcion: 'Completar formulario',
      icono: 'icon-bot_ico_cmdb_ciudadano',
      seleccionado: false,
      completado: false,
      habilitado: false
    }, {
      titlulo: 'Encuesta',
      subtitulo: null,
      descripcion: 'Completar encuesta (opcional)',
      icono: 'icon-bot_ico_ayudaenlinea',
      seleccionado: false,
      completado: false,
      habilitado: false
    }, {
      titlulo: 'Inscripción',
      subtitulo: null,
      descripcion: 'Elegir tipo de concurso',
      icono: 'icon-bot_ico_editar',
      seleccionado: false,
      completado: false,
      habilitado: false
    }
  ];



  //  Info de tablas - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  /* 
  _estadoCivil: EstadoCivil[];
  _provincias: Provincia[];
  _especialidades: RefepsEspecialidades[];
  _paises: Pais[];
  _institucionesFormadoras: InstitucionFormadora[];
  _residencias: ResidenciasResidenciasModel[];
 */

inscripcionModelo = new ResidenciasPreinscripcionInscripcionModel (
  null,     // public a_concursaId: number,
  null,    // public a_concursaTipo: boolean,
  null,     // public a_concursaProvincia: number,
  null,     // public a_concursaInstitucion: number,
  null,     // public a_concursaEspecialidad: number,

  null,     // public b_concursotipo: number,
  null     // public b_concursosubtipo: number
);

residentenModelo = new ResidenciasPreinscripcionResidenteModel (
  null,     // public id: number,
  null,     // public e_nombre: string,
  null,     // public e_apellido: string,
  null,     // public e_numerodocumento: number,
  null,     // public e_sexo: number,
  null,     // public e_estadocivil: number,
  null,     // public e_hijos: number

  null,     // nacionalidad: number,
  null,     // nacimientoFecha: number,
  null,     // nacimientoPais: number,
  null,     // nacimientoProvincia: number,
  null,     // email: string,
  null,     // domicilioProvincia: number,
  null,     // domicilioLocalidad: number,
  null,     // domicilioDomicilio: number,
  null,     // domicilioNro: number,
  null,     // domicilioPiso: number,
  null,     // domicilioDepto: number,
  null,     // domicilioCP: number,
  null,     // domicilioTelATipo: number,
  null,     // domicilioTelANro: number,
  null,     // domicilioTelBTipo: number,
  null,     // domicilioTelBNro: number,
  null,     // domicilioTelCTipo: number,
  null,     // domicilioTelCNro: number,
  null,     // domicilioTelDTipo: number,
  null,     // domicilioTelDNro: number,
  null,     // profesionTitulo: number,
  null,     // profesionTipoMatricula: number,
  null,     // profesionAnoIngreso: number,
  null,     // profesionPromedio: number,
  null      // profesionTituloEnTramite: boolean
);

encuestaModelo = new ResidenciasPreinscripcionEncuestaModel (
  null,                                  // public d_razoneseleccion: number[],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],    // public d_razoneseleccion: number[],
  null,                                // public d_dondeseencontrara: number,
  null                                // public d_ambitodesarrollo: number,
);

  validacionesCampos: any[] = [
    { //0  _a_concursaTipo
      completado: null,
      info: 'Seleccione el tipo de concurso donde desea inscribirse'
    },
    { //1  _a_concursaProvincia
      completado: null,
      info: 'Seleccione una provincia donde desea inscribirse'
    },
    { //2  _a_concursaInstitucion
      completado: null,
      info: 'Seleccione una institución donde desea inscribirse'
    },
    { //3  _a_concursaEspecialidad
      completado: null,
      info: 'Seleccione la especialidad a la que desea inscribirse'
    },
    { //4  _b_concursotipo
      completado: null,
      info: 'Seleccione un tipo de concurso en el cual desea inscribirse'
    },
    { //5  _b_concursosubtipo
      completado: null,
      info: 'Seleccione un subtipo de concurso en el cual desea inscribirse'
    },
    { //6  _c_concurso
      completado: null,
      info: 'Seleccione el concurso en el cual desea inscribirse'
    },
    { //7  _d_razoneseleccion
      completado: null,
      info: 'La suma de todos los campos debe ser 100, por favor revise los valores que ha puesto y reconsidere sus estudios primarios.'
    },
    { //8  _d_dondeseencontrara
      completado: null,
      info: 'Seleccione una de las opciones'
    },
    { //9  _d_ambitodesarrollo
      completado: null,
      info: 'Seleccione una de las opciones'
    },
    { //10  _e_nombre
      completado: null,
      info: 'Ingrese su nombre'
    },
    { //11  _e_apellido
      completado: null,
      info: 'Ingrese su apellido'
    }
  ];

  constructor( private fb: FormBuilder) { }

  ngOnInit() {
    this.inscripcionConcurso = this.fb.group({
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
/* 
 getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
   */
  //  Panel Pasos - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


  cPanelPasos_activaPaso(evento: number): void {
    console.log('cPanelPasos_activaPaso <-> ' + evento);
    if (this.pasoActual !== evento && this.cPanelPasos_validaPaso(evento)) {
      this.infoPasoAPaso.forEach(element => {element['seleccionado'] = false; });
      this.infoPasoAPaso[evento]['seleccionado'] = true;
      this.pasoActual = evento;
    }
  }

  cPanelPasos_validaPaso(pasoNumero: number): boolean {
    let respuesta = true;
    console.log('validaPaso - > ' + respuesta);
    console.log('validaPaso - > ' + pasoNumero + ' / ' + this.pasoActual);

    switch (this.pasoActual) {

      case 0:
        this.validacionesCampos[0]['completado'] = false;
        this.validacionesCampos[1]['completado'] = false;
        this.validacionesCampos[2]['completado'] = false;
        this.validacionesCampos[3]['completado'] = false;

        break;
/* 
      case 0:
        this.validacionesCampos[0]['completado'] = false;
        this.validacionesCampos[1]['completado'] = false;
        this.validacionesCampos[2]['completado'] = false;
        this.validacionesCampos[3]['completado'] = false;

        if (this.inscripcionModelo._a_concursaTipo === null) {
          respuesta = false;
          this.validacionesCampos[0]['completado'] = false;
          console.log(' A [ FALSE ]');
        } else {
          this.validacionesCampos[0]['completado'] = true;
          console.log(' A [ OK ]');
        }
        if (this.inscripcionModelo._a_concursaEspecialidad === null) {
          respuesta = false;
          this.validacionesCampos[3]['completado'] = false;
          console.log(' C [ FALSE ]');
        } else {
          this.validacionesCampos[3]['completado'] = true;
          console.log(' C [ OK ]');
        }

        if (this.inscripcionModelo._a_concursaTipo === true) {
          console.log(' B ');
          if (this.inscripcionModelo._a_concursaProvincia === null) {
            respuesta = false;
            this.validacionesCampos[1]['completado'] = false;
            console.log(' B [' + this.inscripcionModelo._a_concursaTipo + '] -> ' + this.inscripcionModelo._a_concursaProvincia);
          } else {
            this.validacionesCampos[1]['completado'] = true;
            console.log(' B [ OK ]');
          }
        } else if (this.inscripcionModelo._a_concursaTipo === false) {
          console.log(' B ');
          if (this.inscripcionModelo._a_concursaInstitucion === null) {
            respuesta = false;
            this.validacionesCampos[2]['completado'] = false;
            console.log(' B [' + this.inscripcionModelo._a_concursaTipo + '] -> ' + this.inscripcionModelo._a_concursaInstitucion);
          } else {
            this.validacionesCampos[2]['completado'] = true;
            console.log(' B [ OK ]');
          }
        }  else {
          console.log(' B x ' + this.inscripcionModelo._a_concursaTipo);
        }

        if (respuesta === true) {
          this._infoPasoAPaso[0]['completado'] = true;
          this._infoPasoAPaso[1]['habilitado'] = true;
          console.log(' VALIDA paso 1 OK');
        } else{ this._infoPasoAPaso[0]['completado'] = false;}
        break;


      case 1:
        this.validacionesCampos[4]['completado'] = false;
        this.validacionesCampos[5]['completado'] = false;
        if (this.inscripcionModelo._b_concursotipo === null) {
          respuesta = false;
          this.validacionesCampos[4]['completado'] = false;
          console.log(' A [ FALSE ]');
        } else {
          this.validacionesCampos[4]['completado'] = true;
          console.log(' A [ OK ]');
        }
        if (this.inscripcionModelo._b_concursosubtipo === null) {
          respuesta = false;
          this.validacionesCampos[5]['completado'] = false;
          console.log(' A [ FALSE ]');
        } else {
          this.validacionesCampos[5]['completado'] = true;
          console.log(' A [ OK ]');
        }
        if (respuesta === true) { 
          this._infoPasoAPaso[1]['completado'] = true;
          this._infoPasoAPaso[2]['habilitado'] = true;
          console.log(' VALIDA paso 2 OK');
        } else{ this._infoPasoAPaso[1]['completado'] = false;}
        break;

      case 2:
        this.validacionesCampos[6]['completado'] = false;
        if (this.inscripcionModelo._c_concurso === null) {
          respuesta = false;
          this.validacionesCampos[6]['completado'] = false;
          console.log(' A [ FALSE ]');
        } else {
          this.validacionesCampos[6]['completado'] = true;
          console.log(' A [ OK ]');
        }
        if (respuesta === true) {
          this._infoPasoAPaso[2]['completado'] = true;
          this._infoPasoAPaso[3]['habilitado'] = true;
          console.log(' VALIDA paso 3 OK'); 
        } else{ this._infoPasoAPaso[2]['completado'] = false;}
        break;

      case 3:
        this.validacionesCampos[7]['completado'] = false;
        this.validacionesCampos[8]['completado'] = false;
        this.validacionesCampos[9]['completado'] = false;
        
        console.log(' A -> ' + this.inscripcionModelo._d_razoneseleccion[0]);
        let resultadorazones = 0;
        this.inscripcionModelo._d_razoneseleccion.forEach(v => resultadorazones += Number(v));
        if (resultadorazones !== 100) {
          respuesta = false;
          this.validacionesCampos[7]['completado'] = false;
          console.log(' A [ ERROR ] -> ' + resultadorazones);
        } else {
          this.validacionesCampos[7]['completado'] = true;
          console.log(' A [ OK ] -> ' + resultadorazones);
        }
        
        if (this.inscripcionModelo._d_dondeseencontrara === null) {
          respuesta = false;
          this.validacionesCampos[8]['completado'] = false;
          console.log(' B [ FALSE ]');
        } else {
          this.validacionesCampos[8]['completado'] = true;
          console.log(' B [ OK ]');
        }
        if (this.inscripcionModelo._d_ambitodesarrollo === null) {
          respuesta = false;
          this.validacionesCampos[9]['completado'] = false;
          console.log(' C [ FALSE ]');
        } else {
          this.validacionesCampos[9]['completado'] = true;
          console.log(' C [ OK ]');
        }
        if (respuesta === true) {
          this._infoPasoAPaso[3]['completado'] = true;
          this._infoPasoAPaso[4]['habilitado'] = true;
          console.log(' VALIDA paso 3 OK');
        } else { this._infoPasoAPaso[3]['completado'] = false;}
        break;



      case 4:
        this.validacionesCampos[10]['completado'] = false;
        this.validacionesCampos[11]['completado'] = false;
        
        if (this.inscripcionModelo._e_nombre === null) {
          respuesta = false;
          this.validacionesCampos[10]['completado'] = false;
          console.log(' A [ FALSE ]');
        } else {
          this.validacionesCampos[10]['completado'] = true;
          console.log(' A [ OK ]');
        }
        if (this.inscripcionModelo._e_apellido === null) {
          respuesta = false;
          this.validacionesCampos[11]['completado'] = false;
          console.log(' B [ FALSE ]');
        } else {
          this.validacionesCampos[11]['completado'] = true;
          console.log(' B [ OK ]');
        }
        console.log('validaPaso 5 (' + pasoNumero + ') ');
        break;
     */
      default:
        console.log('validaPaso ERROR - > ' + pasoNumero + ' // ' + respuesta);
        break;
    }

    if (this.infoPasoAPaso[pasoNumero]['habilitado'] !== true) { 
      respuesta = false; 
    }
    console.log('la respuesta fue ' + respuesta);
    return respuesta;
  }

  formularioEnviar() {
    alert('-> ' + this.inscripcionConcurso.value);
  }

}

import { Component, OnInit } from '@angular/core';

//  Modelos
import { ResidenciasInscripcionModel } from 'src/app/models/residencias_inscripcion';
import { ResidenciasPreinscripcionEncuestaModel } from 'src/app/models/residencias_inscripcion_encuesta';

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

  botones = {
    bRenaper: ['boton_general', 'bot_ico_renaper', 'Usar Reanper'],
    bSisa: ['boton_general', 'ico_sisa_icono', 'Usar usuario SISA'],
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
      seleccionado: false,
      completado: false,
      habilitado: false
    }, {
      titlulo: 'Concurso de inscripcion',
      subtitulo: null,
      descripcion: 'Elegir tipo de concurso',
      seleccionado: false,
      completado: false,
      habilitado: false
    }, {
      titlulo: 'Encuesta',
      subtitulo: null,
      descripcion: 'Completar encuesta (opcional)',
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

inscripcionModelo = new ResidenciasInscripcionModel (
    null,     // public a_concursaId: number,
    null,    // public a_concursaTipo: boolean,
    null,     // public a_concursaProvincia: number,
    null,     // public a_concursaInstitucion: number,
    null,     // public a_concursaEspecialidad: number,

    null,     // public b_concursotipo: number,
    null,     // public b_concursosubtipo: number

    null,     // public c_concurso: number,

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],     // public d_razoneseleccion: number[],
    null,     // public d_dondeseencontrara: number,
    null,     // public d_ambitodesarrollo: number,

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

  constructor() { }

  ngOnInit() {
  }

}

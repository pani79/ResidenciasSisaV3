import { Component, OnInit } from '@angular/core';

//  Modelo
import { ResidenciasPreinscripcionResidenteModel } from '../../../models/residencias_preinscripcion_residente';

//  Servicios
import { ResidenciasService } from 'src/app/services/residencias.service';


@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {

  //  Variables generales . . . . . . . . . . . . . . . . . .
  infoPaginaBase: string[] = [
    '',
    'Consultar el estado de su Pre-inscripción / Readjudicación',
    'reg_residencias',
    'reg_residencias',
    // tslint:disable-next-line: max-line-length
    'Ingrese el código alfanumérico ( Ej. wIR3DVKilD ) que le fue asignado al momento de la preinscripción. El mismo le fue enviado en el Mail de Notificación y también figura en la sección Datos Generales de la Constancia de Inscripción. En caso de haberlo extraviado solicitarlo por mail indicando Nombre, Apellido y DNI a ​<a href="mailto:consultas.examenunico@gmail.com">consultas.examenunico@gmail.com</a>',
    'x', // tirandole verdura va al home
    'https://sisa.msal.gov.ar/sisadoc/index.jsp?id=resid_home'
  ];
  botones = {
    buscar: ['boton boton_general', 'bot_ico_buscar', 'Buscar inscripción']
  };

  //  Variables particulares . . . . . . . . . . . . . . . . . . . . .
  residentes: ResidenciasPreinscripcionResidenteModel[];

  constructor(private residenciasService: ResidenciasService) { }

  ngOnInit() {
    this.residenciasService.residentesObtieneTodos()
      .subscribe(data => this.residentes = data);
  }

}

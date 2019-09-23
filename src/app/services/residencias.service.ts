import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//  Modelos
import { ResidenciasPreinscripcionResidenteModel } from '../models/residencias_preinscripcion_residente';
import { TemporalResidente } from '../models/temp_residente';


@Injectable({
  providedIn: 'root'
})
export class ResidenciasService {

  constructor(private http: HttpClient) { }

  /* 
    residentesObtieneTodos(): Observable<ResidenciasPreinscripcionResidenteModel[]> {
      return this.http.get<ResidenciasPreinscripcionResidenteModel[]>('http://localhost:8080/residentes/all');
    } 
  */
  residentesObtieneTodos(): Observable < TemporalResidente[] > {
    return this.http.get < TemporalResidente[] > ('http://localhost:8080/residentes/all');
  }
  residenteObtiene(): Observable < TemporalResidente[] > {
    return this.http.get < TemporalResidente[] > ('http://localhost:8080/residentes/residente');
  }

  residenteCrea(datosDeResidente){
    return this.http.post < any[] > ('http://localhost:8080/residentes/crea', datosDeResidente);
  }

}

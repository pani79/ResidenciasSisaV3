import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//  Modelos
import { ResidenciasResidenteModel } from '../models/residencias_residente';

@Injectable({
  providedIn: 'root'
})
export class ResidenciasService {

  constructor(private http: HttpClient) { }

  residentesObtieneTodos(): Observable<ResidenciasResidenteModel[]> {
    return this.http.get<ResidenciasResidenteModel[]>('http://localhost:8080/residentes/all');
  }

}

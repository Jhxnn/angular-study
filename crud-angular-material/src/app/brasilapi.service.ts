import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estado, Municipio } from './brasil.model';
@Injectable({
  providedIn: 'root'
})
export class BrasilapiService {

  baseUrl: String = 'https://brasilapi.com.br/api'
  constructor(private http: HttpClient) {

   }

   listarUfs() : Observable<Estado[]>{
    return this.http.get<Estado[]>(this.baseUrl + '/ibge/uf/v1')
   }

   listarMunicipios(uf: String) : Observable<Municipio[]>{
    const path ='/ibge/municipios/v1/' + uf
    return this.http.get<Municipio[]>(this.baseUrl + path)
   }
}

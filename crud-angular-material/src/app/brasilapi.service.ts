import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estado } from './brasil.model';
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
}

import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Funcionario } from '../models/funcionarios';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  private apiUrl = `${environment.ApiUrl}/Funcionario`;
  private http = inject(HttpClient)
  constructor() { }

  getFuncionarios(): Observable<Response<Funcionario[]>> {
    return this.http.get<Response<Funcionario[]>>(this.apiUrl)
  }

  createFuncionario(funcionario: Funcionario): Observable<Response<Funcionario[]>> {
    return this.http.post<Response<Funcionario[]>>(`${this.apiUrl}`, funcionario)
  }

  getFuncionarioById(id: number): Observable<Response<Funcionario>> {
    return this.http.get<Response<Funcionario>>(`${this.apiUrl}/${id}`)
  }

  editarFuncionario(funcionario: Funcionario): Observable<Response<Funcionario[]>> {
    return this.http.put<Response<Funcionario[]>>(`${this.apiUrl}`, funcionario)
  }

  inativaFuncionario(id: number): Observable<Response<Funcionario[]>> {
    return this.http.put<Response<Funcionario[]>>(`${this.apiUrl}/inativaFuncionario?id=${id}`, id)
  }
}

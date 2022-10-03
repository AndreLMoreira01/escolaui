import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aluno } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private readonly API = '/assets/alunos.json'

  constructor(private http: HttpClient) { }

    //lista
    list() {
      return this.http.get<Aluno[]>(this.API);
}
}

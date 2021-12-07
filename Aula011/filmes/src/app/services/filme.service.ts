import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Filme } from './../model/Filme';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  private url:string;

  constructor(private httpClient: HttpClient) {
   this.url = 'http://localhost:8090/api/filme';
  }

  salvar(filme:Filme):Observable<string>{
    if(filme.id){
      return this.httpClient.put(`${this.url}/${filme.id}`, filme, {responseType: 'text'})
    }
    return this.httpClient.post(this.url, filme, {responseType: 'text'})
  }
  listar():Observable<Filme[]> {
    return this.httpClient.get<Filme[]>(this.url);
  }

  listarPorId(id:number):Observable<Filme> {
    return this.httpClient.get<Filme>(`${this.url}/${id}`);
  }

  deletar(id:number):Observable<string>{
    return this.httpClient.delete(`${this.url}/${id}`, {responseType: 'text'})
  }
}

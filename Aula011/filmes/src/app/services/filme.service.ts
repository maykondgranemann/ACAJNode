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
    return this.httpClient.post(this.url, filme, {responseType: 'text'})
  }
  listar():Observable<Filme[]> {
    return this.httpClient.get<Filme[]>(this.url);
  }
}

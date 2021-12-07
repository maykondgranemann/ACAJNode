import { Filme } from './../model/Filme';
import { FilmeService } from './../services/filme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filme-list',
  templateUrl: './filme-list.component.html',
  styleUrls: ['./filme-list.component.css']
})
export class FilmeListComponent implements OnInit {
  lista:Filme[] = [];

  constructor(private filmeService:FilmeService) {
    this.listar();
  }

  ngOnInit(): void {
  }

  private listar(){
    this.filmeService.listar().subscribe(  (filmes)=> this.lista=filmes);
  }
}

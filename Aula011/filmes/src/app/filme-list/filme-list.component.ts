import { FilmeService } from './../services/filme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filme-list',
  templateUrl: './filme-list.component.html',
  styleUrls: ['./filme-list.component.css']
})
export class FilmeListComponent implements OnInit {
  lista:any[] = [];

  constructor(private filmeService:FilmeService) {
    this.listar();
  }

  ngOnInit(): void {
  }

  private listar(){
    this.lista = this.filmeService.listar();
  }
}

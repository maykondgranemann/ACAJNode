import { Component, OnInit } from '@angular/core';
import { FilmeService } from '../services/filme.service';

@Component({
  selector: 'app-filme-form',
  templateUrl: './filme-form.component.html',
  styleUrls: ['./filme-form.component.css']
})
export class FilmeFormComponent implements OnInit {
  id:number=0;
  nome:string;
  nomeDiretor:string;
  genero:string;

  constructor(private filmeService:FilmeService) {
    this.nome="";
    this.nomeDiretor="";
    this.genero="";
  }

  ngOnInit(): void {}

  salvar(){
    let filme = {
      "id": this.id,
      "nome": this.nome,
      "nomeDiretor": this.nomeDiretor,
      "genero": this.genero
    }
    this.filmeService.salvar(filme);
    this.limpar();
  }

  private limpar(){
    this.nome = "";
    this.nomeDiretor = "";
    this.genero = "";
  }

}

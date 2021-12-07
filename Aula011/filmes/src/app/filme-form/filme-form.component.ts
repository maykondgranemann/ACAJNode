import { ActivatedRoute } from '@angular/router';
import { Filme } from './../model/Filme';
import { Component, OnInit } from '@angular/core';
import { FilmeService } from '../services/filme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-filme-form',
  templateUrl: './filme-form.component.html',
  styleUrls: ['./filme-form.component.css']
})
export class FilmeFormComponent implements OnInit {
  filme = {} as Filme;
  msg:string = '';

  constructor(private filmeService:FilmeService, private route:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((parametros)=>{
      if(parametros['id']){
        this.filme.id = parametros['id'];
        this.carregaModel();
      }});
  }

  salvar(){
    this.filmeService.salvar(this.filme).subscribe((msg)=>{
      this.msg = msg;
      this.limpar();
    });}

  private limpar(){
    this.filme = {} as Filme;
  }

  private carregaModel(){
    this.filmeService.listarPorId(this.filme.id).subscribe((f:Filme)=>this.filme = f);
  }

}

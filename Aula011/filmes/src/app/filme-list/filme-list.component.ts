import { Filme } from './../model/Filme';
import { FilmeService } from './../services/filme.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filme-list',
  templateUrl: './filme-list.component.html',
  styleUrls: ['./filme-list.component.css']
})
export class FilmeListComponent implements OnInit {
  lista:Filme[] = [];

  constructor(private filmeService:FilmeService, private router:Router) {
    this.listar();
  }

  ngOnInit(): void {
  }

  private listar(){
    this.filmeService.listar().subscribe(  (filmes)=> this.lista=filmes);
  }

  editar(id:number){
    this.router.navigate(['/filmes/editar', id]);
  }

  deletar(id:number){
    this.filmeService.deletar(id).subscribe((msg)=>{
      alert(msg);
      this.listar();
    });
  }
}

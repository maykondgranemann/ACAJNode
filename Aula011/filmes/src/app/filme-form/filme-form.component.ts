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

  constructor(private filmeService:FilmeService) {
  }

  ngOnInit(): void {}

  salvar(){
    this.filmeService.salvar(this.filme).subscribe((msg)=>{
      console.log(msg);
      this.limpar();
    });

  }

  private limpar(){
    this.filme = {} as Filme;
  }

}

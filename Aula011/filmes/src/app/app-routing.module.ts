import { FilmeFormComponent } from './filme-form/filme-form.component';
import { FilmeListComponent } from './filme-list/filme-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'filmes', component: FilmeListComponent },
  { path: 'filmes/cadastrar', component: FilmeFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

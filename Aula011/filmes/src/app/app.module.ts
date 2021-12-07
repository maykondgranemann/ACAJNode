import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app-component/app.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FilmeFormComponent } from './filme-form/filme-form.component';
import { FilmeListComponent } from './filme-list/filme-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmeFormComponent,
    FilmeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

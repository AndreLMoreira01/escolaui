import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { CursosRoutingModule } from './cursos-routing.module';
import { ListacursosComponent } from './listacursos/listacursos.component';


@NgModule({
  declarations: [
    ListacursosComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }

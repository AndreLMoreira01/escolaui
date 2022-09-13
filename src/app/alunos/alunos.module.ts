import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosRoutingModule } from './alunos-routing.module';
import { ListaalunosComponent } from './listaalunos/listaalunos.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    ListaalunosComponent
  ],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    MatCardModule
  ]
})
export class AlunosModule { }

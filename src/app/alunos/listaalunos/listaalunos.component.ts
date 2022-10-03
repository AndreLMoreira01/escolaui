import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from 'src/app/core/model';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-listaalunos',
  templateUrl: './listaalunos.component.html',
  styleUrls: ['./listaalunos.component.scss']
})
export class ListaalunosComponent implements OnInit {

  alunos:  Observable<Aluno[]>;
  displayedColumns = ['id','nomealuno'];

  constructor(private alunosService: AlunosService) {
    this.alunos = this.alunosService.list();
   }

  ngOnInit(): void {

  }

}




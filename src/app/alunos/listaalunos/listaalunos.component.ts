import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/core/model';

@Component({
  selector: 'app-listaalunos',
  templateUrl: './listaalunos.component.html',
  styleUrls: ['./listaalunos.component.scss']
})
export class ListaalunosComponent implements OnInit {

  alunod: Aluno[] = [

    {"id":1, "nomealuno": 'Desenvolvimento de Sistemas'}

  ];
  displayedColumns = ['id','nomealuno'];

  constructor() { }

  ngOnInit(): void {
  }

}

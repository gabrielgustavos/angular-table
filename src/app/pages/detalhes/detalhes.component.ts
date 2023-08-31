import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Funcionario } from 'src/app/models/funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {
  funcionario?: Funcionario;
  id!: number;
  private funcionarioService = inject(FuncionarioService)
  private route = inject(ActivatedRoute)
  private router = inject(Router)

  constructor() { }

  ngOnInit() {
    this.getFuncionarioDetalhes()
  }

  getFuncionarioDetalhes() {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    this.funcionarioService.getFuncionarioById(this.id).subscribe((data) => {
      const dados = data.dados;
      dados.dataDeCriacao = new Date(dados.dataDeCriacao!).toLocaleDateString('pt-BR')
      dados.dataDeAlteracao = new Date(dados.dataDeAlteracao!).toLocaleDateString('pt-BR')
      this.funcionario = data.dados
    })
  }

  inativaFuncionario() {
    this.funcionarioService.inativaFuncionario(this.id).subscribe((data) => {
      this.router.navigate([''])
    })
  }
}

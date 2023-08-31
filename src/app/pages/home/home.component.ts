import { Component, OnInit, inject } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  funcionarios: Funcionario[] = []
  funcionariosGeral: Funcionario[] = []
  private funcionarioService = inject(FuncionarioService)
  colunas = ['Situacao', 'Nome', 'Sobrenome', 'Departamento', 'Ações', 'Excluir']


  constructor() { }

  ngOnInit(): void {
    this.getFuncionarios()
  }

  getFuncionarios() {
    this.funcionarioService.getFuncionarios().subscribe((response) => {
      const dados = response.dados;
      dados.map((item) => {
        item.dataDeCriacao = new Date(item.dataDeCriacao!).toLocaleDateString('pt-BR')
        item.dataDeAlteracao = new Date(item.dataDeAlteracao!).toLocaleDateString('pt-BR')
      })
      this.funcionarios = dados
      this.funcionariosGeral = dados
    })
  }

  search(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();
    this.funcionarios = this.funcionariosGeral.filter(funcionario => {
      return funcionario.nome.toLowerCase().includes(value)
    })
  }

}

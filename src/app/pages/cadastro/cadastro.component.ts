import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  btnAcao = "Cadastrar";
  btnTitulo = "Cadastrar Funcionário"
  private funcionarioService = inject(FuncionarioService)
  private router = inject(Router)

  constructor() { }

  ngOnInit() {
  }

  createFuncionario(funcionario: Funcionario) {
    this.funcionarioService.createFuncionario(funcionario).subscribe((data) => {
      this.router.navigate(['/'])
    })
  }

}

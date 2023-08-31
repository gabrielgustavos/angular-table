import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  btnAcao: string = 'Editar';
  btnTitulo: string = 'Editar Funcionário';
  funcionario?: Funcionario;
  private funcionarioService = inject(FuncionarioService)
  private route = inject(ActivatedRoute)
  private router = inject(Router)

  constructor() { }

  ngOnInit(): void {
    this.getIdRoute()
  }

  getIdRoute() {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.funcionarioService.getFuncionarioById(id).subscribe((data) => {
      this.funcionario = data.dados
    })
  }

  editarFuncionario(funcionario: Funcionario) {
    this.funcionarioService.editarFuncionario(funcionario).subscribe((data) => {
      this.router.navigate(['/'])
    })
  }

}

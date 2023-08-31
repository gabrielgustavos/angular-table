import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Funcionario } from 'src/app/models/funcionarios';
@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.scss']
})
export class FuncionarioFormComponent implements OnInit {
  funcionarioForm!: FormGroup;
  @Output() onSubmit = new EventEmitter<Funcionario>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() dadosFuncionario: Funcionario | null = null;
  constructor() { }

  ngOnInit() {
    this.funcionarioForm = new FormGroup({
      id: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.id : 0),
      nome: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.nome : '', [Validators.required]),
      sobrenome: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.sobrenome : '', [Validators.required]),
      departamento: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.departamento : '', [Validators.required]),
      turno: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.turno : '', [Validators.required]),
      ativo: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.ativo : true),
      dataDeCriacao: new FormControl(new Date()),
      dataDeAlteracao: new FormControl(new Date()),
    })
  }

  submit() {
    this.onSubmit.emit(this.funcionarioForm.value);
  }
}

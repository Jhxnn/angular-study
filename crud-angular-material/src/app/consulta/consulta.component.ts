import { Component, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from "@angular/material/card"
import {MatFormField, MatLabel} from "@angular/material/form-field"
import {MatInputModule} from "@angular/material/input"
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import { ClienteService } from '../cliente.service';
import {MatTableModule} from "@angular/material/table"
import { Cliente } from '../cadastro/cliente';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-consulta',
  standalone: true,
  imports: [FlexLayoutModule, MatTableModule, MatIconModule, FormsModule, MatCardModule,  MatInputModule, MatButtonModule, CommonModule],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.scss'
})
export class ConsultaComponent implements OnInit{


  nomeBusca: string = '';
  listaCliente: Cliente[] = [];
  colunas: String[] = ["id","nome","cpf","dataNascimento","email","acoes"] 

  constructor(private service: ClienteService, private router: Router){

  }
  ngOnInit(){
    this.listaCliente = this.service.pesquisarCliente('');
  }

  pesquisar(){
    this.listaCliente= this.service.pesquisarCliente(this.nomeBusca)
  }

  preparaEditar(id: String){
    this.router.navigate(['/cadastro'],{queryParams:{"id": id}})
  }

  preparaDeletar(cliente: Cliente){
    cliente.deletando = true
  }
  deletar(cliente: Cliente){
    this.service.deletar(cliente)
    this.ngOnInit()
  }


}

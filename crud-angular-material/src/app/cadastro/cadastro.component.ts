import { Component, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from "@angular/material/card"  
import {MatFormField, MatLabel} from "@angular/material/form-field"
import {MatInputModule} from "@angular/material/input"
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import { Cliente } from './cliente';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute } from '@angular/router';
import { query } from 'express';



@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FlexLayoutModule, MatCardModule,FormsModule, MatFormField, MatLabel, MatInputModule,MatIconModule,MatButtonModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent implements OnInit{

  cliente:Cliente = Cliente.newCliente();
  atualizando: boolean = false;

  constructor(private service : ClienteService, private route: ActivatedRoute){

  }
  ngOnInit(): void {
      this.route.queryParamMap.subscribe((query:any) =>{
        const params = query['params']
        const id = params['id']
        if(id){
           let clienteEncontrado = this.service.buscarCliente(id)
           if(clienteEncontrado){
            this.cliente = clienteEncontrado
            this.atualizando = true
            console.log(clienteEncontrado)
           }
        }
      })
  }

  salvar(){
    this.service.salvar(this.cliente)
    this.cliente = Cliente.newCliente()
  }
}

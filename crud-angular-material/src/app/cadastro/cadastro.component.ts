import { Component, OnInit, Inject, inject} from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from "@angular/material/card"  
import {MatFormField, MatLabel} from "@angular/material/form-field"
import {MatInputModule} from "@angular/material/input"
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {MatSnackBar} from '@angular/material/snack-bar'
import { Cliente } from './cliente';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { BrasilapiService } from '../brasilapi.service';
import { Estado, Municipio } from '../brasil.model';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    FlexLayoutModule, 
    MatCardModule,
    FormsModule, 
    MatFormField, 
    MatLabel, 
    MatInputModule,
    MatIconModule,
    MatButtonModule,
     NgxMaskDirective,
    MatSelectModule,
  CommonModule],
    providers:[
      provideNgxMask()
    ],

  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent implements OnInit{

  cliente:Cliente = Cliente.newCliente();
  atualizando: boolean = false;
  snackBar = inject(MatSnackBar)
  estados: Estado[] = []
  municipios: Municipio[] = []


  constructor(private service : ClienteService, private route: ActivatedRoute, private router: Router, private brasilApi: BrasilapiService){

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
    this.carregarUfs()
  }

  salvar(){
    if(!this.atualizando){
      this.service.salvar(this.cliente)
      this.mostrarMensagem("Salvo com sucesso")
    this.cliente = Cliente.newCliente()
    }else{
      this.service.atualizar(this.cliente)
      this.mostrarMensagem("Atualizado com sucesso")
      this.router.navigate(["/consulta"])
    }
   
  }
   mostrarMensagem(mensagem: string){
      this.snackBar.open(mensagem, 'OK')
    }

    carregarUfs(){
      this.brasilApi.listarUfs().subscribe({
        next: listaEstado => this.estados =  listaEstado,
        error: error => console.log(error)
      })
    }
}

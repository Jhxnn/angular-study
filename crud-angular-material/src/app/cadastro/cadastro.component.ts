import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from "@angular/material/card"
import {MatFormField, MatLabel} from "@angular/material/form-field"
import {MatInputModule} from "@angular/material/input"
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import { Cliente } from './cliente';
import { ClienteService } from '../cliente.service';
import { tick } from '@angular/core/testing';



@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FlexLayoutModule, MatCardModule,FormsModule, MatFormField, MatLabel, MatInputModule,MatIconModule,MatButtonModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {

  cliente:Cliente = Cliente.newCliente();

  constructor(private service : ClienteService){

  }

  salvar(){
    this.service.salvar(this.cliente)
  }
}

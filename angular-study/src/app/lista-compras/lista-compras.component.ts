import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { itemLista } from './itemLista';

@Component({
  selector: 'app-lista-compras',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.scss'
})
export class ListaComprasComponent {
  nome: String = "";
  listaItems: itemLista[] = [];
  adicionarItem(){
    let lista = new itemLista();
    lista.nome = this.nome;
    lista.id = this.listaItems.length + 1;
    this.listaItems.push(lista)
    console.table(this.listaItems)

    this.nome = ""

    
  }
  riscarItem(itemLista: itemLista){
    itemLista.comprado = !itemLista.comprado;
  }

  limparLista(){
    this.listaItems = []
  }
  
}

import { Injectable } from '@angular/core';
import { Cliente } from './cadastro/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  static REPO_CLIENTES = "_CLIENTES";

  constructor() { }

  salvar(cliente: Cliente){
    const storage = this.obterStorage();
    storage.push(cliente);
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage))
  }

  private obterStorage() : Cliente[]{
    const repositorioClientes = localStorage.getItem(ClienteService.REPO_CLIENTES);
    if(repositorioClientes){
      const clientes = JSON.parse(repositorioClientes);
      return clientes;
    }

  

    const clientes: Cliente[] = [];
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(clientes))
    return clientes;
  }
  pesquisarCliente(nome: String) : Cliente[]{
    return this.obterStorage();
  }
}

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
  buscarCliente(id: string): Cliente | undefined{
    const clientes = this.obterStorage()
    return clientes.find(cliente => cliente.id === id)
  }
  
  pesquisarCliente(nome: string) : Cliente[]{
    const clientes = this.obterStorage();
    if(!nome){
      return clientes
    }
    return clientes.filter(cliente => cliente.nome?.indexOf(nome) !== -1)
  }
  atualizar(cliente: Cliente){
    const clientes = this.obterStorage()
    clientes.forEach(c => {
      if(c.id === cliente.id){
        Object.assign(c, cliente)
        localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(clientes))
      }
    });
  }

  deletar(cliente: Cliente){
    let clientes = this.obterStorage()
    clientes = clientes.filter(c => c.id !== cliente.id)
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(clientes))

  }
}

import { Component, OnInit } from '@angular/core';
import { Lugar } from '../../lugares/lugar';
import { Categoria } from '../../categorias/categoria';
import { LugarService } from '../../lugares/lugar.service';
import { CategoriaService } from '../../categorias/categoria.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss'
})
export class GaleriaComponent implements OnInit{

  lugares: Lugar[] = []
  categorias: Categoria[] = []
  nomeFiltro: string = ''
  categoriaFiltro: string = ''

  constructor(private lugarService: LugarService, private categoriaService: CategoriaService){}

  ngOnInit(): void {
      this.lugarService.obterTodos().subscribe(lugar => this.lugares = lugar)
      this.categoriaService.listarCategorias().subscribe(categoria => this.categorias = categoria)
  }
  getEstrelas(nota?: number): string[] {
  const estrelas = [];
  const notaValida = Math.floor(nota ?? 0);
  const maxEstrelas = 5;

  for (let i = 0; i < notaValida; i++) {
    estrelas.push('cheia');
  }
  for (let i = notaValida; i < maxEstrelas; i++) {
    estrelas.push('vazia');
  }

  return estrelas;
}

filtrar(){
  this.lugarService.filtrarLugares(this.nomeFiltro, this.categoriaFiltro).subscribe( lugarFiltro => this.lugares = lugarFiltro)
}


}

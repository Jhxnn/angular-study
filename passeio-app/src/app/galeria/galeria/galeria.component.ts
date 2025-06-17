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

  constructor(private lugarService: LugarService, private categoriaService: CategoriaService){}

  ngOnInit(): void {
      this.lugarService.obterTodos().subscribe(lugar => this.lugares = lugar)
      this.categoriaService.listarCategorias().subscribe(categoria => this.categorias = categoria)
  }
}

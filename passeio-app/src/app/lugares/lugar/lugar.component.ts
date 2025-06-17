import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Categoria } from '../../categorias/categoria';
import { CategoriaService } from '../../categorias/categoria.service';
import { LugarService } from '../lugar.service';
import { Lugar } from '../lugar';

@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.component.html',
  styleUrl: './lugar.component.scss'
})
export class LugarComponent implements OnInit{


  camposForm: FormGroup;
  categorias: Categoria[] = []

  constructor(private categoriaService: CategoriaService, private service: LugarService){
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      localizacao: new FormControl('', Validators.required),
      urlFoto: new FormControl('', Validators.required),
      avaliacao: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
      this.categoriaService.listarCategorias().subscribe({
        next: (listaCategorias) =>{ this.categorias = listaCategorias
          console.log(listaCategorias)
        }
      })
  }

  salvar(){
    this.camposForm.markAllAsTouched()
    if(this.camposForm.valid){
      this.service.salvar(this.camposForm.value).subscribe({
      next: (lugar) => {console.log("Salvo com sucesso ", lugar)
        this.camposForm.reset()
      },
      error: erro => console.log(erro)
    })
    }
  }
  isCampoInvalido(nomeCampo : string) :boolean{
    const campo = this.camposForm.get(nomeCampo)
    return campo?.invalid  && campo?.touched && campo?.errors?.['required']
  }
}

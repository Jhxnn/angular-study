import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {

  numero1: number = 0;
  numero2: number = 0;
  resultado: number= 0;

  multiplicacao(){
    this.resultado = this.numero1 * this.numero2;
    console.log(this.numero1)
    console.log(this.numero2)
  }
  soma(){
    this.resultado = this.numero1 + this.numero2;
    console.log(this.numero1)
    console.log(this.numero2)
  }
  subtracao(){
    this.resultado = this.numero1 - this.numero2;
    console.log(this.numero1)
    console.log(this.numero2)
  }
  divisao(){
    this.resultado = this.numero1 / this.numero2;
    console.log(this.numero1)
    console.log(this.numero2)
  }
}

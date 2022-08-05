import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss'],
})
export class DiretivasAtributosComponent implements OnInit {
  public valor: boolean = true;
  public larguraPX: string = '40px';
  public backGroundColor: string = 'pink';
  public nome: string = '';
  public list: Array<{ nome: string }> = [];

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      if (this.valor) {
        this.valor = false;
      } else {
        this.valor = true;
      }

      if (this.larguraPX == '40px') {
        this.larguraPX = '150px';
        this.backGroundColor = 'orange';
      } else {
        this.larguraPX = '40px';
        this.backGroundColor = 'pink';
      }
    }, 1000);
  }

  public salvar() {
    this.list.push({ nome: this.nome });
    this.nome = '';
  }
}

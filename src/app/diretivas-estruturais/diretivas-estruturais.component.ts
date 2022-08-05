import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss'],
})
export class DiretivasEstruturaisComponent implements OnInit {
  constructor() {}

  public condition: boolean = true;
  public condition2: boolean = true;

  ngOnInit(): void {
    setInterval(() => {
      if (this.condition) {
        this.condition = false;
      } else {
        this.condition = true;
      }
    }, 1000);
  }

  public flagCondition() {
    if (this.condition2) {
      this.condition2 = false;
    } else {
      this.condition2 = true;
    }
  }

  public list: Array<{ nome: string }> = [
    { nome: 'Jess' },
    { nome: 'Bê' },
    { nome: 'Ema' },
  ];

  public removeNode(valor: number) {
    this.list.splice(valor, 1);
  }

  public name: string = '';
  public addPerson() {
    this.list.push({ nome: this.name });
  }

  public nome: string = 'Pesquise aqui';
}

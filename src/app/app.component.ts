import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <app-title></app-title> -->
    <!-- <app-data-biding></app-data-biding> -->
    <!-- <app-diretivas-estruturais></app-diretivas-estruturais> -->
    <!-- <app-diretivas-atributos>
      <h1>Diretivas Atributos</h1>
      <h2>ngContent</h2>
      <p>Esse conteúdo foi inserido via ng-content!</p>
      <hr />
    </app-diretivas-atributos> -->
    <!-- <app-header></app-header> -->
    <app-input [contador]="value"></app-input>
    <button class="btn" (click)="addValue()">+</button>
    <button class="btn" (click)="subValue()">-</button>
    <button class="btn" (click)="clearValue()">AC</button>

    <app-output (sendData)="setData($event)"></app-output>
    <ng-template [ngIf]="getData">
      <h3>{{ getData.nome }} - {{ getData.idade }} anos</h3>
    </ng-template>

    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  public value: number = 0;
  public getData: { nome: string; idade: number } | undefined;

  constructor() {}
  ngOnInit(): void {}

  public addValue() {
    this.value++;
  }
  public subValue() {
    this.value--;
  }
  public clearValue() {
    this.value = 0;
  }

  public setData(event: { nome: string; idade: number }) {
    this.getData = event;
  }
}

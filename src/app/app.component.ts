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

    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}

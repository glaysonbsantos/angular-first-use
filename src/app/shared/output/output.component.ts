import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent implements OnInit {
  @Output() public sendData = new EventEmitter();

  public list: Array<{ nome: string; idade: number }> = [
    { nome: 'Jess', idade: 26 },
    { nome: 'Bê', idade: 29 },
    { nome: 'Ema', idade: 5 },
  ];

  constructor() {}

  ngOnInit(): void {}

  public getData(event: number) {
    this.sendData.emit(this.list[event]);
  }
}

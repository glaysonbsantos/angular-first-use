import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss'],
})
export class DataBidingComponent implements OnInit {
  public class1: string = 'Interpolation';
  public num: number = 1;
  public name: string = 'Digite aqui';

  public class2: string = 'Property Binding';
  public checkedDisabled: boolean = true;

  public class3: string = 'Event Binding';
  public position: { x: number; y: number } = { x: 0, y: 0 };
  public getPosition(valor: MouseEvent) {
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
  public throwEvent(valor: MouseEvent) {
    alert('Event Binding!');
  }

  public class4: string = 'Two-Way Binding';

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';


@Component({
  selector:'app-counter',
  template: `
  <p>
  Counter: {{counter}}
</p>

<button (click)="increaseBy(+1)">+1</button>
<button (click)="decreaseBy(-1)">-1</button>
<button (click)="resetBy(0)">Reset</button>

  `
})

export class CounterComponen {
  public counter: number = 10;

  increaseBy( value: number): void{
this.counter += 1
  }

  decreaseBy( value: number):void{
    this.counter -= 1
  }

  resetBy(value: number): void{
    this.counter = 10
  }



}

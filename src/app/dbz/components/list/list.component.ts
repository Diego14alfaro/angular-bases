import { Component, Input, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})



export class ListComponent {
  @Output()
  public onDeleteId: EventEmitter<number> = new EventEmitter();


    @Input()
    public characterList: Character[] = [{
      name: 'Trunk',
      power: 10,
    }]

//onDeleteId = Index value : number

onDeleteCharacter(index: number): void {
  this.onDeleteId.emit(index);
}
}

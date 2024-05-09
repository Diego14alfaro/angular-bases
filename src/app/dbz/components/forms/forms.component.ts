import { Component, EventEmitter, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { Output } from '@angular/core';

@Component({
  selector: 'app-dbz-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();


public character: Character = {
  name: '',
  power: 0,
};

emitCharacter(): void{
  if (this.character.name.length === 0) return;

  this.onNewCharacter.emit(this.character);

  this.character = {name: '', power: 0}
}

}

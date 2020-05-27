import { Injectable } from '@angular/core';
import { CharacterSheet } from 'src/app/models/character-sheet.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private empty_characters: CharacterSheet = {
    img: null,
    name: '',
    age: -1,
    sex: '',
    background: '',
    traits: [{
      name: 'Force',
      value: -1,
    }, {
      name: 'Endurance',
      value: -1,
    }, {
      name: 'Intelligence',
      value: -1,
    }, {
      name: 'Perception',
      value: -1,
    }, {
      name: 'Charisme',
      value: -1,
    }, {
      name: 'Dextérité',
      value: -1,
    }],
    skills: [
        'Conduite',
        'Instinct animal',
        'Bagarre',
    ]
  };

  characters: CharacterSheet[] = []

  constructor() {}

  get firstChar() {
    if (this.characters.length === 0) {
      const temp = {...this.empty_characters};
      this.characters.push(temp);
      return temp;
    } else {
      return this.characters[0];
    }
  }

}
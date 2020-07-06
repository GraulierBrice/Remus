import { Component, OnInit } from '@angular/core';
import { NameGeneratorService } from 'src/app/providers/name-generator/name-generator.service';

@Component({
  selector: 'app-character-name-generator',
  templateUrl: './character-name-generator.page.html',
  styleUrls: ['./character-name-generator.page.scss'],
})
export class CharacterNameGeneratorPage implements OnInit {

  data = 'elf';
  generatedNames = [];

  constructor(private nameGenerator: NameGeneratorService) {}

  ngOnInit() {
  }

  generate() {
    this.nameGenerator.setData(this.data);
    this.generatedNames = this.nameGenerator.generate(10, 4, 9);
  }

}
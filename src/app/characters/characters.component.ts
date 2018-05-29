import { Component, OnInit, Input } from '@angular/core';
import { CharactersService } from '../characters.service';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
private characterNames;
private characterDetail;
private myCharacterTitle;
@Input() characterTitle;
  constructor(private charactersService: CharactersService) { }

  ngOnInit() {
    this.charactersService.getCharacters().subscribe(characters => {
      this.characterNames = characters;
      this.myCharacterTitle = this.characterTitle;
    });
  }
  onSelect(character) {
    this.characterDetail = character;
  }

}

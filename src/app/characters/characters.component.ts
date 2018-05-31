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
private films;
private filmNames;
@Input() characterTitle;
  constructor(private charactersService: CharactersService) { }

  ngOnInit() {
    this.charactersService.getCharacters().subscribe(characters => {
      this.characterNames = characters;
      this.myCharacterTitle = this.characterTitle;
    });
  }
  onSelect(character) {
    this.filmNames = [];
    this.characterDetail = character;
      this.films = this.characterDetail.films;
      for (let i = 0; i < this.films.length; i++) {
        this.charactersService.getFilms(this.films[i]).subscribe(films => {
               this.filmNames.push(films);
        });
      }
  }

}

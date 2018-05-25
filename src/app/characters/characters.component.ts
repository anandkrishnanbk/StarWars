import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
private characterNames;
  constructor(private charactersService: CharactersService) { }

  ngOnInit() {
    this.charactersService.getCharacters().subscribe(characters => {
      this.characterNames = characters;
      console.log(characters);
    });
  }
  onSelect(event) {
    console.log(event);
  }

}

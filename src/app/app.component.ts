import { Component } from '@angular/core';
import { CharactersComponent } from './characters/characters.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private StarwarCharacters;
  title = 'app';
  constructor() {
    this.StarwarCharacters = 'Starwar Characters';
  }
}

import { Component } from '@angular/core';
import { fadeAnimation, slideAnimation } from './animation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //animations: [fadeAnimation] // register the animation
  animations:[slideAnimation]
})
export class AppComponent {
  title = 'rickandmorty';
}

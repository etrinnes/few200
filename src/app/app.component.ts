import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pepperrrrrrrrrr';

  makeUpper() {
    this.title = this.title.toUpperCase();
  }
}

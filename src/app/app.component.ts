import { Component } from '@angular/core';
import { ApplicationState } from './reducers';
import { applicationStarted } from './actions/app.actions';
import { Store } from '@ngrx/store';

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

  constructor(store: Store<ApplicationState>) {
    store.dispatch(applicationStarted());
  }
}

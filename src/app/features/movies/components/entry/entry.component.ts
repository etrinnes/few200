import { Component, OnInit } from '@angular/core';
import { MoviesState } from '../../reducers';
import { Store } from '@ngrx/store';
import { addMovie } from '../../actions/list.actions';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private store: Store<MoviesState>) { }

  ngOnInit() {
  }

  add(titleEl: HTMLInputElement, rentalPriceEl: HTMLInputElement, rentalDaysEl: HTMLSelectElement) {
    const itemToAdd = {
      title: titleEl.value,
      rentalPrice: rentalPriceEl.valueAsNumber,
      rentalDays: parseInt(rentalDaysEl.value)
    };

    // TODO replace this with a dispatch. we need an action
    // dispatched to the store
    // we need ids
    // for now add a fake id, add it to the state, then update after it
    this.store.dispatch(addMovie({ ...itemToAdd }));

    console.log(itemToAdd);
    titleEl.value = '';
    rentalPriceEl.value = '';
    rentalDaysEl.value = '2';
    titleEl.focus();
  }

}

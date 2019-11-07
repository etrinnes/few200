import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BooksState } from '../../reducers';
import { addBook } from '../../actions/list.actions';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private store: Store<BooksState>) { }

  ngOnInit() {
  }

  add(titleEl: HTMLInputElement, authorEl: HTMLInputElement, formatEl: HTMLSelectElement) {
    const itemToAdd = {
      title: titleEl.value,
      author: authorEl.value,
      format: formatEl.value
    };

    // TODO replace this with a dispatch. we need an action
    // dispatched to the store
    // we need ids
    // for now add a fake id, add it to the state, then update after it
    this.store.dispatch(addBook({ ...itemToAdd }));

    console.log(itemToAdd);
    titleEl.value = '';
    authorEl.value = '';
    formatEl.value = 'Hard-cover';
    titleEl.focus();
  }

}

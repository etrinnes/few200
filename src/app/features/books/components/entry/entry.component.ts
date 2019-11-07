import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { BooksState } from '../../reducers';
import { addBook } from '../../actions/list.actions';
import { FormsModule } from '@angular/forms';
import { BookListItem } from '../../models/book-list-item.model';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  @Input() model: BookListItem;
  constructor(private store: Store<BooksState>) {
    this.model = { id: '', title: '', author: '', format: '' };
  }

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
    this.model = { id: '', title: '', author: '', format: '' };
    titleEl.value = '';
    authorEl.value = '';
    formatEl.value = 'Hard-cover';
    titleEl.focus();
  }

}

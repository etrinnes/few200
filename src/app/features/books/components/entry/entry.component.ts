import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { BooksState } from '../../reducers';
import { addBook } from '../../actions/list.actions';
import { BookListItem } from '../../models/book-list-item.model';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  @Input() model: BookListItem;
  constructor(private store: Store<BooksState>) {
    this.model = { id: '', title: '', author: '', format: '', onLoan: false };
  }

  ngOnInit() {
  }

  add(titleEl: HTMLInputElement, authorEl: HTMLInputElement, formatEl: HTMLSelectElement, onLoan: HTMLInputElement) {
    const itemToAdd = {
      title: titleEl.value,
      author: authorEl.value,
      format: formatEl.value,
      onLoan: onLoan.checked
    };

    console.log(onLoan.checked);
    this.store.dispatch(addBook({ ...itemToAdd }));
    console.log(itemToAdd);
    // this.model = { id: '', title: '', author: '', format: '' };
    titleEl.value = '';
    authorEl.value = '';
    formatEl.value = 'Hardcover';
    titleEl.focus();
  }

}

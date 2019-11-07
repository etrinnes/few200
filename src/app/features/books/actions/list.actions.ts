import { BookEntity } from '../reducers/list.reducer';
import { createAction, props } from '@ngrx/store';

let id = 1;
export const addBook = createAction(
  '[books] added a book',
  ({ title, author, format, onLoan }: { title: string, author: string, format: string, onLoan: boolean }) => ({
    payload: {
      id: 'T' + (id++).toString(),
      title,
      author,
      format,
      onLoan
    } as BookEntity
  })
);

export const addLoanedBook = createAction(
  '[books] added a loaned book',
  ({ title, author, format, onLoan }: { title: string, author: string, format: string, onLoan: boolean }) => ({
    payload: {
      id: 'T' + (id++).toString(),
      title,
      author,
      format,
      onLoan
    } as BookEntity
  })
);

export const addBookSuccess = createAction(
  '[books] added a book successfully',
  props<{ oldId: string, payload: BookEntity }>()
);

export const loadBookSuccess = createAction(
  '[books] loaded books successfully',
  props<{ books: BookEntity[] }>()
);

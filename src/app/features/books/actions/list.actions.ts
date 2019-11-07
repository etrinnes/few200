import { BookEntity } from '../reducers/list.reducer';
import { createAction, props } from '@ngrx/store';

let id = 2;
export const addBook = createAction(
  '[books] added a book',
  ({ title, author, format }: { title: string, author: string, format: string }) => ({
    payload: {
      id: 'A' + (id++).toString(),
      title,
      author,
      format
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

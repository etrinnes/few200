import { BookEntity } from '../reducers/list.reducer';
import { createAction } from '@ngrx/store';

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

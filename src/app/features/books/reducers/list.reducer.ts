import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/list.actions';

export interface BookEntity {
  id: string;
  title: string;
  author: string;
  format: string;
}

export interface State extends EntityState<BookEntity> {

}

export const adapter: EntityAdapter<BookEntity> = createEntityAdapter<BookEntity>();

// const initialState = adapter.getInitialState();
// use this instead for some dummy books before you can get an initial state
const initialState: State = {
  ids: ['1', '2'],
  entities: {
    1: { id: '1', title: 'Pepper', author: 'Pepper Author', format: 'Hardcover' },
    2: { id: '2', title: 'Pepper Book 2', author: 'Another Pepper Author', format: 'E-Book' }
  }
};

const reducerFunction = createReducer(
  initialState,
  on(actions.addBook, (state, action) => adapter.addOne(action.payload, state))
);

export function reducer(state: State = initialState, action: Action) {
  return reducerFunction(state, action);
}

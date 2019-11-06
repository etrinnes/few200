import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import * as actions from '../actions/list.actions';

export interface MovieEntity {
  id: string;
  title: string;
  rentalDays: number;
  rentalPrice: number;
}

export interface State extends EntityState<MovieEntity> {

}

export const adapter = createEntityAdapter<MovieEntity>();

const initialState = adapter.getInitialState();

// use this instead for some dummy movies before you can get an initial state
// const initialState: State = {
//   ids: ['1', '2'],
//   entities: {
//     1: { id: '1', title: 'Return of the Jedi', rentalPrice: 2.99, rentalDays: 5 },
//     2: { id: '2', title: 'The Empire Strikes Back', rentalPrice: 3.99, rentalDays: 3 }
//   }
// };

const reducerFunction = createReducer(
  initialState,
  on(actions.addMovie, (state, action) => adapter.addOne(action.payload, state)),
  // the adapter makes sure the new payload is a new property on that object and the new id is added on there
  on(actions.loadMovieSuccess, (state, action) => adapter.addAll(action.movies, state)),
  on(actions.addMovieSuccess, (state, action) => {
    const tempState = adapter.removeOne(action.oldId, state);
    return adapter.addOne(action.payload, tempState);
  })
);

export function reducer(state: State = initialState, action: Action) {
  return reducerFunction(state, action);
}




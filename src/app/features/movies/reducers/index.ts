import * as fromList from './list.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MovieListItem } from '../models';


export const featureName = 'moviesFeature';

export interface MoviesState {
  list: fromList.State;
}

export const reducers = {
  list: fromList.reducer
};


// Selectors
// Get the stuff from your store and into your component

// 1. Feature Selector - not needed for root module
export const selectMoviesFeature = createFeatureSelector<MoviesState>(featureName);

// 2. Selector Per Branch
// before (not a feature): const selectCounterBranch = (state: ApplicationState) => state.counter;
export const selectListBranch = createSelector(selectMoviesFeature, m => m.list);

// 3. Helpers( optional)
export const { selectAll: selectMovieListArray } = fromList.adapter.getSelectors(selectListBranch);

// 4. What the components need

// Todo: we need a selector that returns a MovieListItem[] for our list.
export const selectMovieListItems = createSelector(selectMovieListArray, (movies) => (movies as MovieListItem[]));

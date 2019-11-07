import * as fromList from './list.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookListItem } from '../models';

export const featureName = 'booksFeature';

export interface BooksState {
  list: fromList.State;
  loanedList: fromList.State;
}

export const reducers = {
  list: fromList.reducer
};

// Get the stuff from your store and into your component

//  1. Feature selector
export const selectBooksFeature = createFeatureSelector<BooksState>(featureName);

// 2. Selector per branch
export const selectListBranch = createSelector(selectBooksFeature, b => b.list);
export const onLoanBranch = createSelector(selectBooksFeature, s => s.loanedList); // this is definitely not correct

// 3. Helpers (optional)
export const { selectAll: selectBookListArray } = fromList.adapter.getSelectors(selectListBranch);

// 4. What the components need

// Todo: we need a selector that returns a BookListItem[] for our list.
export const selectBookListItems = createSelector(
  selectBookListArray,
  (books) => books.map(book => ({
    id: book.id,
    title: book.title,
    author: book.author,
    format: book.format,
    onLoan: book.onLoan
  } as BookListItem))
);

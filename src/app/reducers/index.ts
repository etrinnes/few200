import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromCounter from './counter.reducer';
import { FizzBuzz } from '../components/counter/models';

export interface ApplicationState {
  counter: fromCounter.CounterState;
}

// redux needs this:
export const reducers = {
  counter: fromCounter.reducer
};


// Selectors (selector functions)

// 1. If this is a feature, create a "feature selector"

// 2. create a selector for each "branch" of the state
const selectCounterBranch = (state: ApplicationState) => state.counter;

// 3. Create "Helpers" (optional)

// 4. Create the selectors your need for the components
export const selectCurrentCount = createSelector(selectCounterBranch, b => b.current);
export const selectCountingBy = createSelector(selectCounterBranch, b => b.by);

export const selectDecrementDisabled = createSelector(
  selectCurrentCount,  // comes in as "current" below
  selectCountingBy, // comes in as "by" below
  (current, by) => current - by < 0
);
export const selectFizzBuzz = createSelector(
  selectCurrentCount,
  (count) => {
    return {
      fizz: count % 3 === 0,
      buzz: count % 5 === 0,
      fizzBuzz: (count % 3 === 0 && count % 5 === 0)
    } as FizzBuzz;
  }
);

export const displayFizzBuzz = createSelector(selectCurrentCount, b => (((b % 3 === 0) && (b % 5 === 0)) ? 'fizzbuzz' : ''));
export const displayFizz = createSelector(selectCurrentCount, b => ((b % 3) === 0) ? 'fizz' : '');
export const displayBuzz = createSelector(selectCurrentCount, b => ((b % 5) === 0) ? 'buzz' : '');



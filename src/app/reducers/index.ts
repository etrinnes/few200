import * as fromCounter from './counter.reducer';
export interface ApplicationState {
  counter: fromCounter.CounterState;
}

// redux needs this:
export const reducers = {
  counter: fromCounter.reducer
};

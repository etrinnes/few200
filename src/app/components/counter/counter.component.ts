import { Component, OnInit } from '@angular/core';
import { ApplicationState, selectCurrentCount, selectCountingBy, selectDecrementDisabled, displayFizz, displayBuzz, selectFizzBuzz, displayFizzBuzz } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actions from '../../actions/counter.actions';
import { FizzBuzz } from './models';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  countingBy$: Observable<number>;
  count$: Observable<number>;
  decrementDisabled$: Observable<boolean>;
  fizz$: Observable<string>;
  buzz$: Observable<string>;
  fizzBuzz$: Observable<string>;
  fozzBuzz$: Observable<FizzBuzz>;
  constructor(private store: Store<ApplicationState>) { }

  ngOnInit() {
    this.countingBy$ = this.store.select(selectCountingBy);
    this.count$ = this.store.select(selectCurrentCount);
    this.decrementDisabled$ = this.store.select(selectDecrementDisabled);
    this.fizz$ = this.store.select(displayFizz);
    this.buzz$ = this.store.select(displayBuzz);
    this.fozzBuzz$ = this.store.select(selectFizzBuzz);
    this.fizzBuzz$ = this.store.select(displayFizzBuzz);

  }

  reset() {
    this.store.dispatch(actions.reset());
  }

  increment() {
    this.store.dispatch(actions.increment());
  }

  decrement() {
    this.store.dispatch(actions.decrement());
  }

  setCountBy(by: number) {
    this.store.dispatch(actions.countBySet({ by }));
  }
}

function getCurrent(state: ApplicationState) {
  return state.counter.current;
}

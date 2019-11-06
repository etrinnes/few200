import { Actions, createEffect, act, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { tap, map, filter } from 'rxjs/operators';
import * as counterActions from '../actions/counter.actions';
import * as appActions from '../actions/app.actions';;

@Injectable()
export class CounterEffects {

  readCountBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      map(() => localStorage.getItem('by')), // What goes in is the action (applicationStarted). what comes out is a string or null
      filter(count => count !== null),  // only continue if it was stored previously
      map(count => parseInt(count, 10)),
      map(by => counterActions.countBySet({ by })) // an action!  this will be put back into the reducer
    ), { dispatch: true } // when this is true, the last line must be an action because it will be put back into the reducer
  );

  writeCountBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(counterActions.countBySet),
      tap(a => localStorage.setItem('by', a.by.toString()))
    ), { dispatch: false }
  );

  // this effect is gonna see every action
  // logAllActions$ = createEffect(() =>
  //   this.actions$.pipe(
  //     tap(action => console.log(`Got an action of type ${action.type}`))
  //   ), { dispatch: false }
  // );

  constructor(private actions$: Actions) { }
}

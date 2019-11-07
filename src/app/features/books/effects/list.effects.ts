import { Injectable } from '@angular/core';
import { BookEntity } from '../reducers/list.reducer';
import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as bookActions from '../actions/list.actions';
import { map } from 'rxjs/operators';
import * as appActions from '../../../actions/app.actions';


@Injectable()
export class ListEffects {

  addBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(bookActions.addBook),
      map(a => a.payload)
    ), { dispatch: false }
  );
  constructor(private actions$: Actions) { }
}

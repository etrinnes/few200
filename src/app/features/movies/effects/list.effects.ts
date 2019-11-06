import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import * as appActions from '../../../actions/app.actions';
import * as listActions from '../actions/list.actions';
import { switchMap, map } from 'rxjs/operators';
import { MovieEntity } from '../reducers/list.reducer';

@Injectable()
export class ListEffects {

  // effect for adding a movie:
  // when we get an addedMovie -> addedMovieSuccess | addedMovieFailure
  addMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(listActions.addMovie),
      map(a => a.payload),
      switchMap(originalMovie => this.client.post<MovieEntity>('http://localhost:3000/movies', {
        title: originalMovie.title,
        rentalPrice: originalMovie.rentalPrice,
        rentalDays: originalMovie.rentalDays
      }).pipe(
        map(addedMovie => listActions.addMovieSuccess({ oldId: originalMovie.id, payload: addedMovie }))
      )
      )
    )
  );

  // on application start it is going to go get the movies from the API, and on:
  // SUCCESS - return the list of movies in an action
  // FAILURE - do something else

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),  // if i get an action of this type, im gonna do a new async stream
      switchMap(() => this.client.get<GetAllResponse>('http://localhost:3000/movies')
        .pipe(
          map(response => response.movies), // {movies: MovieEntity[]} => MovieEntity[]
          map(movies => listActions.loadMovieSuccess({ movies }))
        )
      )
    ), { dispatch: true }
  );

  constructor(private actions$: Actions, private client: HttpClient) { }

}

// this is what we expect our response to look like:
interface GetAllResponse {
  movies: MovieEntity[];
}

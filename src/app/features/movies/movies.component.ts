import { Component, OnInit } from '@angular/core';
import { MoviesState, selectMovieListItems } from './reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MovieListItem } from './models';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movie$: Observable<MovieListItem[]>;
  constructor(private store: Store<MoviesState>) { }

  ngOnInit() {
    this.movie$ = this.store.select(selectMovieListItems);
  }

}

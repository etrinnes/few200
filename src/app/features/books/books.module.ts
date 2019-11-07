import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { EntryComponent } from './components/entry/entry.component';
import { ListComponent } from './components/list/list.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';
import { ListEffects } from './effects/list.effects';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BooksComponent, EntryComponent, ListComponent],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature(featureName, reducers),
    EffectsModule.forFeature([ListEffects])
  ],
  exports: [BooksComponent]
})
export class BooksModule { }

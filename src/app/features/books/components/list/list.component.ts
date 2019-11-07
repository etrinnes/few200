import { Component, OnInit, Input } from '@angular/core';
import { BookListItem } from '../../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() model: BookListItem[] = [
    { id: '1', title: 'Pepper', author: 'Pepper Author', format: 'Hardcover' },
    { id: '2', title: 'Pepper Book 2', author: 'Another Pepper Author', format: 'E-Book' }
  ];
  constructor() {
  }

  ngOnInit() {

  }

}

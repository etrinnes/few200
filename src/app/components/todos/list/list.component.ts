import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items: TodoItem[] = [
    { id: '1', description: 'Pet Pepper', completed: true },
    { id: '1', description: 'Brush Pepper', completed: false }
  ];
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItem } from '../models';
import { TodoDataService } from 'src/app/services/todo-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() items: TodoItem[] = [];
  constructor(private service: TodoDataService) { }

  ngOnInit() {
  }

  markComplete(item: TodoItem) {
    // item.completed = true;
    this.service.markComplete(item);
  }
}

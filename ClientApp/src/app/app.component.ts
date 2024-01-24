import { Component } from '@angular/core';
import { TodoTaskService } from './todo-task/todo-task.service';
import { TodoTaskHttpService } from './todo-task/todo-task.http-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [TodoTaskService, TodoTaskHttpService]
})
export class AppComponent {
  title = 'app';
}

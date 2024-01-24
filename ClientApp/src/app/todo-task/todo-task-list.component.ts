import { Component } from '@angular/core';
import { TodoTask } from './todo-task.entity';
import { TodoTaskService } from './todo-task.service';

@Component({
  selector: 'app-todo-task-list',
  templateUrl: './todo-task-list.component.html'
})
export class TodoTaskListComponent {

  get todoTasks(): TodoTask[] { return this._service.todoTasks; }

  constructor(private readonly _service: TodoTaskService) { }

  toggleIsTaskDone(id: number): void { this._service.toggleIsTaskDone(id); }
  deleteTask(id: number): void { this._service.deleteTask(id); }
}

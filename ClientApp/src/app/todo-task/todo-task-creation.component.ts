import { Component } from '@angular/core';
import { TodoTaskService } from './todo-task.service';

@Component({
  selector: 'app-todo-task-creation',
  templateUrl: './todo-task-creation.component.html'
})
export class TodoTaskCreationComponent {

  descriptionValue: string = '';

  get isCreationDisabled(): boolean { return this.descriptionValue.trim() === ''; }

  constructor(private readonly _service: TodoTaskService) {}

  createTask(): void {
    this._service.createTask(this.descriptionValue.trim());
    this.descriptionValue = '';
  }
}

import { Injectable } from "@angular/core";
import { TodoTaskHttpService } from "./todo-task.http-service";
import { TodoTask } from "./todo-task.entity";

@Injectable()
export class TodoTaskService {

  todoTasks: TodoTask[] = [];

  constructor(private readonly _httpService: TodoTaskHttpService) {
    _httpService.getAll().subscribe(tasks => {
      this.todoTasks = tasks;
    });
  }

  createTask(descriptionValue: string): void {
    this._httpService.insert(descriptionValue).subscribe(task => {
      this.todoTasks.push(task);
    });
  }

  toggleIsTaskDone(id: number) {
    const index = this.todoTasks.findIndex(task => task.id === id);
    if (index >= 0) {
      const oldTask = this.todoTasks[index];
      const newTask = new TodoTask(id, oldTask.description, !oldTask.isDone);
      this.todoTasks[index] = newTask;
      this._httpService.update(id, newTask.description, newTask.isDone).subscribe();
    }
  }

  deleteTask(id: number): void {
    const index = this.todoTasks.findIndex(task => task.id === id);
    if (index >= 0) {
      this.todoTasks.splice(index, 1);
      this._httpService.delete(id).subscribe();
    }
  }
}

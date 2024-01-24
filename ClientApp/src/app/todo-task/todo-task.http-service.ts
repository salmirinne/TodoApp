import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { TodoTask } from "./todo-task.entity";
import { Injectable } from "@angular/core";

@Injectable()
export class TodoTaskHttpService {

  private readonly baseUrl = 'TodoTask'

  constructor(private readonly _http: HttpClient) {}

  getAll(): Observable<TodoTask[]> {
    return this._http.get<TodoTask[]>(this.baseUrl);
  }

  insert(description: string): Observable<TodoTask> {
    return this._http.post<TodoTask>(this.baseUrl, { description: description });
  }

  update(id: number, description: string, isDone: boolean): Observable<void> {
    return this._http.put<void>(`${this.baseUrl}/${id}`, { description: description, isDone: isDone });
  }

  delete(id: number): Observable<void> {
    return this._http.delete<void>(`${this.baseUrl}/${id}`);
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TodoTaskCreationComponent } from './todo-task/todo-task-creation.component';
import { TodoTaskListComponent } from './todo-task/todo-task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoTaskCreationComponent,
    TodoTaskListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

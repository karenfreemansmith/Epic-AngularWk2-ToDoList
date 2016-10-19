import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component ({
  selector: "new-task",
  template: `
  <h1>New Task</h1>
  <div>
    <label>Enter Task Description:</label>
    <input #newDescription>
  </div>
  <div>
    <label>Enter Task Priority:</label>
    <!--
    In search for how to make this select work I was hopeful about
    the tutorial here possibly giving me an answer I could use.
    # apparently is not good for select items.
    https://angular.io/docs/ts/latest/guide/forms.html -->
    <select (change)="onChange($event.target.value)">
      <option value='high'>high</option>
      <option value='medium'>medium</option>
      <option value='low' selected>low</option>
    </select>
  </div>
  <div>
    <label>Enter Task ID:</label>
    <input #newId>
    <button (click)="
      addClicked(newDescription.value, newId.value. newPriority.value);
      newDescription.value='';
      newId.value='';
      newPriority.value='low';
    ">Add</button>
  </div>
  `
})

export class NewTaskComponent {
  @Output() newTaskSender = new EventEmitter();
  addClicked(description: string, id: number, priority: string) {
    var newTaskToAdd: Task = new Task(description, id, priority);
    this.newTaskSender.emit(newTaskToAdd);
  }
}

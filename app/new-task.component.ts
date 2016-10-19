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
    <label>Select Task Priority:</label>
    <select (change)="onChange($event.target.value)" class="filter">
      <option value = "low">Low</option>
      <option value = "medium">Medium</option>
      <option value = "high" selected = "selected">High</option>
    </select>
    <button (click)="
      addClicked(newDescription.value);
      newDescription.value='';
    ">Add</button>
  </div>
  `
})

export class NewTaskComponent {
  @Output() newTaskSender = new EventEmitter();
  newPriority: string = "high";
  onChange(optionFromMenu) {
    this.newPriority = optionFromMenu;
  }
  addClicked(description: string) {
    var newTaskToAdd: Task = new Task(description, this.newPriority);
    this.newTaskSender.emit(newTaskToAdd);
  }
}

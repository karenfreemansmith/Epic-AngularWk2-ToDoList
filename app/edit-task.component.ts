import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'edit-task',
  template: `
    <div *ngIf="childSelectedTask">
      <h1>Edit Task</h1>
      <div>
        <label>Enter Task Description:</label>
        <input [(ngModel)]="childSelectedTask.description">
      </div>
      <div>
        <label>Select Task Priority:</label>
        <select (change)="onChange($event.target.value)" class="filter">
          <option value = "low">Low</option>
          <option value = "medium">Medium</option>
          <option value = "high" selected="selected">High</option>
        </select>
        <button (click)="doneClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditTaskComponent {
  @Input() childSelectedTask: Task;
  @Output() doneClickedSender = new EventEmitter();
  onChange(optionFromMenu) {
    this.childSelectedTask.priority = optionFromMenu;
  }
  doneClicked() {
    this.doneClickedSender.emit();
  }
}

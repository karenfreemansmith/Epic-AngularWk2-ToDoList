import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Angular 2 ToDo List</h1>
      <h3 (click)="showDetails(currentTask)" *ngFor="let currentTask of tasks">{{ currentTask.description }}</h3>
      <div>
        <h1>Edit Task</h1>
        <div>
          <label>Enter Task Description:</label>
          <input [(ngModel)]="selectedTask.description">
        </div>
        <div>
          <label>Enter Task Id:</label>
          <input [(ngModel)]="selectedTask.id">
        </div>
      </div>
    </div>
  `
})

export class AppComponent {
  public tasks: Task[] = [
    new Task("Create To-Do List app.", 0),
    new Task("Learn Kung Fu", 1),
    new Task("Rewatch all the Lord of the Rings moies.", 2),
    new Task("Do the laundry", 3)
  ];
  selectedTask: Task = this.tasks[0];
  showDetails(clickedTask: Task) {
    this.selectedTask = clickedTask;
  }
}

export class Task {
  public done: boolean = false;
  constructor(public description: string, public id: number) {}
}

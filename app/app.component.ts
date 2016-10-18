import { Component } from '@angular/core';
import { Task } from './task.model';
import { Pie } from './pie.model';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Angular 2 ToDo List</h1>
      <div class="row">
        <div class="col-xs-6">
          <task-list
            [childTaskList]="masterTaskList"
            (clickSender)="showDetails($event)"
          ></task-list>
          <edit-task
            [childSelectedTask]="selectedTask"
            (doneClickedSender)="finishedEditing()"
          ></edit-task>
          <new-task
            (newTaskSender)="addTask($event)"
          ></new-task>
        </div>
        <div class="col-xs-6">
          <pies-list
            [childPieList]="favoritePies"
            (clickPieSender)="showPie($event)"
          ></pies-list>
          <pie-edit
            [childSelectedPie]="selectedPie"
            (clickUpdateSender)="finishedUpdate()"
          ></pie-edit>
          <add-pie
            (newPieSender)="addPie($event)"
          ></add-pie>
        </div>
      </div>
    </div>
  `
})

export class AppComponent {
  public masterTaskList: Task[] = [
      new Task("Create To-Do List app.", 0),
      new Task("Learn Kung Fu.", 1),
      new Task("Rewatch all the Lord of the Rings movies.", 2),
      new Task("Do the laundry.", 3)
  ];
  public favoritePies: Pie[] = [
    new Pie("Apple"),
    new Pie("Banana Cream"),
    new Pie("Blackberry")
  ];
  selectedTask: Task = null;
  showDetails(clickedTask: Task) {
    this.selectedTask = clickedTask;
  }
  finishedEditing() {
    this.selectedTask = null;
  }
  addTask(newTaskFromChild: Task) {
    this.masterTaskList.push(newTaskFromChild);
  }
  selectedPie: string = null;
  showPie(clickedPie: string) {
    this.selectedPie = clickedPie;
  }
  finishedUpdate() {
    this.selectedPie = null;
  }
  addPie(newPieFromChild: Pie) {
    this.favoritePies.push(newPieFromChild);
  }
}

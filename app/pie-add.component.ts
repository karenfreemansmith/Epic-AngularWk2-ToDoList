import { Component, Output, EventEmitter } from '@angular/core';
import { Pie } from './pie.model';

@Component ({
  selector: "add-pie",
  template: `
  <h1>Add Pie</h1>
  <div>
    <label>Pie Description:</label>
    <input #newDescription>
    <button (click)="
      addClicked(newDescription.value);
      newDescription.value='';
    ">Add</button>
  </div>
  `
})

export class PieAddComponent {
  @Output() newPieSender = new EventEmitter();
  addClicked(description: string) {
    var newPieToAdd: Pie = new Pie(description);
    this.newPieSender.emit(newPieToAdd);
  }
}

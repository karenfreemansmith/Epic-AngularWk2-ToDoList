import { Component, Output, Input, EventEmitter} from '@angular/core';
import { Pie } from './pie.model';

@Component({
  selector: 'pies-list',
  template: `
  <h3>Here are my favorite pies!</h3>
  <div *ngFor="let currentPie of childPieList">
    <h4>{{currentPie.name}}</h4>
    <button (click)="editButtonClick(currentPie)">EDIT</button>
  </div>
  `
})

export class PiesListComponent {
  @Input() childPieList: Pie[];
  @Output() clickPieSender = new EventEmitter();
  editButtonClick(pieToEdit: Pie) {
    this.clickPieSender.emit(pieToEdit);
  }
}

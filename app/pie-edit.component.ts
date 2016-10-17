import { Component, Output, Input, EventEmitter} from '@angular/core';
import { Pie } from './pie.model';

@Component({
  selector: 'pie-edit',
  template: `
  <div *ngIf="childSelectedPie">
    <h3>Edit Pies</h3>
    <input [(ngModel)]="childSelectedPie.name">
    <button (click)="updateButtonClick()">Update</button>
  </div>
  `
})

export class PieEditComponent {
  //favoritePies: string[] = ["Apple", "Banana Cream", "Blackberry"];
  @Input() childSelectedPie: Pie;
  @Output() clickUpdateSender = new EventEmitter();
  updateButtonClick() {
    this.clickUpdateSender.emit();
  }
}

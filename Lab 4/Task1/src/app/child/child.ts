import { Component, output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  template: `
  <button class = "btn" (click) = "addItem()"> Add Item </button>
  `,
  styles: `
    .btn {
      padding: 5px;
    }
  `,
})
export class Child {
  addItemEvent = output<string>();
  addItem() {
    this.addItemEvent.emit('🐢');
  }
}

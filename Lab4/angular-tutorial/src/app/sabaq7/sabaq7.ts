import { Component, output } from '@angular/core';

@Component({
  selector: 'app-sabaq7',
  standalone: true,
  template: `
    <button (click)="addItem()">Тасбақа қосу 🐢</button>
  `,
})
export class Sabaq7 {
  
  addItemEvent = output<string>();

  addItem() {
    
    this.addItemEvent.emit('🐢');
  }
}
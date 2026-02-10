import { Component } from '@angular/core';
import { Sabaq7 } from './sabaq7/sabaq7';; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Sabaq7], 
  template: `
    <h1>Тасбақалар фермасы</h1>

    <app-sabaq7 (addItemEvent)="addItem($event)" />

    <p>Жалпы саны: {{ items.length }}</p>

    <ul>
      @for (item of items; track $index) {
        <li>{{ item }}</li>
      }
    </ul>
  `,
})
export class App {
  items: string[] = [];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
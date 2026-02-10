import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // 1. [contentEditable] атрибутын isEditable айнымалысына байлаймыз
  template: `
    <div [contentEditable]="isEditable" style="border: 1px solid black; padding: 10px;">
     
    </div>
  `,
})
export class App {

  isEditable = true;
}
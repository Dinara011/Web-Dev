import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <section (mouseover)="showSecretMessage()" style="padding: 20px; border: 1px dashed gray; cursor: pointer;">
    
      <p><b>{{ message }}</b></p>
    </section>
  `,
})
export class App {
  message = '';

  
  showSecretMessage() {
    this.message = 'Way to go';
  }
}
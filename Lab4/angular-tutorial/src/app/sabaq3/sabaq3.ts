import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  @if (isLoggedIn){
       <span>Yes, the server is running</span> 

  }
  @else {
  <p>Server is dont running</p>
  }
  `
})
export class App {
  isLoggedIn = true;
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ProductListComponent } from './product-list/product-list'; 

@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [CommonModule, ProductListComponent], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  toRatinig(){
    this.rating = rating++;
  }
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list';
import { Category, Product } from '../models';
import { CATEGORIES, PRODUCTS } from '../products';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  categories: Category[] = CATEGORIES;
  allProducts: Product[] = PRODUCTS;
  selectedCategory: Category | null = null;
  filteredProducts: Product[] = [];

  selectCategory(category: Category) {
    this.selectedCategory = category;
    this.filteredProducts = this.allProducts.filter(p => p.categoryId === category.id);
  }
}
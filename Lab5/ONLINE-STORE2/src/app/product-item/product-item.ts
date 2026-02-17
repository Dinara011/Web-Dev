import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models'; 

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrls: ['./product-item.css']
})
export class ProductItemComponent {
  @Input() product!: Product; 
  @Output() remove = new EventEmitter<number>(); 

 
  changeImage(img: string) {
    this.product.image = img;
  }

  likeProduct() {
    this.product.likes++;

  }

  deleteProduct() {
    this.remove.emit(this.product.id); 
  }

  shareProduct(platform: string, product: Product) {
    const productUrl = encodeURIComponent(product.link);
    const message = encodeURIComponent(`Қарашы мынаны: ${product.name}`);
    let link = platform === 'whatsapp' ? `https://wa.me/?text=${message} ${productUrl}` : `https://t.me/share/url?url=${productUrl}&text=${message}`;
    window.open(link, '_blank');
  }
}
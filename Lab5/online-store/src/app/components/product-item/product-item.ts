import { Component, input, output, signal } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {
  product = input.required<Product>();

  deleteProduct = output<number>();

  likes = signal<number>(0);
  liked = signal<boolean>(false);

  onLike(){
    this.likes.update(likes => likes + 1);
    this.liked.set(true);
    setTimeout(() => this.liked.set(false), 300);
  }

  onDelete(){
    const confirmed = confirm(`Are you sure you want to delete "${this.product().name}"?`);
    if (confirmed) {
      this.deleteProduct.emit(this.product().id);
    }
  }


  getStars(): number[] {
    return Array(5).fill(0).map((_, i) => i);
  }

  isStarFilled(index: number): boolean {
    return index < Math.floor(this.product().rating);
  }

  isStarHalf(index: number): boolean {
    return index === Math.floor(this.product().rating) && this.product().rating % 1 !== 0;
  }

  shareOnWhatsApp(): void {
    const message = encodeURIComponent(`Check out this product: ${this.product().link}`);
    window.open(`https://wa.me/?text=${message}`, '_blank');
  }

  shareOnTelegram(): void {
    const url = encodeURIComponent(this.product().link);
    const text = encodeURIComponent(this.product().name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }
}

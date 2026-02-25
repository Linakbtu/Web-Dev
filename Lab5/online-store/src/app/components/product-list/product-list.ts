import { Component,computed,input, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductItem } from '../product-item/product-item';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItem],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  products = input.required<Product[]>();
  deletedIds = signal<number[]>([]);

  displayedProducts = computed(() => 
    this.products().filter(p => !this.deletedIds().includes(p.id))
  );

  onProductDeleted(productId: number): void {
    this.deletedIds.update(ids => [...ids, productId]);
  }

}
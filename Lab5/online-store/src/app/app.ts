import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from './components/product-list/product-list';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  title = 'online-store';
  private productService = inject(ProductService);
  categories: Category[] = [];

  ngOnInit(): void{
    this.categories = this.productService.getCategories();
  }

  selectedCategoryId: number | null = null;

  selectCategory(categoryId: number){
    this.selectedCategoryId = categoryId;
  }

  getSelectedProducts(): Product[] {
    if(this.selectedCategoryId === null) return [];
    return this.productService.getProductsByCategoryId(this.selectedCategoryId);
  }
}
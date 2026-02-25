import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';
import { PRODUCTS, CATEGORIES } from '../data/products.data';

@Injectable ({
    providedIn: 'root'
})

export class ProductService{

    private products: Product[] = PRODUCTS;
    private categories: Category[] = CATEGORIES;

    getProducts(): Product[]{
        return this.products;
    }

    getCategories(): Category[]{
        return this.categories;
    }

    getProductsByCategoryId(categoryId: number): Product[]{
        return this.products.filter(p => p.categoryId === categoryId);
    }

    getProductById(id: number) : Product | undefined{
        return this.products.find(p => p.id === id)
    }
}
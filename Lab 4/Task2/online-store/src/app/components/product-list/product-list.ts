import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 15 Pro Max 256GB',
      description: 'Latest flagship smartphone with A17 Pro chip, titanium design, and advanced camera system for professional photography.',
      price: 649990,
      rating: 4.8,
      image: '/assets/iphone.jpg',
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra 12GB/256GB',
      description: 'Premium Android flagship with S Pen, powerful Snapdragon 8 Gen 3 processor, and stunning AMOLED display.',
      price: 589990,
      rating: 4.7,
      image: 'assets/samsung.jpeg',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-chernyi-116044354/?c=750000000'
    },
    {
      id: 3,
      name: 'Apple MacBook Air M3 13" 8GB/256GB',
      description: 'Ultra-thin and light laptop with M3 chip for exceptional performance and all-day battery life.',
      price: 599990,
      rating: 4.9,
      image: 'assets/macbook.jpg',
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000'
    },
    {
      id: 4,
      name: 'Sony PlayStation 5 Slim 1TB',
      description: 'Next-gen gaming console with lightning-fast SSD, stunning 4K graphics, and innovative DualSense controller.',
      price: 279990,
      rating: 4.8,
      image: 'assets/Playstation.jpeg',
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-1tb-geimpad-zarjadnaja-stantsija-power-bank-gripsy-fc24-spider-man-ufc5-mortal-kombat-11-ultimate-118721919/?c=750000000'
    },
    {
      id: 5,
      name: 'Apple AirPods Pro 2nd Gen USB-C',
      description: 'Premium wireless earbuds with active noise cancellation, adaptive transparency, and spatial audio.',
      price: 129990,
      rating: 4.7,
      image: 'assets/airpods.jpg',
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000'
    },
    {
      id: 6,
      name: 'Dyson V15 Detect Absolute',
      description: 'Advanced cordless vacuum cleaner with laser detection technology for microscopic dust visualization.',
      price: 399990,
      rating: 4.6,
      image: 'assets/dyson.jpg',
      link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-sv47-serebristyi-113691132/?c=750000000'
    },
    {
      id: 7,
      name: 'Samsung 65" QN95C Neo QLED 4K',
      description: 'Premium 4K smart TV with Quantum Matrix Technology, Neural Quantum Processor, and Dolby Atmos sound.',
      price: 899990,
      rating: 4.8,
      image: 'assets/tv.jpg',
      link: 'https://kaspi.kz/shop/p/jandeks-qled-yndx-00096-165-sm-chernyi-135306530/?c=750000000'
    },
    {
      id: 8,
      name: 'DeLonghi Magnifica S ECAM 22.110',
      description: 'Automatic espresso machine with integrated grinder, cappuccino system, and customizable coffee strength.',
      price: 249990,
      rating: 4.5,
      image: 'assets/cofe.jpg',
      link: 'https://kaspi.kz/shop/p/kofemashina-delonghi-magnifica-start-ecam-220-60-b-chernyi-117220826/?c=750000000'
    },
    {
      id: 9,
      name: 'Apple Watch Series 9 GPS 45mm',
      description: 'Advanced smartwatch with always-on Retina display, health monitoring, and seamless Apple ecosystem integration.',
      price: 249990,
      rating: 4.7,
      image: 'assets/watch.jpg',
      link: 'https://kaspi.kz/shop/p/apple-watch-series-9-gps-m-l-45-mm-sinii-chernyi-113398437/?c=750000000'
    },
    {
      id: 10,
      name: "Apple Ipad Pro 11 M4 256gb 2024",
      description: 'Professional tablet with M4 chip, stunning Liquid Retina display, and support for Apple Pencil Pro.',
      price: 499990,
      rating: 4.9,
      image: 'assets/ipad.jpeg',
      link: 'https://kaspi.kz/shop/p/apple-ipad-pro-11-2024-wi-fi-11-djuim-8-gb-256-gb-chernyi-119774227/?c=750000000'
    },
    {
      id: 11,
      name: 'Xiaomi Robot Vacuum X10+',
      description: 'Smart robot vacuum with self-emptying station, AI navigation, and powerful 4000Pa suction for thorough cleaning.',
      price: 189990,
      rating: 4.6,
      image: 'assets/cleaner.jpg',
      link: 'https://kaspi.kz/shop/p/xiaomi-robot-vacuum-x10-bhr6068eu-belyi-109460319/?c=750000000'
    },
    {
      id: 12,
      name: 'Nike Air Max 270 React',
      description: 'Iconic sneakers combining style and comfort with Max Air cushioning and breathable mesh upper.',
      price: 59990,
      rating: 4.5,
      image: 'assets/snickers.jpg',
      link: 'https://kaspi.kz/shop/p/krossovki-nike-air-max-270-ah8050-005-belyi-43-5-100617251/?c=750000000'
    }
  ];
}
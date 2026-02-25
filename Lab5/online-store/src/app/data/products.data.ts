import { Product } from "../models/product.model";
import { Category } from "../models/category.model";

export const CATEGORIES: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Tablets' },
    { id: 4, name: 'Wearables' }
];

export const PRODUCTS: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 15 Pro Max 256GB',
      description: 'Latest flagship smartphone with A17 Pro chip, titanium design, and advanced camera system.',
      price: 649990,
      rating: 4.8,
      image: '/assets/iphone.jpg',
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
      categoryId: 1,
      likes: 0
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra 12GB/256GB',
      description: 'Premium Android flagship with S Pen, powerful Snapdragon 8 Gen 3 processor, and stunning AMOLED display.',
      price: 589990,
      rating: 4.7,
      image: 'assets/samsung.jpeg',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-chernyi-116044354/?c=750000000',
      categoryId: 1,
      likes: 0
    },
    {
      id: 3,
      name: 'Google Pixel 8 Pro 256GB',
      description: 'Google flagship with Tensor G3 chip, advanced AI features, and exceptional camera with Magic Eraser.',
      price: 489990,
      rating: 4.6,
      image: 'assets/pixel.jpg',
      link: 'https://kaspi.kz/shop/p/google-pixel-8a-8-gb-128-gb-chernyi-119270938/?c=750000000',
      categoryId: 1,
      likes: 0
    },
    {
      id: 4,
      name: 'Xiaomi 14 Pro 512GB',
      description: 'Premium flagship with Snapdragon 8 Gen 3, Leica camera system, and 120W fast charging.',
      price: 429990,
      rating: 4.6,
      image: 'assets/xiaomi14.jpg',
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-14-pro-8-gb-256-gb-fioletovyi-133353942/?c=750000000',
      categoryId: 1,
      likes: 0
    },
    {
      id: 5,
      name: 'OnePlus 12 256GB',
      description: 'Powerful flagship with Snapdragon 8 Gen 3, Hasselblad camera tuning, and 100W SUPERVOOC charging.',
      price: 369990,
      rating: 4.5,
      image: 'assets/oneplus12.jpg',
      link: 'https://kaspi.kz/shop/p/oneplus-nord-5-12-gb-512-gb-seryi-142846291/?c=750000000',
      categoryId: 1,
      likes: 0
    },

    {
      id: 6,
      name: 'Apple MacBook Air M3 13" 8GB/256GB',
      description: 'Ultra-thin and light laptop with M3 chip for exceptional performance and all-day battery life.',
      price: 599990,
      rating: 4.9,
      image: 'assets/macbook.jpg',
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000',
      categoryId: 2,
      likes: 0
    },
    {
      id: 7,
      name: 'Ноутбук ASUS ExpertBook P1503CVA-S70964 Core i7-13620H 16GB / SSD 512GB',
      description: 'Premium Windows laptop with stunning OLED display, powerful Intel Core i7 processor, and sleek aluminum design.',
      price: 699990,
      rating: 4.7,
      image: 'assets/dell-xps.jpg',
      link: 'https://kaspi.kz/shop/p/asus-expertbook-p1503cva-s70964-core-i7-13620h-16gb-ssd-512gb-uhd-graphics-no-os-90nx0881-m01230-15-6-16-gb-ssd-512-gb-bez-os-90nx0881-m01230-152800262/?c=750000000',
      categoryId: 2,
      likes: 0
    },
    {
      id: 8,
      name: 'ASUS ROG Zephyrus G14 AMD Ryzen 9',
      description: 'Compact gaming laptop with AMD Ryzen 9, RTX 4060, and mini-LED display for ultimate portable gaming.',
      price: 749990,
      rating: 4.7,
      image: 'assets/asus-rog.jpg',
      link: 'https://kaspi.kz/shop/p/asus-rog-zephyrus-g14-14-32-gb-ssd-1000-gb-bez-os-90nr0m82-m000w0-141343982/?c=750000000',
      categoryId: 2,
      likes: 0
    },
    {
      id: 9,
      name: 'Lenovo ThinkPad X1 Carbon Gen 11',
      description: 'Business ultrabook with Intel Core i7, legendary keyboard, and military-grade durability for professionals.',
      price: 649990,
      rating: 4.6,
      image: 'assets/thinkpad.jpg',
      link: 'https://kaspi.kz/shop/p/lenovo-thinkpad-x1-carbon-gen-13-aura-edition-14-32-gb-m-2-1024-gb-win-11-pro-21nx00f8fw-147042340/?c=750000000',
      categoryId: 2,
      likes: 0
    },
    {
      id: 10,
      name: 'Microsoft Surface Laptop 5 13.5"',
      description: 'Elegant touchscreen laptop with Intel Evo platform, PixelSense display, and Windows 11.',
      price: 579990,
      rating: 4.5,
      image: 'assets/surface-laptop.jpg',
      link: 'https://kaspi.kz/shop/p/microsoft-surface-laptop-7-x-plus-13-8-32-gb-ssd-1000-gb-win-11-z4a-00049-155744841/?c=750000000',
      categoryId: 2,
      likes: 0
    },

    {
      id: 11,
      name: 'Apple iPad Pro 11 M4 256GB 2024',
      description: 'Professional tablet with M4 chip, stunning Liquid Retina display, and support for Apple Pencil Pro.',
      price: 499990,
      rating: 4.9,
      image: 'assets/ipad.jpeg',
      link: 'https://kaspi.kz/shop/p/apple-ipad-pro-11-2024-wi-fi-11-djuim-8-gb-256-gb-chernyi-119774227/?c=750000000',
      categoryId: 3,
      likes: 0
    },
    {
      id: 12,
      name: 'Samsung Galaxy Tab S9 Ultra 12GB/256GB',
      description: 'Premium Android tablet with 14.6" AMOLED display, S Pen included, and DeX mode for desktop experience.',
      price: 449990,
      rating: 4.7,
      image: 'assets/galaxy-tab.jpg',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-sm-x716bzaas-11-djuim-8-gb-128-gb-grafit-112488621/?c=750000000',
      categoryId: 3,
      likes: 0
    },
    {
      id: 13,
      name: 'Apple iPad Air M2 11" 128GB 2024',
      description: 'Powerful and portable tablet with M2 chip, beautiful Liquid Retina display, and support for Apple Pencil Pro.',
      price: 349990,
      rating: 4.8,
      image: 'assets/ipad-air.jpg',
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2024-wi-fi-11-djuim-8-gb-256-gb-seryi-120178607/?c=750000000',
      categoryId: 3,
      likes: 0
    },
    {
      id: 14,
      name: 'Microsoft Surface Pro 10 Intel Core i5',
      description: 'Versatile 2-in-1 tablet with Intel Core i5, detachable keyboard, and Windows 11 for maximum productivity.',
      price: 529990,
      rating: 4.5,
      image: 'assets/surface-pro.jpeg',
      link: 'https://kaspi.kz/shop/p/microsoft-surface-pro-10-13-djuim-16-gb-256-gb-serebristyi-119248961/?srsltid=AfmBOorVDUvJWxmQ0vDga7yVvJVdyEuboG6lY-oB3b4CkP_rY0YZ5n82',
      categoryId: 3,
      likes: 0
    },
    {
      id: 15,
      name: 'Huawei MatePad SE AGS6-W09',
      description: 'High performance tablet with Snapdragon 8 Gen 2, 144Hz display, and Dolby Vision for immersive entertainment.',
      price: 199990,
      rating: 4.5,
      image: 'assets/hwawei-pad.jpg',
      link: 'https://kaspi.kz/shop/p/huawei-matepad-se-ags6-w09-11-djuim-6-gb-128-gb-seryi-122142537/?c=750000000',
      categoryId: 3,
      likes: 0
    },

    {
      id: 16,
      name: 'Apple Watch Series 9 GPS 45mm',
      description: 'Advanced smartwatch with always-on Retina display, health monitoring, and seamless Apple ecosystem integration.',
      price: 249990,
      rating: 4.7,
      image: 'assets/watch.jpg',
      link: 'https://kaspi.kz/shop/p/apple-watch-series-9-gps-m-l-45-mm-sinii-chernyi-113398437/?c=750000000',
      categoryId: 4,
      likes: 0
    },
    {
      id: 17,
      name: 'Samsung Galaxy Watch 6 Classic 47mm',
      description: 'Premium smartwatch with rotating bezel, advanced health tracking, and seamless Samsung ecosystem integration.',
      price: 179990,
      rating: 4.6,
      image: 'assets/galaxy-watch.jpeg',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-watch-8-classic-46-mm-serebristyi-chernyi-142950290/?c=750000000',
      categoryId: 4,
      likes: 0
    },
    {
      id: 18,
      name: 'Garmin Fenix 7 Pro Solar',
      description: 'Rugged GPS smartwatch with solar charging, advanced training metrics, and multi-sport tracking for athletes.',
      price: 329990,
      rating: 4.8,
      image: 'assets/garmin.jpg',
      link: 'https://kaspi.kz/shop/p/garmin-fenix-8-solar-47-mm-chernyi-124278317/?c=750000000',
      categoryId: 4,
      likes: 0
    },
    {
      id: 19,
      name: 'Fitbit Sense 2',
      description: 'Advanced health smartwatch with ECG, skin temperature sensor, stress management tools, and 6-day battery life.',
      price: 129990,
      rating: 4.4,
      image: 'assets/firbit.jpg',
      link: 'https://kaspi.kz/shop/p/fitbit-versa-chernyi-5100596/?c=750000000',
      categoryId: 4,
      likes: 0
    },
    {
      id: 20,
      name: 'Xiaomi Smart Band 8 Pro',
      description: 'Feature-packed fitness band with AMOLED display, GPS, heart rate monitoring, and 14-day battery life.',
      price: 39990,
      rating: 4.5,
      image: 'assets/mi-band.jpeg',
      link: 'https://kaspi.kz/shop/p/xiaomi-smart-band-8-pro-chernyi-117183011/?c=750000000',
      categoryId: 4,
      likes: 0
    }
]
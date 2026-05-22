import { Product } from '@/types';

export const products: Product[] = [
  {
    "id": "prod-1",
    "sku": "SE-FAS-0001",
    "name": "Ribbed Cotton Crew Tee",
    "slug": "ribbed-cotton-crew-tee",
    "categoryId": "cat-fashion",
    "subcategory": "T-Shirts",
    "brand": "Urban Loom",
    "images": [
      "https://picsum.photos/seed/ribbed-cotton-crew-tee-main/900/900",
      "https://picsum.photos/seed/ribbed-cotton-crew-tee-detail/900/900"
    ],
    "price": 28,
    "discountPercent": 0,
    "stock": 4,
    "rating": 3.9,
    "reviewCount": 12,
    "description": "Ribbed Cotton Crew Tee is a carefully selected fashion item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "Urban Loom",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days"
    },
    "variants": [
      {
        "id": "var-1-1",
        "type": "size",
        "name": "Size S",
        "value": "S",
        "stock": 4
      },
      {
        "id": "var-1-2",
        "type": "size",
        "name": "Size M",
        "value": "M",
        "stock": 3
      },
      {
        "id": "var-1-3",
        "type": "size",
        "name": "Size L",
        "value": "L",
        "stock": 2
      },
      {
        "id": "var-1-4",
        "type": "size",
        "name": "Size XL",
        "value": "XL",
        "stock": 1
      }
    ],
    "tags": [
      "fashion",
      "t-shirts",
      "urban loom"
    ],
    "currency": "USD",
    "isFeatured": true,
    "isBestSeller": false,
    "isNewArrival": false,
    "sold": 70,
    "createdAt": "2026-01-03T09:00:00Z",
    "reviews": [
      {
        "id": "rev-1-1",
        "productId": "prod-1",
        "userId": "user-1",
        "userName": "Ava Brooks",
        "rating": 4,
        "title": "Quality surprised me",
        "comment": "The product feels premium and matches the description perfectly.",
        "images": [],
        "createdAt": "2026-01-10T10:00:00Z"
      },
      {
        "id": "rev-1-2",
        "productId": "prod-1",
        "userId": "user-2",
        "userName": "Noah Carter",
        "rating": 4,
        "title": "Great everyday purchase",
        "comment": "Easy to use, nicely packed, and worth the price.",
        "images": [],
        "createdAt": "2026-02-11T10:00:00Z"
      },
      {
        "id": "rev-1-3",
        "productId": "prod-1",
        "userId": "user-3",
        "userName": "Mia Wilson",
        "rating": 3,
        "title": "Fast delivery",
        "comment": "Arrived earlier than expected and in excellent condition.",
        "images": [],
        "createdAt": "2026-03-12T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-2",
    "sku": "SE-FAS-0002",
    "name": "Slim Stretch Denim Jeans",
    "slug": "slim-stretch-denim-jeans",
    "categoryId": "cat-fashion",
    "subcategory": "Jeans",
    "brand": "Urban Loom",
    "images": [
      "https://picsum.photos/seed/slim-stretch-denim-jeans-main/900/900",
      "https://picsum.photos/seed/slim-stretch-denim-jeans-detail/900/900"
    ],
    "price": 39,
    "compareAtPrice": 41.05,
    "discountPercent": 5,
    "stock": 12,
    "rating": 4.0,
    "reviewCount": 15,
    "description": "Slim Stretch Denim Jeans is a carefully selected fashion item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "Urban Loom",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days"
    },
    "variants": [
      {
        "id": "var-2-1",
        "type": "size",
        "name": "Size S",
        "value": "S",
        "stock": 12
      },
      {
        "id": "var-2-2",
        "type": "size",
        "name": "Size M",
        "value": "M",
        "stock": 11
      },
      {
        "id": "var-2-3",
        "type": "size",
        "name": "Size L",
        "value": "L",
        "stock": 10
      },
      {
        "id": "var-2-4",
        "type": "size",
        "name": "Size XL",
        "value": "XL",
        "stock": 9
      }
    ],
    "tags": [
      "fashion",
      "jeans",
      "urban loom"
    ],
    "currency": "USD",
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": true,
    "sold": 101,
    "createdAt": "2026-01-06T09:00:00Z",
    "reviews": [
      {
        "id": "rev-2-1",
        "productId": "prod-2",
        "userId": "user-1",
        "userName": "Ava Brooks",
        "rating": 4,
        "title": "Great everyday purchase",
        "comment": "Easy to use, nicely packed, and worth the price.",
        "images": [],
        "createdAt": "2026-01-11T10:00:00Z"
      },
      {
        "id": "rev-2-2",
        "productId": "prod-2",
        "userId": "user-2",
        "userName": "Noah Carter",
        "rating": 4,
        "title": "Fast delivery",
        "comment": "Arrived earlier than expected and in excellent condition.",
        "images": [],
        "createdAt": "2026-02-12T10:00:00Z"
      },
      {
        "id": "rev-2-3",
        "productId": "prod-2",
        "userId": "user-3",
        "userName": "Mia Wilson",
        "rating": 3,
        "title": "Would buy again",
        "comment": "Good value and the color/finish looks even better in person.",
        "images": [],
        "createdAt": "2026-03-13T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-3",
    "sku": "SE-FAS-0003",
    "name": "Lightweight Bomber Jacket",
    "slug": "lightweight-bomber-jacket",
    "categoryId": "cat-fashion",
    "subcategory": "Jackets",
    "brand": "Urban Loom",
    "images": [
      "https://picsum.photos/seed/lightweight-bomber-jacket-main/900/900",
      "https://picsum.photos/seed/lightweight-bomber-jacket-detail/900/900"
    ],
    "price": 50,
    "compareAtPrice": 55.56,
    "discountPercent": 10,
    "stock": 30,
    "rating": 4.1,
    "reviewCount": 18,
    "description": "Lightweight Bomber Jacket is a carefully selected fashion item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "Urban Loom",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days"
    },
    "variants": [
      {
        "id": "var-3-1",
        "type": "size",
        "name": "Size S",
        "value": "S",
        "stock": 30
      },
      {
        "id": "var-3-2",
        "type": "size",
        "name": "Size M",
        "value": "M",
        "stock": 29
      },
      {
        "id": "var-3-3",
        "type": "size",
        "name": "Size L",
        "value": "L",
        "stock": 28
      },
      {
        "id": "var-3-4",
        "type": "size",
        "name": "Size XL",
        "value": "XL",
        "stock": 27
      }
    ],
    "tags": [
      "fashion",
      "jackets",
      "urban loom"
    ],
    "currency": "USD",
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": false,
    "sold": 132,
    "createdAt": "2026-01-09T09:00:00Z",
    "reviews": [
      {
        "id": "rev-3-1",
        "productId": "prod-3",
        "userId": "user-1",
        "userName": "Ava Brooks",
        "rating": 4,
        "title": "Fast delivery",
        "comment": "Arrived earlier than expected and in excellent condition.",
        "images": [],
        "createdAt": "2026-01-12T10:00:00Z"
      },
      {
        "id": "rev-3-2",
        "productId": "prod-3",
        "userId": "user-2",
        "userName": "Noah Carter",
        "rating": 4,
        "title": "Would buy again",
        "comment": "Good value and the color/finish looks even better in person.",
        "images": [],
        "createdAt": "2026-02-13T10:00:00Z"
      },
      {
        "id": "rev-3-3",
        "productId": "prod-3",
        "userId": "user-3",
        "userName": "Mia Wilson",
        "rating": 3,
        "title": "Solid choice",
        "comment": "Works well for daily use and has a clean modern design.",
        "images": [],
        "createdAt": "2026-03-14T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-4",
    "sku": "SE-FAS-0004",
    "name": "Linen Summer Shirt",
    "slug": "linen-summer-shirt",
    "categoryId": "cat-fashion",
    "subcategory": "Ethnic Wear",
    "brand": "Urban Loom",
    "images": [
      "https://picsum.photos/seed/linen-summer-shirt-main/900/900",
      "https://picsum.photos/seed/linen-summer-shirt-detail/900/900"
    ],
    "price": 49,
    "compareAtPrice": 55.68,
    "discountPercent": 12,
    "stock": 7,
    "rating": 4.2,
    "reviewCount": 21,
    "description": "Linen Summer Shirt is a carefully selected fashion item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "Urban Loom",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days"
    },
    "variants": [
      {
        "id": "var-4-1",
        "type": "size",
        "name": "Size S",
        "value": "S",
        "stock": 7
      },
      {
        "id": "var-4-2",
        "type": "size",
        "name": "Size M",
        "value": "M",
        "stock": 6
      },
      {
        "id": "var-4-3",
        "type": "size",
        "name": "Size L",
        "value": "L",
        "stock": 5
      },
      {
        "id": "var-4-4",
        "type": "size",
        "name": "Size XL",
        "value": "XL",
        "stock": 4
      }
    ],
    "tags": [
      "fashion",
      "ethnic wear",
      "urban loom"
    ],
    "currency": "USD",
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false,
    "sold": 163,
    "createdAt": "2026-01-12T09:00:00Z",
    "reviews": [
      {
        "id": "rev-4-1",
        "productId": "prod-4",
        "userId": "user-1",
        "userName": "Ava Brooks",
        "rating": 4,
        "title": "Would buy again",
        "comment": "Good value and the color/finish looks even better in person.",
        "images": [],
        "createdAt": "2026-01-13T10:00:00Z"
      },
      {
        "id": "rev-4-2",
        "productId": "prod-4",
        "userId": "user-2",
        "userName": "Noah Carter",
        "rating": 4,
        "title": "Solid choice",
        "comment": "Works well for daily use and has a clean modern design.",
        "images": [],
        "createdAt": "2026-02-14T10:00:00Z"
      },
      {
        "id": "rev-4-3",
        "productId": "prod-4",
        "userId": "user-3",
        "userName": "Mia Wilson",
        "rating": 3,
        "title": "Quality surprised me",
        "comment": "The product feels premium and matches the description perfectly.",
        "images": [],
        "createdAt": "2026-03-15T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-5",
    "sku": "SE-FAS-0005",
    "name": "Performance Training Joggers",
    "slug": "performance-training-joggers",
    "categoryId": "cat-fashion",
    "subcategory": "Activewear",
    "brand": "PulseFit",
    "images": [
      "https://picsum.photos/seed/performance-training-joggers-main/900/900",
      "https://picsum.photos/seed/performance-training-joggers-detail/900/900"
    ],
    "price": 60,
    "compareAtPrice": 70.59,
    "discountPercent": 15,
    "stock": 0,
    "rating": 4.3,
    "reviewCount": 24,
    "description": "Performance Training Joggers is a carefully selected fashion item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "Urban Loom",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days"
    },
    "variants": [
      {
        "id": "var-5-1",
        "type": "size",
        "name": "Size S",
        "value": "S",
        "stock": 0
      },
      {
        "id": "var-5-2",
        "type": "size",
        "name": "Size M",
        "value": "M",
        "stock": 0
      },
      {
        "id": "var-5-3",
        "type": "size",
        "name": "Size L",
        "value": "L",
        "stock": 0
      },
      {
        "id": "var-5-4",
        "type": "size",
        "name": "Size XL",
        "value": "XL",
        "stock": 0
      }
    ],
    "tags": [
      "fashion",
      "activewear",
      "urban loom"
    ],
    "currency": "USD",
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": true,
    "sold": 194,
    "createdAt": "2026-01-15T09:00:00Z",
    "reviews": [
      {
        "id": "rev-5-1",
        "productId": "prod-5",
        "userId": "user-1",
        "userName": "Ava Brooks",
        "rating": 4,
        "title": "Solid choice",
        "comment": "Works well for daily use and has a clean modern design.",
        "images": [],
        "createdAt": "2026-01-14T10:00:00Z"
      },
      {
        "id": "rev-5-2",
        "productId": "prod-5",
        "userId": "user-2",
        "userName": "Noah Carter",
        "rating": 4,
        "title": "Quality surprised me",
        "comment": "The product feels premium and matches the description perfectly.",
        "images": [],
        "createdAt": "2026-02-15T10:00:00Z"
      },
      {
        "id": "rev-5-3",
        "productId": "prod-5",
        "userId": "user-3",
        "userName": "Mia Wilson",
        "rating": 3,
        "title": "Great everyday purchase",
        "comment": "Easy to use, nicely packed, and worth the price.",
        "images": [],
        "createdAt": "2026-03-16T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-6",
    "sku": "SE-FAS-0006",
    "name": "Classic Oxford Shirt",
    "slug": "classic-oxford-shirt",
    "categoryId": "cat-fashion",
    "subcategory": "T-Shirts",
    "brand": "DailyHarvest",
    "images": [
      "https://picsum.photos/seed/classic-oxford-shirt-main/900/900",
      "https://picsum.photos/seed/classic-oxford-shirt-detail/900/900"
    ],
    "price": 71,
    "compareAtPrice": 88.75,
    "discountPercent": 20,
    "stock": 45,
    "rating": 4.4,
    "reviewCount": 27,
    "description": "Classic Oxford Shirt is a carefully selected fashion item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "Urban Loom",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days"
    },
    "variants": [
      {
        "id": "var-6-1",
        "type": "size",
        "name": "Size S",
        "value": "S",
        "stock": 45
      },
      {
        "id": "var-6-2",
        "type": "size",
        "name": "Size M",
        "value": "M",
        "stock": 44
      },
      {
        "id": "var-6-3",
        "type": "size",
        "name": "Size L",
        "value": "L",
        "stock": 43
      },
      {
        "id": "var-6-4",
        "type": "size",
        "name": "Size XL",
        "value": "XL",
        "stock": 42
      }
    ],
    "tags": [
      "fashion",
      "t-shirts",
      "urban loom"
    ],
    "currency": "USD",
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false,
    "sold": 225,
    "createdAt": "2026-01-18T09:00:00Z",
    "reviews": [
      {
        "id": "rev-6-1",
        "productId": "prod-6",
        "userId": "user-1",
        "userName": "Ava Brooks",
        "rating": 4,
        "title": "Quality surprised me",
        "comment": "The product feels premium and matches the description perfectly.",
        "images": [],
        "createdAt": "2026-01-15T10:00:00Z"
      },
      {
        "id": "rev-6-2",
        "productId": "prod-6",
        "userId": "user-2",
        "userName": "Noah Carter",
        "rating": 4,
        "title": "Great everyday purchase",
        "comment": "Easy to use, nicely packed, and worth the price.",
        "images": [],
        "createdAt": "2026-02-16T10:00:00Z"
      },
      {
        "id": "rev-6-3",
        "productId": "prod-6",
        "userId": "user-3",
        "userName": "Mia Wilson",
        "rating": 3,
        "title": "Fast delivery",
        "comment": "Arrived earlier than expected and in excellent condition.",
        "images": [],
        "createdAt": "2026-03-17T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-7",
    "sku": "SE-ELE-0007",
    "name": "AeroPods Pro Wireless Earbuds",
    "slug": "aeropods-pro-wireless-earbuds",
    "categoryId": "cat-electronics",
    "subcategory": "Mobiles",
    "brand": "NovaTech",
    "images": [
      "https://picsum.photos/seed/aeropods-pro-wireless-earbuds-main/900/900",
      "https://picsum.photos/seed/aeropods-pro-wireless-earbuds-detail/900/900"
    ],
    "price": 66,
    "compareAtPrice": 69.47,
    "discountPercent": 5,
    "stock": 12,
    "rating": 4.0,
    "reviewCount": 16,
    "description": "AeroPods Pro Wireless Earbuds is a carefully selected electronics item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "NovaTech",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days",
      "Connectivity": "Bluetooth / USB-C",
      "Battery": "Up to 24 hours"
    },
    "variants": [
      {
        "id": "var-7-1",
        "type": "color",
        "name": "Black",
        "value": "Black",
        "stock": 12
      },
      {
        "id": "var-7-2",
        "type": "color",
        "name": "Silver",
        "value": "Silver",
        "stock": 10
      },
      {
        "id": "var-7-3",
        "type": "color",
        "name": "Blue",
        "value": "Blue",
        "stock": 8
      }
    ],
    "tags": [
      "electronics",
      "mobiles",
      "novatech"
    ],
    "currency": "USD",
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": false,
    "sold": 93,
    "createdAt": "2026-02-03T09:00:00Z",
    "reviews": [
      {
        "id": "rev-7-1",
        "productId": "prod-7",
        "userId": "user-2",
        "userName": "Noah Carter",
        "rating": 4,
        "title": "Great everyday purchase",
        "comment": "Easy to use, nicely packed, and worth the price.",
        "images": [],
        "createdAt": "2026-01-10T10:00:00Z"
      },
      {
        "id": "rev-7-2",
        "productId": "prod-7",
        "userId": "user-3",
        "userName": "Mia Wilson",
        "rating": 4,
        "title": "Fast delivery",
        "comment": "Arrived earlier than expected and in excellent condition.",
        "images": [],
        "createdAt": "2026-02-11T10:00:00Z"
      },
      {
        "id": "rev-7-3",
        "productId": "prod-7",
        "userId": "user-4",
        "userName": "Ethan Singh",
        "rating": 3,
        "title": "Would buy again",
        "comment": "Good value and the color/finish looks even better in person.",
        "images": [],
        "createdAt": "2026-03-12T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-8",
    "sku": "SE-ELE-0008",
    "name": "VoltCharge 65W GaN Charger",
    "slug": "voltcharge-65w-gan-charger",
    "categoryId": "cat-electronics",
    "subcategory": "Audio",
    "brand": "NovaTech",
    "images": [
      "https://picsum.photos/seed/voltcharge-65w-gan-charger-main/900/900",
      "https://picsum.photos/seed/voltcharge-65w-gan-charger-detail/900/900"
    ],
    "price": 77,
    "compareAtPrice": 85.56,
    "discountPercent": 10,
    "stock": 30,
    "rating": 4.1,
    "reviewCount": 19,
    "description": "VoltCharge 65W GaN Charger is a carefully selected electronics item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "NovaTech",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days",
      "Connectivity": "Bluetooth / USB-C",
      "Battery": "Up to 24 hours"
    },
    "variants": [
      {
        "id": "var-8-1",
        "type": "color",
        "name": "Black",
        "value": "Black",
        "stock": 30
      },
      {
        "id": "var-8-2",
        "type": "color",
        "name": "Silver",
        "value": "Silver",
        "stock": 28
      },
      {
        "id": "var-8-3",
        "type": "color",
        "name": "Blue",
        "value": "Blue",
        "stock": 26
      }
    ],
    "tags": [
      "electronics",
      "audio",
      "novatech"
    ],
    "currency": "USD",
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": true,
    "sold": 124,
    "createdAt": "2026-02-06T09:00:00Z",
    "reviews": [
      {
        "id": "rev-8-1",
        "productId": "prod-8",
        "userId": "user-2",
        "userName": "Noah Carter",
        "rating": 4,
        "title": "Fast delivery",
        "comment": "Arrived earlier than expected and in excellent condition.",
        "images": [],
        "createdAt": "2026-01-11T10:00:00Z"
      },
      {
        "id": "rev-8-2",
        "productId": "prod-8",
        "userId": "user-3",
        "userName": "Mia Wilson",
        "rating": 4,
        "title": "Would buy again",
        "comment": "Good value and the color/finish looks even better in person.",
        "images": [],
        "createdAt": "2026-02-12T10:00:00Z"
      },
      {
        "id": "rev-8-3",
        "productId": "prod-8",
        "userId": "user-4",
        "userName": "Ethan Singh",
        "rating": 3,
        "title": "Solid choice",
        "comment": "Works well for daily use and has a clean modern design.",
        "images": [],
        "createdAt": "2026-03-13T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-9",
    "sku": "SE-ELE-0009",
    "name": "ZenBook Sleeve 14 Inch",
    "slug": "zenbook-sleeve-14-inch",
    "categoryId": "cat-electronics",
    "subcategory": "Laptops",
    "brand": "NovaTech",
    "images": [
      "https://picsum.photos/seed/zenbook-sleeve-14-inch-main/900/900",
      "https://picsum.photos/seed/zenbook-sleeve-14-inch-detail/900/900"
    ],
    "price": 88,
    "compareAtPrice": 100.0,
    "discountPercent": 12,
    "stock": 7,
    "rating": 4.2,
    "reviewCount": 22,
    "description": "ZenBook Sleeve 14 Inch is a carefully selected electronics item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "NovaTech",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days",
      "Connectivity": "Bluetooth / USB-C",
      "Battery": "Up to 24 hours"
    },
    "variants": [
      {
        "id": "var-9-1",
        "type": "color",
        "name": "Black",
        "value": "Black",
        "stock": 7
      },
      {
        "id": "var-9-2",
        "type": "color",
        "name": "Silver",
        "value": "Silver",
        "stock": 5
      },
      {
        "id": "var-9-3",
        "type": "color",
        "name": "Blue",
        "value": "Blue",
        "stock": 3
      }
    ],
    "tags": [
      "electronics",
      "laptops",
      "novatech"
    ],
    "currency": "USD",
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false,
    "sold": 155,
    "createdAt": "2026-02-09T09:00:00Z",
    "reviews": [
      {
        "id": "rev-9-1",
        "productId": "prod-9",
        "userId": "user-2",
        "userName": "Noah Carter",
        "rating": 4,
        "title": "Would buy again",
        "comment": "Good value and the color/finish looks even better in person.",
        "images": [],
        "createdAt": "2026-01-12T10:00:00Z"
      },
      {
        "id": "rev-9-2",
        "productId": "prod-9",
        "userId": "user-3",
        "userName": "Mia Wilson",
        "rating": 4,
        "title": "Solid choice",
        "comment": "Works well for daily use and has a clean modern design.",
        "images": [],
        "createdAt": "2026-02-13T10:00:00Z"
      },
      {
        "id": "rev-9-3",
        "productId": "prod-9",
        "userId": "user-4",
        "userName": "Ethan Singh",
        "rating": 3,
        "title": "Quality surprised me",
        "comment": "The product feels premium and matches the description perfectly.",
        "images": [],
        "createdAt": "2026-03-14T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-10",
    "sku": "SE-ELE-0010",
    "name": "Pulse Mini Bluetooth Speaker",
    "slug": "pulse-mini-bluetooth-speaker",
    "categoryId": "cat-electronics",
    "subcategory": "Accessories",
    "brand": "NovaTech",
    "images": [
      "https://picsum.photos/seed/pulse-mini-bluetooth-speaker-main/900/900",
      "https://picsum.photos/seed/pulse-mini-bluetooth-speaker-detail/900/900"
    ],
    "price": 87,
    "compareAtPrice": 102.35,
    "discountPercent": 15,
    "stock": 0,
    "rating": 4.3,
    "reviewCount": 25,
    "description": "Pulse Mini Bluetooth Speaker is a carefully selected electronics item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "NovaTech",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days",
      "Connectivity": "Bluetooth / USB-C",
      "Battery": "Up to 24 hours"
    },
    "variants": [
      {
        "id": "var-10-1",
        "type": "color",
        "name": "Black",
        "value": "Black",
        "stock": 0
      },
      {
        "id": "var-10-2",
        "type": "color",
        "name": "Silver",
        "value": "Silver",
        "stock": 0
      },
      {
        "id": "var-10-3",
        "type": "color",
        "name": "Blue",
        "value": "Blue",
        "stock": 0
      }
    ],
    "tags": [
      "electronics",
      "accessories",
      "novatech"
    ],
    "currency": "USD",
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false,
    "sold": 186,
    "createdAt": "2026-02-12T09:00:00Z",
    "reviews": [
      {
        "id": "rev-10-1",
        "productId": "prod-10",
        "userId": "user-2",
        "userName": "Noah Carter",
        "rating": 4,
        "title": "Solid choice",
        "comment": "Works well for daily use and has a clean modern design.",
        "images": [],
        "createdAt": "2026-01-13T10:00:00Z"
      },
      {
        "id": "rev-10-2",
        "productId": "prod-10",
        "userId": "user-3",
        "userName": "Mia Wilson",
        "rating": 4,
        "title": "Quality surprised me",
        "comment": "The product feels premium and matches the description perfectly.",
        "images": [],
        "createdAt": "2026-02-14T10:00:00Z"
      },
      {
        "id": "rev-10-3",
        "productId": "prod-10",
        "userId": "user-4",
        "userName": "Ethan Singh",
        "rating": 3,
        "title": "Great everyday purchase",
        "comment": "Easy to use, nicely packed, and worth the price.",
        "images": [],
        "createdAt": "2026-03-15T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-11",
    "sku": "SE-ELE-0011",
    "name": "SmartHub Home Sensor Kit",
    "slug": "smarthub-home-sensor-kit",
    "categoryId": "cat-electronics",
    "subcategory": "Smart Home",
    "brand": "DailyHarvest",
    "images": [
      "https://picsum.photos/seed/smarthub-home-sensor-kit-main/900/900",
      "https://picsum.photos/seed/smarthub-home-sensor-kit-detail/900/900"
    ],
    "price": 98,
    "compareAtPrice": 122.5,
    "discountPercent": 20,
    "stock": 45,
    "rating": 4.4,
    "reviewCount": 28,
    "description": "SmartHub Home Sensor Kit is a carefully selected electronics item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "NovaTech",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days",
      "Connectivity": "Bluetooth / USB-C",
      "Battery": "Up to 24 hours"
    },
    "variants": [
      {
        "id": "var-11-1",
        "type": "color",
        "name": "Black",
        "value": "Black",
        "stock": 45
      },
      {
        "id": "var-11-2",
        "type": "color",
        "name": "Silver",
        "value": "Silver",
        "stock": 43
      },
      {
        "id": "var-11-3",
        "type": "color",
        "name": "Blue",
        "value": "Blue",
        "stock": 41
      }
    ],
    "tags": [
      "electronics",
      "smart home",
      "novatech"
    ],
    "currency": "USD",
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": true,
    "sold": 217,
    "createdAt": "2026-02-15T09:00:00Z",
    "reviews": [
      {
        "id": "rev-11-1",
        "productId": "prod-11",
        "userId": "user-2",
        "userName": "Noah Carter",
        "rating": 4,
        "title": "Quality surprised me",
        "comment": "The product feels premium and matches the description perfectly.",
        "images": [],
        "createdAt": "2026-01-14T10:00:00Z"
      },
      {
        "id": "rev-11-2",
        "productId": "prod-11",
        "userId": "user-3",
        "userName": "Mia Wilson",
        "rating": 4,
        "title": "Great everyday purchase",
        "comment": "Easy to use, nicely packed, and worth the price.",
        "images": [],
        "createdAt": "2026-02-15T10:00:00Z"
      },
      {
        "id": "rev-11-3",
        "productId": "prod-11",
        "userId": "user-4",
        "userName": "Ethan Singh",
        "rating": 3,
        "title": "Fast delivery",
        "comment": "Arrived earlier than expected and in excellent condition.",
        "images": [],
        "createdAt": "2026-03-16T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-12",
    "sku": "SE-ELE-0012",
    "name": "CrystalClear Phone Case",
    "slug": "crystalclear-phone-case",
    "categoryId": "cat-electronics",
    "subcategory": "Mobiles",
    "brand": "StridePro",
    "images": [
      "https://picsum.photos/seed/crystalclear-phone-case-main/900/900",
      "https://picsum.photos/seed/crystalclear-phone-case-detail/900/900"
    ],
    "price": 109,
    "discountPercent": 0,
    "stock": 4,
    "rating": 4.5,
    "reviewCount": 31,
    "description": "CrystalClear Phone Case is a carefully selected electronics item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "NovaTech",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days",
      "Connectivity": "Bluetooth / USB-C",
      "Battery": "Up to 24 hours"
    },
    "variants": [
      {
        "id": "var-12-1",
        "type": "color",
        "name": "Black",
        "value": "Black",
        "stock": 4
      },
      {
        "id": "var-12-2",
        "type": "color",
        "name": "Silver",
        "value": "Silver",
        "stock": 2
      },
      {
        "id": "var-12-3",
        "type": "color",
        "name": "Blue",
        "value": "Blue",
        "stock": 0
      }
    ],
    "tags": [
      "electronics",
      "mobiles",
      "novatech"
    ],
    "currency": "USD",
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false,
    "sold": 248,
    "createdAt": "2026-02-18T09:00:00Z",
    "reviews": [
      {
        "id": "rev-12-1",
        "productId": "prod-12",
        "userId": "user-2",
        "userName": "Noah Carter",
        "rating": 4,
        "title": "Great everyday purchase",
        "comment": "Easy to use, nicely packed, and worth the price.",
        "images": [],
        "createdAt": "2026-01-15T10:00:00Z"
      },
      {
        "id": "rev-12-2",
        "productId": "prod-12",
        "userId": "user-3",
        "userName": "Mia Wilson",
        "rating": 4,
        "title": "Fast delivery",
        "comment": "Arrived earlier than expected and in excellent condition.",
        "images": [],
        "createdAt": "2026-02-16T10:00:00Z"
      },
      {
        "id": "rev-12-3",
        "productId": "prod-12",
        "userId": "user-4",
        "userName": "Ethan Singh",
        "rating": 4,
        "title": "Would buy again",
        "comment": "Good value and the color/finish looks even better in person.",
        "images": [],
        "createdAt": "2026-03-17T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-13",
    "sku": "SE-BEA-0013",
    "name": "HydraGlow Vitamin C Serum",
    "slug": "hydraglow-vitamin-c-serum",
    "categoryId": "cat-beauty",
    "subcategory": "Skincare",
    "brand": "GlowLab",
    "images": [
      "https://picsum.photos/seed/hydraglow-vitamin-c-serum-main/900/900",
      "https://picsum.photos/seed/hydraglow-vitamin-c-serum-detail/900/900"
    ],
    "price": 26,
    "compareAtPrice": 28.89,
    "discountPercent": 10,
    "stock": 30,
    "rating": 4.1,
    "reviewCount": 20,
    "description": "HydraGlow Vitamin C Serum is a carefully selected beauty item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "GlowLab",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days",
      "Skin Type": "All skin types",
      "Volume": "50 ml"
    },
    "variants": [
      {
        "id": "var-13-1",
        "type": "color",
        "name": "Natural",
        "value": "Natural",
        "stock": 30
      },
      {
        "id": "var-13-2",
        "type": "color",
        "name": "Charcoal",
        "value": "Charcoal",
        "stock": 29
      },
      {
        "id": "var-13-3",
        "type": "color",
        "name": "Cream",
        "value": "Cream",
        "stock": 28
      }
    ],
    "tags": [
      "beauty",
      "skincare",
      "glowlab"
    ],
    "currency": "USD",
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": false,
    "sold": 116,
    "createdAt": "2026-03-03T09:00:00Z",
    "reviews": [
      {
        "id": "rev-13-1",
        "productId": "prod-13",
        "userId": "user-3",
        "userName": "Mia Wilson",
        "rating": 4,
        "title": "Fast delivery",
        "comment": "Arrived earlier than expected and in excellent condition.",
        "images": [],
        "createdAt": "2026-01-10T10:00:00Z"
      },
      {
        "id": "rev-13-2",
        "productId": "prod-13",
        "userId": "user-4",
        "userName": "Ethan Singh",
        "rating": 4,
        "title": "Would buy again",
        "comment": "Good value and the color/finish looks even better in person.",
        "images": [],
        "createdAt": "2026-02-11T10:00:00Z"
      },
      {
        "id": "rev-13-3",
        "productId": "prod-13",
        "userId": "user-5",
        "userName": "Sophia Khan",
        "rating": 3,
        "title": "Solid choice",
        "comment": "Works well for daily use and has a clean modern design.",
        "images": [],
        "createdAt": "2026-03-12T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-14",
    "sku": "SE-BEA-0014",
    "name": "Matte Luxe Lip Color",
    "slug": "matte-luxe-lip-color",
    "categoryId": "cat-beauty",
    "subcategory": "Makeup",
    "brand": "GlowLab",
    "images": [
      "https://picsum.photos/seed/matte-luxe-lip-color-main/900/900",
      "https://picsum.photos/seed/matte-luxe-lip-color-detail/900/900"
    ],
    "price": 37,
    "compareAtPrice": 42.05,
    "discountPercent": 12,
    "stock": 7,
    "rating": 4.2,
    "reviewCount": 23,
    "description": "Matte Luxe Lip Color is a carefully selected beauty item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "GlowLab",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days",
      "Skin Type": "All skin types",
      "Volume": "50 ml"
    },
    "variants": [
      {
        "id": "var-14-1",
        "type": "color",
        "name": "Natural",
        "value": "Natural",
        "stock": 7
      },
      {
        "id": "var-14-2",
        "type": "color",
        "name": "Charcoal",
        "value": "Charcoal",
        "stock": 6
      },
      {
        "id": "var-14-3",
        "type": "color",
        "name": "Cream",
        "value": "Cream",
        "stock": 5
      }
    ],
    "tags": [
      "beauty",
      "makeup",
      "glowlab"
    ],
    "currency": "USD",
    "isFeatured": true,
    "isBestSeller": false,
    "isNewArrival": true,
    "sold": 147,
    "createdAt": "2026-03-06T09:00:00Z",
    "reviews": [
      {
        "id": "rev-14-1",
        "productId": "prod-14",
        "userId": "user-3",
        "userName": "Mia Wilson",
        "rating": 4,
        "title": "Would buy again",
        "comment": "Good value and the color/finish looks even better in person.",
        "images": [],
        "createdAt": "2026-01-11T10:00:00Z"
      },
      {
        "id": "rev-14-2",
        "productId": "prod-14",
        "userId": "user-4",
        "userName": "Ethan Singh",
        "rating": 4,
        "title": "Solid choice",
        "comment": "Works well for daily use and has a clean modern design.",
        "images": [],
        "createdAt": "2026-02-12T10:00:00Z"
      },
      {
        "id": "rev-14-3",
        "productId": "prod-14",
        "userId": "user-5",
        "userName": "Sophia Khan",
        "rating": 3,
        "title": "Quality surprised me",
        "comment": "The product feels premium and matches the description perfectly.",
        "images": [],
        "createdAt": "2026-03-13T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-15",
    "sku": "SE-BEA-0015",
    "name": "Repair+ Argan Hair Mask",
    "slug": "repairplus-argan-hair-mask",
    "categoryId": "cat-beauty",
    "subcategory": "Hair Care",
    "brand": "GlowLab",
    "images": [
      "https://picsum.photos/seed/repairplus-argan-hair-mask-main/900/900",
      "https://picsum.photos/seed/repairplus-argan-hair-mask-detail/900/900"
    ],
    "price": 48,
    "compareAtPrice": 56.47,
    "discountPercent": 15,
    "stock": 0,
    "rating": 4.3,
    "reviewCount": 26,
    "description": "Repair+ Argan Hair Mask is a carefully selected beauty item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "GlowLab",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days",
      "Skin Type": "All skin types",
      "Volume": "50 ml"
    },
    "variants": [
      {
        "id": "var-15-1",
        "type": "color",
        "name": "Natural",
        "value": "Natural",
        "stock": 0
      },
      {
        "id": "var-15-2",
        "type": "color",
        "name": "Charcoal",
        "value": "Charcoal",
        "stock": 0
      },
      {
        "id": "var-15-3",
        "type": "color",
        "name": "Cream",
        "value": "Cream",
        "stock": 0
      }
    ],
    "tags": [
      "beauty",
      "hair care",
      "glowlab"
    ],
    "currency": "USD",
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false,
    "sold": 178,
    "createdAt": "2026-03-09T09:00:00Z",
    "reviews": [
      {
        "id": "rev-15-1",
        "productId": "prod-15",
        "userId": "user-3",
        "userName": "Mia Wilson",
        "rating": 4,
        "title": "Solid choice",
        "comment": "Works well for daily use and has a clean modern design.",
        "images": [],
        "createdAt": "2026-01-12T10:00:00Z"
      },
      {
        "id": "rev-15-2",
        "productId": "prod-15",
        "userId": "user-4",
        "userName": "Ethan Singh",
        "rating": 4,
        "title": "Quality surprised me",
        "comment": "The product feels premium and matches the description perfectly.",
        "images": [],
        "createdAt": "2026-02-13T10:00:00Z"
      },
      {
        "id": "rev-15-3",
        "productId": "prod-15",
        "userId": "user-5",
        "userName": "Sophia Khan",
        "rating": 3,
        "title": "Great everyday purchase",
        "comment": "Easy to use, nicely packed, and worth the price.",
        "images": [],
        "createdAt": "2026-03-14T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-16",
    "sku": "SE-BEA-0016",
    "name": "Cedar Mist Eau de Parfum",
    "slug": "cedar-mist-eau-de-parfum",
    "categoryId": "cat-beauty",
    "subcategory": "Fragrance",
    "brand": "GlowLab",
    "images": [
      "https://picsum.photos/seed/cedar-mist-eau-de-parfum-main/900/900",
      "https://picsum.photos/seed/cedar-mist-eau-de-parfum-detail/900/900"
    ],
    "price": 47,
    "compareAtPrice": 58.75,
    "discountPercent": 20,
    "stock": 45,
    "rating": 4.4,
    "reviewCount": 29,
    "description": "Cedar Mist Eau de Parfum is a carefully selected beauty item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "GlowLab",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days",
      "Skin Type": "All skin types",
      "Volume": "50 ml"
    },
    "variants": [
      {
        "id": "var-16-1",
        "type": "color",
        "name": "Natural",
        "value": "Natural",
        "stock": 45
      },
      {
        "id": "var-16-2",
        "type": "color",
        "name": "Charcoal",
        "value": "Charcoal",
        "stock": 44
      },
      {
        "id": "var-16-3",
        "type": "color",
        "name": "Cream",
        "value": "Cream",
        "stock": 43
      }
    ],
    "tags": [
      "beauty",
      "fragrance",
      "glowlab"
    ],
    "currency": "USD",
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false,
    "sold": 209,
    "createdAt": "2026-03-12T09:00:00Z",
    "reviews": [
      {
        "id": "rev-16-1",
        "productId": "prod-16",
        "userId": "user-3",
        "userName": "Mia Wilson",
        "rating": 4,
        "title": "Quality surprised me",
        "comment": "The product feels premium and matches the description perfectly.",
        "images": [],
        "createdAt": "2026-01-13T10:00:00Z"
      },
      {
        "id": "rev-16-2",
        "productId": "prod-16",
        "userId": "user-4",
        "userName": "Ethan Singh",
        "rating": 4,
        "title": "Great everyday purchase",
        "comment": "Easy to use, nicely packed, and worth the price.",
        "images": [],
        "createdAt": "2026-02-14T10:00:00Z"
      },
      {
        "id": "rev-16-3",
        "productId": "prod-16",
        "userId": "user-5",
        "userName": "Sophia Khan",
        "rating": 3,
        "title": "Fast delivery",
        "comment": "Arrived earlier than expected and in excellent condition.",
        "images": [],
        "createdAt": "2026-03-15T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-17",
    "sku": "SE-BEA-0017",
    "name": "Daily SPF 50 Gel Cream",
    "slug": "daily-spf-50-gel-cream",
    "categoryId": "cat-beauty",
    "subcategory": "Grooming",
    "brand": "StridePro",
    "images": [
      "https://picsum.photos/seed/daily-spf-50-gel-cream-main/900/900",
      "https://picsum.photos/seed/daily-spf-50-gel-cream-detail/900/900"
    ],
    "price": 58,
    "discountPercent": 0,
    "stock": 4,
    "rating": 4.5,
    "reviewCount": 32,
    "description": "Daily SPF 50 Gel Cream is a carefully selected beauty item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "GlowLab",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days",
      "Skin Type": "All skin types",
      "Volume": "50 ml"
    },
    "variants": [
      {
        "id": "var-17-1",
        "type": "color",
        "name": "Natural",
        "value": "Natural",
        "stock": 4
      },
      {
        "id": "var-17-2",
        "type": "color",
        "name": "Charcoal",
        "value": "Charcoal",
        "stock": 3
      },
      {
        "id": "var-17-3",
        "type": "color",
        "name": "Cream",
        "value": "Cream",
        "stock": 2
      }
    ],
    "tags": [
      "beauty",
      "grooming",
      "glowlab"
    ],
    "currency": "USD",
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": true,
    "sold": 240,
    "createdAt": "2026-03-15T09:00:00Z",
    "reviews": [
      {
        "id": "rev-17-1",
        "productId": "prod-17",
        "userId": "user-3",
        "userName": "Mia Wilson",
        "rating": 4,
        "title": "Great everyday purchase",
        "comment": "Easy to use, nicely packed, and worth the price.",
        "images": [],
        "createdAt": "2026-01-14T10:00:00Z"
      },
      {
        "id": "rev-17-2",
        "productId": "prod-17",
        "userId": "user-4",
        "userName": "Ethan Singh",
        "rating": 4,
        "title": "Fast delivery",
        "comment": "Arrived earlier than expected and in excellent condition.",
        "images": [],
        "createdAt": "2026-02-15T10:00:00Z"
      },
      {
        "id": "rev-17-3",
        "productId": "prod-17",
        "userId": "user-5",
        "userName": "Sophia Khan",
        "rating": 4,
        "title": "Would buy again",
        "comment": "Good value and the color/finish looks even better in person.",
        "images": [],
        "createdAt": "2026-03-16T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-18",
    "sku": "SE-BEA-0018",
    "name": "Charcoal Deep Clean Face Wash",
    "slug": "charcoal-deep-clean-face-wash",
    "categoryId": "cat-beauty",
    "subcategory": "Skincare",
    "brand": "TimeCraft",
    "images": [
      "https://picsum.photos/seed/charcoal-deep-clean-face-wash-main/900/900",
      "https://picsum.photos/seed/charcoal-deep-clean-face-wash-detail/900/900"
    ],
    "price": 69,
    "compareAtPrice": 72.63,
    "discountPercent": 5,
    "stock": 12,
    "rating": 4.6,
    "reviewCount": 35,
    "description": "Charcoal Deep Clean Face Wash is a carefully selected beauty item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "GlowLab",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days",
      "Skin Type": "All skin types",
      "Volume": "50 ml"
    },
    "variants": [
      {
        "id": "var-18-1",
        "type": "color",
        "name": "Natural",
        "value": "Natural",
        "stock": 12
      },
      {
        "id": "var-18-2",
        "type": "color",
        "name": "Charcoal",
        "value": "Charcoal",
        "stock": 11
      },
      {
        "id": "var-18-3",
        "type": "color",
        "name": "Cream",
        "value": "Cream",
        "stock": 10
      }
    ],
    "tags": [
      "beauty",
      "skincare",
      "glowlab"
    ],
    "currency": "USD",
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false,
    "sold": 271,
    "createdAt": "2026-03-18T09:00:00Z",
    "reviews": [
      {
        "id": "rev-18-1",
        "productId": "prod-18",
        "userId": "user-3",
        "userName": "Mia Wilson",
        "rating": 5,
        "title": "Fast delivery",
        "comment": "Arrived earlier than expected and in excellent condition.",
        "images": [],
        "createdAt": "2026-01-15T10:00:00Z"
      },
      {
        "id": "rev-18-2",
        "productId": "prod-18",
        "userId": "user-4",
        "userName": "Ethan Singh",
        "rating": 5,
        "title": "Would buy again",
        "comment": "Good value and the color/finish looks even better in person.",
        "images": [],
        "createdAt": "2026-02-16T10:00:00Z"
      },
      {
        "id": "rev-18-3",
        "productId": "prod-18",
        "userId": "user-5",
        "userName": "Sophia Khan",
        "rating": 5,
        "title": "Solid choice",
        "comment": "Works well for daily use and has a clean modern design.",
        "images": [],
        "createdAt": "2026-03-17T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-19",
    "sku": "SE-HOM-0019",
    "name": "Stoneware Dinner Plate Set",
    "slug": "stoneware-dinner-plate-set",
    "categoryId": "cat-home",
    "subcategory": "Kitchen",
    "brand": "CasaNest",
    "images": [
      "https://picsum.photos/seed/stoneware-dinner-plate-set-main/900/900",
      "https://picsum.photos/seed/stoneware-dinner-plate-set-detail/900/900"
    ],
    "price": 40,
    "compareAtPrice": 45.45,
    "discountPercent": 12,
    "stock": 7,
    "rating": 4.2,
    "reviewCount": 24,
    "description": "Stoneware Dinner Plate Set is a carefully selected home & living item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "CasaNest",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days",
      "Material": "Premium mixed materials",
      "Care": "Wipe clean"
    },
    "variants": [
      {
        "id": "var-19-1",
        "type": "color",
        "name": "Natural",
        "value": "Natural",
        "stock": 7
      },
      {
        "id": "var-19-2",
        "type": "color",
        "name": "Charcoal",
        "value": "Charcoal",
        "stock": 6
      },
      {
        "id": "var-19-3",
        "type": "color",
        "name": "Cream",
        "value": "Cream",
        "stock": 5
      }
    ],
    "tags": [
      "home & living",
      "kitchen",
      "casanest"
    ],
    "currency": "USD",
    "isFeatured": true,
    "isBestSeller": false,
    "isNewArrival": false,
    "sold": 139,
    "createdAt": "2026-04-03T09:00:00Z",
    "reviews": [
      {
        "id": "rev-19-1",
        "productId": "prod-19",
        "userId": "user-4",
        "userName": "Ethan Singh",
        "rating": 4,
        "title": "Would buy again",
        "comment": "Good value and the color/finish looks even better in person.",
        "images": [],
        "createdAt": "2026-01-10T10:00:00Z"
      },
      {
        "id": "rev-19-2",
        "productId": "prod-19",
        "userId": "user-5",
        "userName": "Sophia Khan",
        "rating": 4,
        "title": "Solid choice",
        "comment": "Works well for daily use and has a clean modern design.",
        "images": [],
        "createdAt": "2026-02-11T10:00:00Z"
      },
      {
        "id": "rev-19-3",
        "productId": "prod-19",
        "userId": "user-6",
        "userName": "Leo Martinez",
        "rating": 3,
        "title": "Quality surprised me",
        "comment": "The product feels premium and matches the description perfectly.",
        "images": [],
        "createdAt": "2026-03-12T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-20",
    "sku": "SE-HOM-0020",
    "name": "Bamboo Drawer Organizer",
    "slug": "bamboo-drawer-organizer",
    "categoryId": "cat-home",
    "subcategory": "Decor",
    "brand": "CasaNest",
    "images": [
      "https://picsum.photos/seed/bamboo-drawer-organizer-main/900/900",
      "https://picsum.photos/seed/bamboo-drawer-organizer-detail/900/900"
    ],
    "price": 51,
    "compareAtPrice": 60.0,
    "discountPercent": 15,
    "stock": 0,
    "rating": 4.3,
    "reviewCount": 27,
    "description": "Bamboo Drawer Organizer is a carefully selected home & living item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "CasaNest",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days",
      "Material": "Premium mixed materials",
      "Care": "Wipe clean"
    },
    "variants": [
      {
        "id": "var-20-1",
        "type": "color",
        "name": "Natural",
        "value": "Natural",
        "stock": 0
      },
      {
        "id": "var-20-2",
        "type": "color",
        "name": "Charcoal",
        "value": "Charcoal",
        "stock": 0
      },
      {
        "id": "var-20-3",
        "type": "color",
        "name": "Cream",
        "value": "Cream",
        "stock": 0
      }
    ],
    "tags": [
      "home & living",
      "decor",
      "casanest"
    ],
    "currency": "USD",
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": true,
    "sold": 170,
    "createdAt": "2026-04-06T09:00:00Z",
    "reviews": [
      {
        "id": "rev-20-1",
        "productId": "prod-20",
        "userId": "user-4",
        "userName": "Ethan Singh",
        "rating": 4,
        "title": "Solid choice",
        "comment": "Works well for daily use and has a clean modern design.",
        "images": [],
        "createdAt": "2026-01-11T10:00:00Z"
      },
      {
        "id": "rev-20-2",
        "productId": "prod-20",
        "userId": "user-5",
        "userName": "Sophia Khan",
        "rating": 4,
        "title": "Quality surprised me",
        "comment": "The product feels premium and matches the description perfectly.",
        "images": [],
        "createdAt": "2026-02-12T10:00:00Z"
      },
      {
        "id": "rev-20-3",
        "productId": "prod-20",
        "userId": "user-6",
        "userName": "Leo Martinez",
        "rating": 3,
        "title": "Great everyday purchase",
        "comment": "Easy to use, nicely packed, and worth the price.",
        "images": [],
        "createdAt": "2026-03-13T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-21",
    "sku": "SE-HOM-0021",
    "name": "CloudSoft Cotton Bedsheet",
    "slug": "cloudsoft-cotton-bedsheet",
    "categoryId": "cat-home",
    "subcategory": "Bedding",
    "brand": "CasaNest",
    "images": [
      "https://picsum.photos/seed/cloudsoft-cotton-bedsheet-main/900/900",
      "https://picsum.photos/seed/cloudsoft-cotton-bedsheet-detail/900/900"
    ],
    "price": 62,
    "compareAtPrice": 77.5,
    "discountPercent": 20,
    "stock": 45,
    "rating": 4.4,
    "reviewCount": 30,
    "description": "CloudSoft Cotton Bedsheet is a carefully selected home & living item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "CasaNest",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days",
      "Material": "Premium mixed materials",
      "Care": "Wipe clean"
    },
    "variants": [
      {
        "id": "var-21-1",
        "type": "color",
        "name": "Natural",
        "value": "Natural",
        "stock": 45
      },
      {
        "id": "var-21-2",
        "type": "color",
        "name": "Charcoal",
        "value": "Charcoal",
        "stock": 44
      },
      {
        "id": "var-21-3",
        "type": "color",
        "name": "Cream",
        "value": "Cream",
        "stock": 43
      }
    ],
    "tags": [
      "home & living",
      "bedding",
      "casanest"
    ],
    "currency": "USD",
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false,
    "sold": 201,
    "createdAt": "2026-04-09T09:00:00Z",
    "reviews": [
      {
        "id": "rev-21-1",
        "productId": "prod-21",
        "userId": "user-4",
        "userName": "Ethan Singh",
        "rating": 4,
        "title": "Quality surprised me",
        "comment": "The product feels premium and matches the description perfectly.",
        "images": [],
        "createdAt": "2026-01-12T10:00:00Z"
      },
      {
        "id": "rev-21-2",
        "productId": "prod-21",
        "userId": "user-5",
        "userName": "Sophia Khan",
        "rating": 4,
        "title": "Great everyday purchase",
        "comment": "Easy to use, nicely packed, and worth the price.",
        "images": [],
        "createdAt": "2026-02-13T10:00:00Z"
      },
      {
        "id": "rev-21-3",
        "productId": "prod-21",
        "userId": "user-6",
        "userName": "Leo Martinez",
        "rating": 3,
        "title": "Fast delivery",
        "comment": "Arrived earlier than expected and in excellent condition.",
        "images": [],
        "createdAt": "2026-03-14T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-22",
    "sku": "SE-HOM-0022",
    "name": "Aurora Desk Lamp",
    "slug": "aurora-desk-lamp",
    "categoryId": "cat-home",
    "subcategory": "Lighting",
    "brand": "CasaNest",
    "images": [
      "https://picsum.photos/seed/aurora-desk-lamp-main/900/900",
      "https://picsum.photos/seed/aurora-desk-lamp-detail/900/900"
    ],
    "price": 61,
    "discountPercent": 0,
    "stock": 4,
    "rating": 4.5,
    "reviewCount": 33,
    "description": "Aurora Desk Lamp is a carefully selected home & living item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "CasaNest",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days",
      "Material": "Premium mixed materials",
      "Care": "Wipe clean"
    },
    "variants": [
      {
        "id": "var-22-1",
        "type": "color",
        "name": "Natural",
        "value": "Natural",
        "stock": 4
      },
      {
        "id": "var-22-2",
        "type": "color",
        "name": "Charcoal",
        "value": "Charcoal",
        "stock": 3
      },
      {
        "id": "var-22-3",
        "type": "color",
        "name": "Cream",
        "value": "Cream",
        "stock": 2
      }
    ],
    "tags": [
      "home & living",
      "lighting",
      "casanest"
    ],
    "currency": "USD",
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false,
    "sold": 232,
    "createdAt": "2026-04-12T09:00:00Z",
    "reviews": [
      {
        "id": "rev-22-1",
        "productId": "prod-22",
        "userId": "user-4",
        "userName": "Ethan Singh",
        "rating": 4,
        "title": "Great everyday purchase",
        "comment": "Easy to use, nicely packed, and worth the price.",
        "images": [],
        "createdAt": "2026-01-13T10:00:00Z"
      },
      {
        "id": "rev-22-2",
        "productId": "prod-22",
        "userId": "user-5",
        "userName": "Sophia Khan",
        "rating": 4,
        "title": "Fast delivery",
        "comment": "Arrived earlier than expected and in excellent condition.",
        "images": [],
        "createdAt": "2026-02-14T10:00:00Z"
      },
      {
        "id": "rev-22-3",
        "productId": "prod-22",
        "userId": "user-6",
        "userName": "Leo Martinez",
        "rating": 4,
        "title": "Would buy again",
        "comment": "Good value and the color/finish looks even better in person.",
        "images": [],
        "createdAt": "2026-03-15T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-23",
    "sku": "SE-HOM-0023",
    "name": "Scented Soy Candle Trio",
    "slug": "scented-soy-candle-trio",
    "categoryId": "cat-home",
    "subcategory": "Storage",
    "brand": "TimeCraft",
    "images": [
      "https://picsum.photos/seed/scented-soy-candle-trio-main/900/900",
      "https://picsum.photos/seed/scented-soy-candle-trio-detail/900/900"
    ],
    "price": 72,
    "compareAtPrice": 75.79,
    "discountPercent": 5,
    "stock": 12,
    "rating": 4.6,
    "reviewCount": 36,
    "description": "Scented Soy Candle Trio is a carefully selected home & living item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "CasaNest",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days",
      "Material": "Premium mixed materials",
      "Care": "Wipe clean"
    },
    "variants": [
      {
        "id": "var-23-1",
        "type": "color",
        "name": "Natural",
        "value": "Natural",
        "stock": 12
      },
      {
        "id": "var-23-2",
        "type": "color",
        "name": "Charcoal",
        "value": "Charcoal",
        "stock": 11
      },
      {
        "id": "var-23-3",
        "type": "color",
        "name": "Cream",
        "value": "Cream",
        "stock": 10
      }
    ],
    "tags": [
      "home & living",
      "storage",
      "casanest"
    ],
    "currency": "USD",
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": true,
    "sold": 263,
    "createdAt": "2026-04-15T09:00:00Z",
    "reviews": [
      {
        "id": "rev-23-1",
        "productId": "prod-23",
        "userId": "user-4",
        "userName": "Ethan Singh",
        "rating": 5,
        "title": "Fast delivery",
        "comment": "Arrived earlier than expected and in excellent condition.",
        "images": [],
        "createdAt": "2026-01-14T10:00:00Z"
      },
      {
        "id": "rev-23-2",
        "productId": "prod-23",
        "userId": "user-5",
        "userName": "Sophia Khan",
        "rating": 5,
        "title": "Would buy again",
        "comment": "Good value and the color/finish looks even better in person.",
        "images": [],
        "createdAt": "2026-02-15T10:00:00Z"
      },
      {
        "id": "rev-23-3",
        "productId": "prod-23",
        "userId": "user-6",
        "userName": "Leo Martinez",
        "rating": 5,
        "title": "Solid choice",
        "comment": "Works well for daily use and has a clean modern design.",
        "images": [],
        "createdAt": "2026-03-16T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-24",
    "sku": "SE-HOM-0024",
    "name": "Compact Air Fryer Basket",
    "slug": "compact-air-fryer-basket",
    "categoryId": "cat-home",
    "subcategory": "Kitchen",
    "brand": "TrailPack",
    "images": [
      "https://picsum.photos/seed/compact-air-fryer-basket-main/900/900",
      "https://picsum.photos/seed/compact-air-fryer-basket-detail/900/900"
    ],
    "price": 83,
    "compareAtPrice": 92.22,
    "discountPercent": 10,
    "stock": 30,
    "rating": 4.7,
    "reviewCount": 39,
    "description": "Compact Air Fryer Basket is a carefully selected home & living item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "CasaNest",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days",
      "Material": "Premium mixed materials",
      "Care": "Wipe clean"
    },
    "variants": [
      {
        "id": "var-24-1",
        "type": "color",
        "name": "Natural",
        "value": "Natural",
        "stock": 30
      },
      {
        "id": "var-24-2",
        "type": "color",
        "name": "Charcoal",
        "value": "Charcoal",
        "stock": 29
      },
      {
        "id": "var-24-3",
        "type": "color",
        "name": "Cream",
        "value": "Cream",
        "stock": 28
      }
    ],
    "tags": [
      "home & living",
      "kitchen",
      "casanest"
    ],
    "currency": "USD",
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false,
    "sold": 294,
    "createdAt": "2026-04-18T09:00:00Z",
    "reviews": [
      {
        "id": "rev-24-1",
        "productId": "prod-24",
        "userId": "user-4",
        "userName": "Ethan Singh",
        "rating": 5,
        "title": "Would buy again",
        "comment": "Good value and the color/finish looks even better in person.",
        "images": [],
        "createdAt": "2026-01-15T10:00:00Z"
      },
      {
        "id": "rev-24-2",
        "productId": "prod-24",
        "userId": "user-5",
        "userName": "Sophia Khan",
        "rating": 5,
        "title": "Solid choice",
        "comment": "Works well for daily use and has a clean modern design.",
        "images": [],
        "createdAt": "2026-02-16T10:00:00Z"
      },
      {
        "id": "rev-24-3",
        "productId": "prod-24",
        "userId": "user-6",
        "userName": "Leo Martinez",
        "rating": 5,
        "title": "Quality surprised me",
        "comment": "The product feels premium and matches the description perfectly.",
        "images": [],
        "createdAt": "2026-03-17T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-25",
    "sku": "SE-SPO-0025",
    "name": "CoreFlex Yoga Mat",
    "slug": "coreflex-yoga-mat",
    "categoryId": "cat-sports",
    "subcategory": "Fitness",
    "brand": "PulseFit",
    "images": [
      "https://picsum.photos/seed/coreflex-yoga-mat-main/900/900",
      "https://picsum.photos/seed/coreflex-yoga-mat-detail/900/900"
    ],
    "price": 34,
    "compareAtPrice": 40.0,
    "discountPercent": 15,
    "stock": 0,
    "rating": 4.3,
    "reviewCount": 28,
    "description": "CoreFlex Yoga Mat is a carefully selected sports item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "PulseFit",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days"
    },
    "variants": [
      {
        "id": "var-25-1",
        "type": "color",
        "name": "Natural",
        "value": "Natural",
        "stock": 0
      },
      {
        "id": "var-25-2",
        "type": "color",
        "name": "Charcoal",
        "value": "Charcoal",
        "stock": 0
      },
      {
        "id": "var-25-3",
        "type": "color",
        "name": "Cream",
        "value": "Cream",
        "stock": 0
      }
    ],
    "tags": [
      "sports",
      "fitness",
      "pulsefit"
    ],
    "currency": "USD",
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false,
    "sold": 162,
    "createdAt": "2026-05-03T09:00:00Z",
    "reviews": [
      {
        "id": "rev-25-1",
        "productId": "prod-25",
        "userId": "user-5",
        "userName": "Sophia Khan",
        "rating": 4,
        "title": "Solid choice",
        "comment": "Works well for daily use and has a clean modern design.",
        "images": [],
        "createdAt": "2026-01-10T10:00:00Z"
      },
      {
        "id": "rev-25-2",
        "productId": "prod-25",
        "userId": "user-6",
        "userName": "Leo Martinez",
        "rating": 4,
        "title": "Quality surprised me",
        "comment": "The product feels premium and matches the description perfectly.",
        "images": [],
        "createdAt": "2026-02-11T10:00:00Z"
      },
      {
        "id": "rev-25-3",
        "productId": "prod-25",
        "userId": "user-7",
        "userName": "Emma Johnson",
        "rating": 3,
        "title": "Great everyday purchase",
        "comment": "Easy to use, nicely packed, and worth the price.",
        "images": [],
        "createdAt": "2026-03-12T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-26",
    "sku": "SE-SPO-0026",
    "name": "HydroSteel Sports Bottle",
    "slug": "hydrosteel-sports-bottle",
    "categoryId": "cat-sports",
    "subcategory": "Outdoor",
    "brand": "PulseFit",
    "images": [
      "https://picsum.photos/seed/hydrosteel-sports-bottle-main/900/900",
      "https://picsum.photos/seed/hydrosteel-sports-bottle-detail/900/900"
    ],
    "price": 45,
    "compareAtPrice": 56.25,
    "discountPercent": 20,
    "stock": 45,
    "rating": 4.4,
    "reviewCount": 31,
    "description": "HydroSteel Sports Bottle is a carefully selected sports item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "PulseFit",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days"
    },
    "variants": [
      {
        "id": "var-26-1",
        "type": "color",
        "name": "Natural",
        "value": "Natural",
        "stock": 45
      },
      {
        "id": "var-26-2",
        "type": "color",
        "name": "Charcoal",
        "value": "Charcoal",
        "stock": 44
      },
      {
        "id": "var-26-3",
        "type": "color",
        "name": "Cream",
        "value": "Cream",
        "stock": 43
      }
    ],
    "tags": [
      "sports",
      "outdoor",
      "pulsefit"
    ],
    "currency": "USD",
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": true,
    "sold": 193,
    "createdAt": "2026-05-06T09:00:00Z",
    "reviews": [
      {
        "id": "rev-26-1",
        "productId": "prod-26",
        "userId": "user-5",
        "userName": "Sophia Khan",
        "rating": 4,
        "title": "Quality surprised me",
        "comment": "The product feels premium and matches the description perfectly.",
        "images": [],
        "createdAt": "2026-01-11T10:00:00Z"
      },
      {
        "id": "rev-26-2",
        "productId": "prod-26",
        "userId": "user-6",
        "userName": "Leo Martinez",
        "rating": 4,
        "title": "Great everyday purchase",
        "comment": "Easy to use, nicely packed, and worth the price.",
        "images": [],
        "createdAt": "2026-02-12T10:00:00Z"
      },
      {
        "id": "rev-26-3",
        "productId": "prod-26",
        "userId": "user-7",
        "userName": "Emma Johnson",
        "rating": 3,
        "title": "Fast delivery",
        "comment": "Arrived earlier than expected and in excellent condition.",
        "images": [],
        "createdAt": "2026-03-13T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-27",
    "sku": "SE-SPO-0027",
    "name": "Adjustable Resistance Bands",
    "slug": "adjustable-resistance-bands",
    "categoryId": "cat-sports",
    "subcategory": "Cycling",
    "brand": "PulseFit",
    "images": [
      "https://picsum.photos/seed/adjustable-resistance-bands-main/900/900",
      "https://picsum.photos/seed/adjustable-resistance-bands-detail/900/900"
    ],
    "price": 56,
    "discountPercent": 0,
    "stock": 4,
    "rating": 4.5,
    "reviewCount": 34,
    "description": "Adjustable Resistance Bands is a carefully selected sports item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "PulseFit",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days"
    },
    "variants": [
      {
        "id": "var-27-1",
        "type": "color",
        "name": "Natural",
        "value": "Natural",
        "stock": 4
      },
      {
        "id": "var-27-2",
        "type": "color",
        "name": "Charcoal",
        "value": "Charcoal",
        "stock": 3
      },
      {
        "id": "var-27-3",
        "type": "color",
        "name": "Cream",
        "value": "Cream",
        "stock": 2
      }
    ],
    "tags": [
      "sports",
      "cycling",
      "pulsefit"
    ],
    "currency": "USD",
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false,
    "sold": 224,
    "createdAt": "2026-05-09T09:00:00Z",
    "reviews": [
      {
        "id": "rev-27-1",
        "productId": "prod-27",
        "userId": "user-5",
        "userName": "Sophia Khan",
        "rating": 4,
        "title": "Great everyday purchase",
        "comment": "Easy to use, nicely packed, and worth the price.",
        "images": [],
        "createdAt": "2026-01-12T10:00:00Z"
      },
      {
        "id": "rev-27-2",
        "productId": "prod-27",
        "userId": "user-6",
        "userName": "Leo Martinez",
        "rating": 4,
        "title": "Fast delivery",
        "comment": "Arrived earlier than expected and in excellent condition.",
        "images": [],
        "createdAt": "2026-02-13T10:00:00Z"
      },
      {
        "id": "rev-27-3",
        "productId": "prod-27",
        "userId": "user-7",
        "userName": "Emma Johnson",
        "rating": 4,
        "title": "Would buy again",
        "comment": "Good value and the color/finish looks even better in person.",
        "images": [],
        "createdAt": "2026-03-14T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-28",
    "sku": "SE-SPO-0028",
    "name": "TrailRun Waist Pack",
    "slug": "trailrun-waist-pack",
    "categoryId": "cat-sports",
    "subcategory": "Yoga",
    "brand": "PulseFit",
    "images": [
      "https://picsum.photos/seed/trailrun-waist-pack-main/900/900",
      "https://picsum.photos/seed/trailrun-waist-pack-detail/900/900"
    ],
    "price": 55,
    "compareAtPrice": 57.89,
    "discountPercent": 5,
    "stock": 12,
    "rating": 4.6,
    "reviewCount": 37,
    "description": "TrailRun Waist Pack is a carefully selected sports item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "PulseFit",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days"
    },
    "variants": [
      {
        "id": "var-28-1",
        "type": "color",
        "name": "Natural",
        "value": "Natural",
        "stock": 12
      },
      {
        "id": "var-28-2",
        "type": "color",
        "name": "Charcoal",
        "value": "Charcoal",
        "stock": 11
      },
      {
        "id": "var-28-3",
        "type": "color",
        "name": "Cream",
        "value": "Cream",
        "stock": 10
      }
    ],
    "tags": [
      "sports",
      "yoga",
      "pulsefit"
    ],
    "currency": "USD",
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false,
    "sold": 255,
    "createdAt": "2026-05-12T09:00:00Z",
    "reviews": [
      {
        "id": "rev-28-1",
        "productId": "prod-28",
        "userId": "user-5",
        "userName": "Sophia Khan",
        "rating": 5,
        "title": "Fast delivery",
        "comment": "Arrived earlier than expected and in excellent condition.",
        "images": [],
        "createdAt": "2026-01-13T10:00:00Z"
      },
      {
        "id": "rev-28-2",
        "productId": "prod-28",
        "userId": "user-6",
        "userName": "Leo Martinez",
        "rating": 5,
        "title": "Would buy again",
        "comment": "Good value and the color/finish looks even better in person.",
        "images": [],
        "createdAt": "2026-02-14T10:00:00Z"
      },
      {
        "id": "rev-28-3",
        "productId": "prod-28",
        "userId": "user-7",
        "userName": "Emma Johnson",
        "rating": 5,
        "title": "Solid choice",
        "comment": "Works well for daily use and has a clean modern design.",
        "images": [],
        "createdAt": "2026-03-15T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-29",
    "sku": "SE-SPO-0029",
    "name": "Foam Recovery Roller",
    "slug": "foam-recovery-roller",
    "categoryId": "cat-sports",
    "subcategory": "Recovery",
    "brand": "TrailPack",
    "images": [
      "https://picsum.photos/seed/foam-recovery-roller-main/900/900",
      "https://picsum.photos/seed/foam-recovery-roller-detail/900/900"
    ],
    "price": 66,
    "compareAtPrice": 73.33,
    "discountPercent": 10,
    "stock": 30,
    "rating": 4.7,
    "reviewCount": 40,
    "description": "Foam Recovery Roller is a carefully selected sports item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "PulseFit",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days"
    },
    "variants": [
      {
        "id": "var-29-1",
        "type": "color",
        "name": "Natural",
        "value": "Natural",
        "stock": 30
      },
      {
        "id": "var-29-2",
        "type": "color",
        "name": "Charcoal",
        "value": "Charcoal",
        "stock": 29
      },
      {
        "id": "var-29-3",
        "type": "color",
        "name": "Cream",
        "value": "Cream",
        "stock": 28
      }
    ],
    "tags": [
      "sports",
      "recovery",
      "pulsefit"
    ],
    "currency": "USD",
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": true,
    "sold": 286,
    "createdAt": "2026-05-15T09:00:00Z",
    "reviews": [
      {
        "id": "rev-29-1",
        "productId": "prod-29",
        "userId": "user-5",
        "userName": "Sophia Khan",
        "rating": 5,
        "title": "Would buy again",
        "comment": "Good value and the color/finish looks even better in person.",
        "images": [],
        "createdAt": "2026-01-14T10:00:00Z"
      },
      {
        "id": "rev-29-2",
        "productId": "prod-29",
        "userId": "user-6",
        "userName": "Leo Martinez",
        "rating": 5,
        "title": "Solid choice",
        "comment": "Works well for daily use and has a clean modern design.",
        "images": [],
        "createdAt": "2026-02-15T10:00:00Z"
      },
      {
        "id": "rev-29-3",
        "productId": "prod-29",
        "userId": "user-7",
        "userName": "Emma Johnson",
        "rating": 5,
        "title": "Quality surprised me",
        "comment": "The product feels premium and matches the description perfectly.",
        "images": [],
        "createdAt": "2026-03-16T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-30",
    "sku": "SE-SPO-0030",
    "name": "GripPro Training Gloves",
    "slug": "grippro-training-gloves",
    "categoryId": "cat-sports",
    "subcategory": "Fitness",
    "brand": "TinyTales",
    "images": [
      "https://picsum.photos/seed/grippro-training-gloves-main/900/900",
      "https://picsum.photos/seed/grippro-training-gloves-detail/900/900"
    ],
    "price": 77,
    "compareAtPrice": 87.5,
    "discountPercent": 12,
    "stock": 7,
    "rating": 4.8,
    "reviewCount": 43,
    "description": "GripPro Training Gloves is a carefully selected sports item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "PulseFit",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days"
    },
    "variants": [
      {
        "id": "var-30-1",
        "type": "color",
        "name": "Natural",
        "value": "Natural",
        "stock": 7
      },
      {
        "id": "var-30-2",
        "type": "color",
        "name": "Charcoal",
        "value": "Charcoal",
        "stock": 6
      },
      {
        "id": "var-30-3",
        "type": "color",
        "name": "Cream",
        "value": "Cream",
        "stock": 5
      }
    ],
    "tags": [
      "sports",
      "fitness",
      "pulsefit"
    ],
    "currency": "USD",
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false,
    "sold": 317,
    "createdAt": "2026-05-18T09:00:00Z",
    "reviews": [
      {
        "id": "rev-30-1",
        "productId": "prod-30",
        "userId": "user-5",
        "userName": "Sophia Khan",
        "rating": 5,
        "title": "Solid choice",
        "comment": "Works well for daily use and has a clean modern design.",
        "images": [],
        "createdAt": "2026-01-15T10:00:00Z"
      },
      {
        "id": "rev-30-2",
        "productId": "prod-30",
        "userId": "user-6",
        "userName": "Leo Martinez",
        "rating": 5,
        "title": "Quality surprised me",
        "comment": "The product feels premium and matches the description perfectly.",
        "images": [],
        "createdAt": "2026-02-16T10:00:00Z"
      },
      {
        "id": "rev-30-3",
        "productId": "prod-30",
        "userId": "user-7",
        "userName": "Emma Johnson",
        "rating": 5,
        "title": "Great everyday purchase",
        "comment": "Easy to use, nicely packed, and worth the price.",
        "images": [],
        "createdAt": "2026-03-17T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-31",
    "sku": "SE-GRO-0031",
    "name": "Organic Almond Butter",
    "slug": "organic-almond-butter",
    "categoryId": "cat-groceries",
    "subcategory": "Snacks",
    "brand": "DailyHarvest",
    "images": [
      "https://picsum.photos/seed/organic-almond-butter-main/900/900",
      "https://picsum.photos/seed/organic-almond-butter-detail/900/900"
    ],
    "price": 18,
    "compareAtPrice": 22.5,
    "discountPercent": 20,
    "stock": 45,
    "rating": 4.4,
    "reviewCount": 32,
    "description": "Organic Almond Butter is a carefully selected groceries item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "DailyHarvest",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days",
      "Diet": "Vegetarian friendly",
      "Shelf Life": "9 months"
    },
    "variants": [
      {
        "id": "var-31-1",
        "type": "pack",
        "name": "Single",
        "value": "Single",
        "stock": 45
      },
      {
        "id": "var-31-2",
        "type": "pack",
        "name": "Pack of 3",
        "value": "Pack of 3",
        "stock": 42
      },
      {
        "id": "var-31-3",
        "type": "pack",
        "name": "Family Pack",
        "value": "Family Pack",
        "stock": 39
      }
    ],
    "tags": [
      "groceries",
      "snacks",
      "dailyharvest"
    ],
    "currency": "USD",
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false,
    "sold": 185,
    "createdAt": "2026-01-03T09:00:00Z",
    "reviews": [
      {
        "id": "rev-31-1",
        "productId": "prod-31",
        "userId": "user-6",
        "userName": "Leo Martinez",
        "rating": 4,
        "title": "Quality surprised me",
        "comment": "The product feels premium and matches the description perfectly.",
        "images": [],
        "createdAt": "2026-01-10T10:00:00Z"
      },
      {
        "id": "rev-31-2",
        "productId": "prod-31",
        "userId": "user-7",
        "userName": "Emma Johnson",
        "rating": 4,
        "title": "Great everyday purchase",
        "comment": "Easy to use, nicely packed, and worth the price.",
        "images": [],
        "createdAt": "2026-02-11T10:00:00Z"
      },
      {
        "id": "rev-31-3",
        "productId": "prod-31",
        "userId": "user-8",
        "userName": "Oliver Stone",
        "rating": 3,
        "title": "Fast delivery",
        "comment": "Arrived earlier than expected and in excellent condition.",
        "images": [],
        "createdAt": "2026-03-12T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-32",
    "sku": "SE-GRO-0032",
    "name": "Cold Brew Coffee Pack",
    "slug": "cold-brew-coffee-pack",
    "categoryId": "cat-groceries",
    "subcategory": "Beverages",
    "brand": "DailyHarvest",
    "images": [
      "https://picsum.photos/seed/cold-brew-coffee-pack-main/900/900",
      "https://picsum.photos/seed/cold-brew-coffee-pack-detail/900/900"
    ],
    "price": 29,
    "discountPercent": 0,
    "stock": 4,
    "rating": 4.5,
    "reviewCount": 35,
    "description": "Cold Brew Coffee Pack is a carefully selected groceries item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "DailyHarvest",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days",
      "Diet": "Vegetarian friendly",
      "Shelf Life": "9 months"
    },
    "variants": [
      {
        "id": "var-32-1",
        "type": "pack",
        "name": "Single",
        "value": "Single",
        "stock": 4
      },
      {
        "id": "var-32-2",
        "type": "pack",
        "name": "Pack of 3",
        "value": "Pack of 3",
        "stock": 1
      },
      {
        "id": "var-32-3",
        "type": "pack",
        "name": "Family Pack",
        "value": "Family Pack",
        "stock": 0
      }
    ],
    "tags": [
      "groceries",
      "beverages",
      "dailyharvest"
    ],
    "currency": "USD",
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": true,
    "sold": 216,
    "createdAt": "2026-01-06T09:00:00Z",
    "reviews": [
      {
        "id": "rev-32-1",
        "productId": "prod-32",
        "userId": "user-6",
        "userName": "Leo Martinez",
        "rating": 4,
        "title": "Great everyday purchase",
        "comment": "Easy to use, nicely packed, and worth the price.",
        "images": [],
        "createdAt": "2026-01-11T10:00:00Z"
      },
      {
        "id": "rev-32-2",
        "productId": "prod-32",
        "userId": "user-7",
        "userName": "Emma Johnson",
        "rating": 4,
        "title": "Fast delivery",
        "comment": "Arrived earlier than expected and in excellent condition.",
        "images": [],
        "createdAt": "2026-02-12T10:00:00Z"
      },
      {
        "id": "rev-32-3",
        "productId": "prod-32",
        "userId": "user-8",
        "userName": "Oliver Stone",
        "rating": 4,
        "title": "Would buy again",
        "comment": "Good value and the color/finish looks even better in person.",
        "images": [],
        "createdAt": "2026-03-13T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-33",
    "sku": "SE-GRO-0033",
    "name": "Protein Granola Clusters",
    "slug": "protein-granola-clusters",
    "categoryId": "cat-groceries",
    "subcategory": "Organic",
    "brand": "DailyHarvest",
    "images": [
      "https://picsum.photos/seed/protein-granola-clusters-main/900/900",
      "https://picsum.photos/seed/protein-granola-clusters-detail/900/900"
    ],
    "price": 40,
    "compareAtPrice": 42.11,
    "discountPercent": 5,
    "stock": 12,
    "rating": 4.6,
    "reviewCount": 38,
    "description": "Protein Granola Clusters is a carefully selected groceries item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "DailyHarvest",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days",
      "Diet": "Vegetarian friendly",
      "Shelf Life": "9 months"
    },
    "variants": [
      {
        "id": "var-33-1",
        "type": "pack",
        "name": "Single",
        "value": "Single",
        "stock": 12
      },
      {
        "id": "var-33-2",
        "type": "pack",
        "name": "Pack of 3",
        "value": "Pack of 3",
        "stock": 9
      },
      {
        "id": "var-33-3",
        "type": "pack",
        "name": "Family Pack",
        "value": "Family Pack",
        "stock": 6
      }
    ],
    "tags": [
      "groceries",
      "organic",
      "dailyharvest"
    ],
    "currency": "USD",
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false,
    "sold": 247,
    "createdAt": "2026-01-09T09:00:00Z",
    "reviews": [
      {
        "id": "rev-33-1",
        "productId": "prod-33",
        "userId": "user-6",
        "userName": "Leo Martinez",
        "rating": 5,
        "title": "Fast delivery",
        "comment": "Arrived earlier than expected and in excellent condition.",
        "images": [],
        "createdAt": "2026-01-12T10:00:00Z"
      },
      {
        "id": "rev-33-2",
        "productId": "prod-33",
        "userId": "user-7",
        "userName": "Emma Johnson",
        "rating": 5,
        "title": "Would buy again",
        "comment": "Good value and the color/finish looks even better in person.",
        "images": [],
        "createdAt": "2026-02-13T10:00:00Z"
      },
      {
        "id": "rev-33-3",
        "productId": "prod-33",
        "userId": "user-8",
        "userName": "Oliver Stone",
        "rating": 5,
        "title": "Solid choice",
        "comment": "Works well for daily use and has a clean modern design.",
        "images": [],
        "createdAt": "2026-03-14T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-34",
    "sku": "SE-GRO-0034",
    "name": "Mediterranean Olive Oil",
    "slug": "mediterranean-olive-oil",
    "categoryId": "cat-groceries",
    "subcategory": "Pantry",
    "brand": "DailyHarvest",
    "images": [
      "https://picsum.photos/seed/mediterranean-olive-oil-main/900/900",
      "https://picsum.photos/seed/mediterranean-olive-oil-detail/900/900"
    ],
    "price": 39,
    "compareAtPrice": 43.33,
    "discountPercent": 10,
    "stock": 30,
    "rating": 4.7,
    "reviewCount": 41,
    "description": "Mediterranean Olive Oil is a carefully selected groceries item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "DailyHarvest",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days",
      "Diet": "Vegetarian friendly",
      "Shelf Life": "9 months"
    },
    "variants": [
      {
        "id": "var-34-1",
        "type": "pack",
        "name": "Single",
        "value": "Single",
        "stock": 30
      },
      {
        "id": "var-34-2",
        "type": "pack",
        "name": "Pack of 3",
        "value": "Pack of 3",
        "stock": 27
      },
      {
        "id": "var-34-3",
        "type": "pack",
        "name": "Family Pack",
        "value": "Family Pack",
        "stock": 24
      }
    ],
    "tags": [
      "groceries",
      "pantry",
      "dailyharvest"
    ],
    "currency": "USD",
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false,
    "sold": 278,
    "createdAt": "2026-01-12T09:00:00Z",
    "reviews": [
      {
        "id": "rev-34-1",
        "productId": "prod-34",
        "userId": "user-6",
        "userName": "Leo Martinez",
        "rating": 5,
        "title": "Would buy again",
        "comment": "Good value and the color/finish looks even better in person.",
        "images": [],
        "createdAt": "2026-01-13T10:00:00Z"
      },
      {
        "id": "rev-34-2",
        "productId": "prod-34",
        "userId": "user-7",
        "userName": "Emma Johnson",
        "rating": 5,
        "title": "Solid choice",
        "comment": "Works well for daily use and has a clean modern design.",
        "images": [],
        "createdAt": "2026-02-14T10:00:00Z"
      },
      {
        "id": "rev-34-3",
        "productId": "prod-34",
        "userId": "user-8",
        "userName": "Oliver Stone",
        "rating": 5,
        "title": "Quality surprised me",
        "comment": "The product feels premium and matches the description perfectly.",
        "images": [],
        "createdAt": "2026-03-15T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-35",
    "sku": "SE-GRO-0035",
    "name": "Honey Oat Breakfast Bars",
    "slug": "honey-oat-breakfast-bars",
    "categoryId": "cat-groceries",
    "subcategory": "Breakfast",
    "brand": "TinyTales",
    "images": [
      "https://picsum.photos/seed/honey-oat-breakfast-bars-main/900/900",
      "https://picsum.photos/seed/honey-oat-breakfast-bars-detail/900/900"
    ],
    "price": 50,
    "compareAtPrice": 56.82,
    "discountPercent": 12,
    "stock": 7,
    "rating": 4.8,
    "reviewCount": 44,
    "description": "Honey Oat Breakfast Bars is a carefully selected groceries item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "DailyHarvest",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days",
      "Diet": "Vegetarian friendly",
      "Shelf Life": "9 months"
    },
    "variants": [
      {
        "id": "var-35-1",
        "type": "pack",
        "name": "Single",
        "value": "Single",
        "stock": 7
      },
      {
        "id": "var-35-2",
        "type": "pack",
        "name": "Pack of 3",
        "value": "Pack of 3",
        "stock": 4
      },
      {
        "id": "var-35-3",
        "type": "pack",
        "name": "Family Pack",
        "value": "Family Pack",
        "stock": 1
      }
    ],
    "tags": [
      "groceries",
      "breakfast",
      "dailyharvest"
    ],
    "currency": "USD",
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": true,
    "sold": 309,
    "createdAt": "2026-01-15T09:00:00Z",
    "reviews": [
      {
        "id": "rev-35-1",
        "productId": "prod-35",
        "userId": "user-6",
        "userName": "Leo Martinez",
        "rating": 5,
        "title": "Solid choice",
        "comment": "Works well for daily use and has a clean modern design.",
        "images": [],
        "createdAt": "2026-01-14T10:00:00Z"
      },
      {
        "id": "rev-35-2",
        "productId": "prod-35",
        "userId": "user-7",
        "userName": "Emma Johnson",
        "rating": 5,
        "title": "Quality surprised me",
        "comment": "The product feels premium and matches the description perfectly.",
        "images": [],
        "createdAt": "2026-02-15T10:00:00Z"
      },
      {
        "id": "rev-35-3",
        "productId": "prod-35",
        "userId": "user-8",
        "userName": "Oliver Stone",
        "rating": 5,
        "title": "Great everyday purchase",
        "comment": "Easy to use, nicely packed, and worth the price.",
        "images": [],
        "createdAt": "2026-03-16T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-36",
    "sku": "SE-GRO-0036",
    "name": "Sparkling Citrus Water",
    "slug": "sparkling-citrus-water",
    "categoryId": "cat-groceries",
    "subcategory": "Snacks",
    "brand": "Urban Loom",
    "images": [
      "https://picsum.photos/seed/sparkling-citrus-water-main/900/900",
      "https://picsum.photos/seed/sparkling-citrus-water-detail/900/900"
    ],
    "price": 61,
    "compareAtPrice": 71.76,
    "discountPercent": 15,
    "stock": 0,
    "rating": 3.9,
    "reviewCount": 47,
    "description": "Sparkling Citrus Water is a carefully selected groceries item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "DailyHarvest",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days",
      "Diet": "Vegetarian friendly",
      "Shelf Life": "9 months"
    },
    "variants": [
      {
        "id": "var-36-1",
        "type": "pack",
        "name": "Single",
        "value": "Single",
        "stock": 0
      },
      {
        "id": "var-36-2",
        "type": "pack",
        "name": "Pack of 3",
        "value": "Pack of 3",
        "stock": 0
      },
      {
        "id": "var-36-3",
        "type": "pack",
        "name": "Family Pack",
        "value": "Family Pack",
        "stock": 0
      }
    ],
    "tags": [
      "groceries",
      "snacks",
      "dailyharvest"
    ],
    "currency": "USD",
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false,
    "sold": 340,
    "createdAt": "2026-01-18T09:00:00Z",
    "reviews": [
      {
        "id": "rev-36-1",
        "productId": "prod-36",
        "userId": "user-6",
        "userName": "Leo Martinez",
        "rating": 4,
        "title": "Quality surprised me",
        "comment": "The product feels premium and matches the description perfectly.",
        "images": [],
        "createdAt": "2026-01-15T10:00:00Z"
      },
      {
        "id": "rev-36-2",
        "productId": "prod-36",
        "userId": "user-7",
        "userName": "Emma Johnson",
        "rating": 4,
        "title": "Great everyday purchase",
        "comment": "Easy to use, nicely packed, and worth the price.",
        "images": [],
        "createdAt": "2026-02-16T10:00:00Z"
      },
      {
        "id": "rev-36-3",
        "productId": "prod-36",
        "userId": "user-8",
        "userName": "Oliver Stone",
        "rating": 3,
        "title": "Fast delivery",
        "comment": "Arrived earlier than expected and in excellent condition.",
        "images": [],
        "createdAt": "2026-03-17T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-37",
    "sku": "SE-FOO-0037",
    "name": "Velocity Knit Sneakers",
    "slug": "velocity-knit-sneakers",
    "categoryId": "cat-footwear",
    "subcategory": "Sneakers",
    "brand": "StridePro",
    "images": [
      "https://picsum.photos/seed/velocity-knit-sneakers-main/900/900",
      "https://picsum.photos/seed/velocity-knit-sneakers-detail/900/900"
    ],
    "price": 66,
    "discountPercent": 0,
    "stock": 4,
    "rating": 4.5,
    "reviewCount": 36,
    "description": "Velocity Knit Sneakers is a carefully selected footwear item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "StridePro",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days"
    },
    "variants": [
      {
        "id": "var-37-1",
        "type": "size",
        "name": "Size 7",
        "value": "7",
        "stock": 4
      },
      {
        "id": "var-37-2",
        "type": "size",
        "name": "Size 8",
        "value": "8",
        "stock": 3
      },
      {
        "id": "var-37-3",
        "type": "size",
        "name": "Size 9",
        "value": "9",
        "stock": 2
      },
      {
        "id": "var-37-4",
        "type": "size",
        "name": "Size 10",
        "value": "10",
        "stock": 1
      }
    ],
    "tags": [
      "footwear",
      "sneakers",
      "stridepro"
    ],
    "currency": "USD",
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false,
    "sold": 208,
    "createdAt": "2026-02-03T09:00:00Z",
    "reviews": [
      {
        "id": "rev-37-1",
        "productId": "prod-37",
        "userId": "user-7",
        "userName": "Emma Johnson",
        "rating": 4,
        "title": "Great everyday purchase",
        "comment": "Easy to use, nicely packed, and worth the price.",
        "images": [],
        "createdAt": "2026-01-10T10:00:00Z"
      },
      {
        "id": "rev-37-2",
        "productId": "prod-37",
        "userId": "user-8",
        "userName": "Oliver Stone",
        "rating": 4,
        "title": "Fast delivery",
        "comment": "Arrived earlier than expected and in excellent condition.",
        "images": [],
        "createdAt": "2026-02-11T10:00:00Z"
      },
      {
        "id": "rev-37-3",
        "productId": "prod-37",
        "userId": "user-9",
        "userName": "Isla Reed",
        "rating": 4,
        "title": "Would buy again",
        "comment": "Good value and the color/finish looks even better in person.",
        "images": [],
        "createdAt": "2026-03-12T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-38",
    "sku": "SE-FOO-0038",
    "name": "UrbanWalk Leather Loafers",
    "slug": "urbanwalk-leather-loafers",
    "categoryId": "cat-footwear",
    "subcategory": "Formal",
    "brand": "StridePro",
    "images": [
      "https://picsum.photos/seed/urbanwalk-leather-loafers-main/900/900",
      "https://picsum.photos/seed/urbanwalk-leather-loafers-detail/900/900"
    ],
    "price": 77,
    "compareAtPrice": 81.05,
    "discountPercent": 5,
    "stock": 12,
    "rating": 4.6,
    "reviewCount": 39,
    "description": "UrbanWalk Leather Loafers is a carefully selected footwear item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "StridePro",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days"
    },
    "variants": [
      {
        "id": "var-38-1",
        "type": "size",
        "name": "Size 7",
        "value": "7",
        "stock": 12
      },
      {
        "id": "var-38-2",
        "type": "size",
        "name": "Size 8",
        "value": "8",
        "stock": 11
      },
      {
        "id": "var-38-3",
        "type": "size",
        "name": "Size 9",
        "value": "9",
        "stock": 10
      },
      {
        "id": "var-38-4",
        "type": "size",
        "name": "Size 10",
        "value": "10",
        "stock": 9
      }
    ],
    "tags": [
      "footwear",
      "formal",
      "stridepro"
    ],
    "currency": "USD",
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": true,
    "sold": 239,
    "createdAt": "2026-02-06T09:00:00Z",
    "reviews": [
      {
        "id": "rev-38-1",
        "productId": "prod-38",
        "userId": "user-7",
        "userName": "Emma Johnson",
        "rating": 5,
        "title": "Fast delivery",
        "comment": "Arrived earlier than expected and in excellent condition.",
        "images": [],
        "createdAt": "2026-01-11T10:00:00Z"
      },
      {
        "id": "rev-38-2",
        "productId": "prod-38",
        "userId": "user-8",
        "userName": "Oliver Stone",
        "rating": 5,
        "title": "Would buy again",
        "comment": "Good value and the color/finish looks even better in person.",
        "images": [],
        "createdAt": "2026-02-12T10:00:00Z"
      },
      {
        "id": "rev-38-3",
        "productId": "prod-38",
        "userId": "user-9",
        "userName": "Isla Reed",
        "rating": 5,
        "title": "Solid choice",
        "comment": "Works well for daily use and has a clean modern design.",
        "images": [],
        "createdAt": "2026-03-13T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-39",
    "sku": "SE-FOO-0039",
    "name": "CloudStep Running Shoes",
    "slug": "cloudstep-running-shoes",
    "categoryId": "cat-footwear",
    "subcategory": "Sandals",
    "brand": "StridePro",
    "images": [
      "https://picsum.photos/seed/cloudstep-running-shoes-main/900/900",
      "https://picsum.photos/seed/cloudstep-running-shoes-detail/900/900"
    ],
    "price": 88,
    "compareAtPrice": 97.78,
    "discountPercent": 10,
    "stock": 30,
    "rating": 4.7,
    "reviewCount": 42,
    "description": "CloudStep Running Shoes is a carefully selected footwear item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "StridePro",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days"
    },
    "variants": [
      {
        "id": "var-39-1",
        "type": "size",
        "name": "Size 7",
        "value": "7",
        "stock": 30
      },
      {
        "id": "var-39-2",
        "type": "size",
        "name": "Size 8",
        "value": "8",
        "stock": 29
      },
      {
        "id": "var-39-3",
        "type": "size",
        "name": "Size 9",
        "value": "9",
        "stock": 28
      },
      {
        "id": "var-39-4",
        "type": "size",
        "name": "Size 10",
        "value": "10",
        "stock": 27
      }
    ],
    "tags": [
      "footwear",
      "sandals",
      "stridepro"
    ],
    "currency": "USD",
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false,
    "sold": 270,
    "createdAt": "2026-02-09T09:00:00Z",
    "reviews": [
      {
        "id": "rev-39-1",
        "productId": "prod-39",
        "userId": "user-7",
        "userName": "Emma Johnson",
        "rating": 5,
        "title": "Would buy again",
        "comment": "Good value and the color/finish looks even better in person.",
        "images": [],
        "createdAt": "2026-01-12T10:00:00Z"
      },
      {
        "id": "rev-39-2",
        "productId": "prod-39",
        "userId": "user-8",
        "userName": "Oliver Stone",
        "rating": 5,
        "title": "Solid choice",
        "comment": "Works well for daily use and has a clean modern design.",
        "images": [],
        "createdAt": "2026-02-13T10:00:00Z"
      },
      {
        "id": "rev-39-3",
        "productId": "prod-39",
        "userId": "user-9",
        "userName": "Isla Reed",
        "rating": 5,
        "title": "Quality surprised me",
        "comment": "The product feels premium and matches the description perfectly.",
        "images": [],
        "createdAt": "2026-03-14T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-40",
    "sku": "SE-FOO-0040",
    "name": "Summit Trekking Boots",
    "slug": "summit-trekking-boots",
    "categoryId": "cat-footwear",
    "subcategory": "Running",
    "brand": "StridePro",
    "images": [
      "https://picsum.photos/seed/summit-trekking-boots-main/900/900",
      "https://picsum.photos/seed/summit-trekking-boots-detail/900/900"
    ],
    "price": 87,
    "compareAtPrice": 98.86,
    "discountPercent": 12,
    "stock": 7,
    "rating": 4.8,
    "reviewCount": 45,
    "description": "Summit Trekking Boots is a carefully selected footwear item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "StridePro",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days"
    },
    "variants": [
      {
        "id": "var-40-1",
        "type": "size",
        "name": "Size 7",
        "value": "7",
        "stock": 7
      },
      {
        "id": "var-40-2",
        "type": "size",
        "name": "Size 8",
        "value": "8",
        "stock": 6
      },
      {
        "id": "var-40-3",
        "type": "size",
        "name": "Size 9",
        "value": "9",
        "stock": 5
      },
      {
        "id": "var-40-4",
        "type": "size",
        "name": "Size 10",
        "value": "10",
        "stock": 4
      }
    ],
    "tags": [
      "footwear",
      "running",
      "stridepro"
    ],
    "currency": "USD",
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false,
    "sold": 301,
    "createdAt": "2026-02-12T09:00:00Z",
    "reviews": [
      {
        "id": "rev-40-1",
        "productId": "prod-40",
        "userId": "user-7",
        "userName": "Emma Johnson",
        "rating": 5,
        "title": "Solid choice",
        "comment": "Works well for daily use and has a clean modern design.",
        "images": [],
        "createdAt": "2026-01-13T10:00:00Z"
      },
      {
        "id": "rev-40-2",
        "productId": "prod-40",
        "userId": "user-8",
        "userName": "Oliver Stone",
        "rating": 5,
        "title": "Quality surprised me",
        "comment": "The product feels premium and matches the description perfectly.",
        "images": [],
        "createdAt": "2026-02-14T10:00:00Z"
      },
      {
        "id": "rev-40-3",
        "productId": "prod-40",
        "userId": "user-9",
        "userName": "Isla Reed",
        "rating": 5,
        "title": "Great everyday purchase",
        "comment": "Easy to use, nicely packed, and worth the price.",
        "images": [],
        "createdAt": "2026-03-15T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-41",
    "sku": "SE-FOO-0041",
    "name": "Breeze Slide Sandals",
    "slug": "breeze-slide-sandals",
    "categoryId": "cat-footwear",
    "subcategory": "Boots",
    "brand": "Urban Loom",
    "images": [
      "https://picsum.photos/seed/breeze-slide-sandals-main/900/900",
      "https://picsum.photos/seed/breeze-slide-sandals-detail/900/900"
    ],
    "price": 98,
    "compareAtPrice": 115.29,
    "discountPercent": 15,
    "stock": 0,
    "rating": 3.9,
    "reviewCount": 48,
    "description": "Breeze Slide Sandals is a carefully selected footwear item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "StridePro",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days"
    },
    "variants": [
      {
        "id": "var-41-1",
        "type": "size",
        "name": "Size 7",
        "value": "7",
        "stock": 0
      },
      {
        "id": "var-41-2",
        "type": "size",
        "name": "Size 8",
        "value": "8",
        "stock": 0
      },
      {
        "id": "var-41-3",
        "type": "size",
        "name": "Size 9",
        "value": "9",
        "stock": 0
      },
      {
        "id": "var-41-4",
        "type": "size",
        "name": "Size 10",
        "value": "10",
        "stock": 0
      }
    ],
    "tags": [
      "footwear",
      "boots",
      "stridepro"
    ],
    "currency": "USD",
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": true,
    "sold": 332,
    "createdAt": "2026-02-15T09:00:00Z",
    "reviews": [
      {
        "id": "rev-41-1",
        "productId": "prod-41",
        "userId": "user-7",
        "userName": "Emma Johnson",
        "rating": 4,
        "title": "Quality surprised me",
        "comment": "The product feels premium and matches the description perfectly.",
        "images": [],
        "createdAt": "2026-01-14T10:00:00Z"
      },
      {
        "id": "rev-41-2",
        "productId": "prod-41",
        "userId": "user-8",
        "userName": "Oliver Stone",
        "rating": 4,
        "title": "Great everyday purchase",
        "comment": "Easy to use, nicely packed, and worth the price.",
        "images": [],
        "createdAt": "2026-02-15T10:00:00Z"
      },
      {
        "id": "rev-41-3",
        "productId": "prod-41",
        "userId": "user-9",
        "userName": "Isla Reed",
        "rating": 3,
        "title": "Fast delivery",
        "comment": "Arrived earlier than expected and in excellent condition.",
        "images": [],
        "createdAt": "2026-03-16T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-42",
    "sku": "SE-FOO-0042",
    "name": "CourtClassic White Sneakers",
    "slug": "courtclassic-white-sneakers",
    "categoryId": "cat-footwear",
    "subcategory": "Sneakers",
    "brand": "NovaTech",
    "images": [
      "https://picsum.photos/seed/courtclassic-white-sneakers-main/900/900",
      "https://picsum.photos/seed/courtclassic-white-sneakers-detail/900/900"
    ],
    "price": 109,
    "compareAtPrice": 136.25,
    "discountPercent": 20,
    "stock": 45,
    "rating": 4.0,
    "reviewCount": 51,
    "description": "CourtClassic White Sneakers is a carefully selected footwear item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "StridePro",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days"
    },
    "variants": [
      {
        "id": "var-42-1",
        "type": "size",
        "name": "Size 7",
        "value": "7",
        "stock": 45
      },
      {
        "id": "var-42-2",
        "type": "size",
        "name": "Size 8",
        "value": "8",
        "stock": 44
      },
      {
        "id": "var-42-3",
        "type": "size",
        "name": "Size 9",
        "value": "9",
        "stock": 43
      },
      {
        "id": "var-42-4",
        "type": "size",
        "name": "Size 10",
        "value": "10",
        "stock": 42
      }
    ],
    "tags": [
      "footwear",
      "sneakers",
      "stridepro"
    ],
    "currency": "USD",
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false,
    "sold": 363,
    "createdAt": "2026-02-18T09:00:00Z",
    "reviews": [
      {
        "id": "rev-42-1",
        "productId": "prod-42",
        "userId": "user-7",
        "userName": "Emma Johnson",
        "rating": 4,
        "title": "Great everyday purchase",
        "comment": "Easy to use, nicely packed, and worth the price.",
        "images": [],
        "createdAt": "2026-01-15T10:00:00Z"
      },
      {
        "id": "rev-42-2",
        "productId": "prod-42",
        "userId": "user-8",
        "userName": "Oliver Stone",
        "rating": 4,
        "title": "Fast delivery",
        "comment": "Arrived earlier than expected and in excellent condition.",
        "images": [],
        "createdAt": "2026-02-16T10:00:00Z"
      },
      {
        "id": "rev-42-3",
        "productId": "prod-42",
        "userId": "user-9",
        "userName": "Isla Reed",
        "rating": 3,
        "title": "Would buy again",
        "comment": "Good value and the color/finish looks even better in person.",
        "images": [],
        "createdAt": "2026-03-17T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-43",
    "sku": "SE-WAT-0043",
    "name": "Metro Steel Analog Watch",
    "slug": "metro-steel-analog-watch",
    "categoryId": "cat-watches",
    "subcategory": "Smart Watches",
    "brand": "TimeCraft",
    "images": [
      "https://picsum.photos/seed/metro-steel-analog-watch-main/900/900",
      "https://picsum.photos/seed/metro-steel-analog-watch-detail/900/900"
    ],
    "price": 103,
    "compareAtPrice": 108.42,
    "discountPercent": 5,
    "stock": 12,
    "rating": 4.6,
    "reviewCount": 40,
    "description": "Metro Steel Analog Watch is a carefully selected watches item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "TimeCraft",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days"
    },
    "variants": [
      {
        "id": "var-43-1",
        "type": "color",
        "name": "Leather",
        "value": "Leather",
        "stock": 12
      },
      {
        "id": "var-43-2",
        "type": "color",
        "name": "Steel",
        "value": "Steel",
        "stock": 11
      },
      {
        "id": "var-43-3",
        "type": "color",
        "name": "Silicone",
        "value": "Silicone",
        "stock": 10
      }
    ],
    "tags": [
      "watches",
      "smart watches",
      "timecraft"
    ],
    "currency": "USD",
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false,
    "sold": 231,
    "createdAt": "2026-03-03T09:00:00Z",
    "reviews": [
      {
        "id": "rev-43-1",
        "productId": "prod-43",
        "userId": "user-8",
        "userName": "Oliver Stone",
        "rating": 5,
        "title": "Fast delivery",
        "comment": "Arrived earlier than expected and in excellent condition.",
        "images": [],
        "createdAt": "2026-01-10T10:00:00Z"
      },
      {
        "id": "rev-43-2",
        "productId": "prod-43",
        "userId": "user-9",
        "userName": "Isla Reed",
        "rating": 5,
        "title": "Would buy again",
        "comment": "Good value and the color/finish looks even better in person.",
        "images": [],
        "createdAt": "2026-02-11T10:00:00Z"
      },
      {
        "id": "rev-43-3",
        "productId": "prod-43",
        "userId": "user-10",
        "userName": "Liam Patel",
        "rating": 5,
        "title": "Solid choice",
        "comment": "Works well for daily use and has a clean modern design.",
        "images": [],
        "createdAt": "2026-03-12T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-44",
    "sku": "SE-WAT-0044",
    "name": "ActiveTrack Smart Watch",
    "slug": "activetrack-smart-watch",
    "categoryId": "cat-watches",
    "subcategory": "Luxury",
    "brand": "TimeCraft",
    "images": [
      "https://picsum.photos/seed/activetrack-smart-watch-main/900/900",
      "https://picsum.photos/seed/activetrack-smart-watch-detail/900/900"
    ],
    "price": 114,
    "compareAtPrice": 126.67,
    "discountPercent": 10,
    "stock": 30,
    "rating": 4.7,
    "reviewCount": 43,
    "description": "ActiveTrack Smart Watch is a carefully selected watches item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "TimeCraft",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days"
    },
    "variants": [
      {
        "id": "var-44-1",
        "type": "color",
        "name": "Leather",
        "value": "Leather",
        "stock": 30
      },
      {
        "id": "var-44-2",
        "type": "color",
        "name": "Steel",
        "value": "Steel",
        "stock": 29
      },
      {
        "id": "var-44-3",
        "type": "color",
        "name": "Silicone",
        "value": "Silicone",
        "stock": 28
      }
    ],
    "tags": [
      "watches",
      "luxury",
      "timecraft"
    ],
    "currency": "USD",
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": true,
    "sold": 262,
    "createdAt": "2026-03-06T09:00:00Z",
    "reviews": [
      {
        "id": "rev-44-1",
        "productId": "prod-44",
        "userId": "user-8",
        "userName": "Oliver Stone",
        "rating": 5,
        "title": "Would buy again",
        "comment": "Good value and the color/finish looks even better in person.",
        "images": [],
        "createdAt": "2026-01-11T10:00:00Z"
      },
      {
        "id": "rev-44-2",
        "productId": "prod-44",
        "userId": "user-9",
        "userName": "Isla Reed",
        "rating": 5,
        "title": "Solid choice",
        "comment": "Works well for daily use and has a clean modern design.",
        "images": [],
        "createdAt": "2026-02-12T10:00:00Z"
      },
      {
        "id": "rev-44-3",
        "productId": "prod-44",
        "userId": "user-10",
        "userName": "Liam Patel",
        "rating": 5,
        "title": "Quality surprised me",
        "comment": "The product feels premium and matches the description perfectly.",
        "images": [],
        "createdAt": "2026-03-13T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-45",
    "sku": "SE-WAT-0045",
    "name": "Heritage Leather Watch",
    "slug": "heritage-leather-watch",
    "categoryId": "cat-watches",
    "subcategory": "Casual",
    "brand": "TimeCraft",
    "images": [
      "https://picsum.photos/seed/heritage-leather-watch-main/900/900",
      "https://picsum.photos/seed/heritage-leather-watch-detail/900/900"
    ],
    "price": 125,
    "compareAtPrice": 142.05,
    "discountPercent": 12,
    "stock": 7,
    "rating": 4.8,
    "reviewCount": 46,
    "description": "Heritage Leather Watch is a carefully selected watches item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "TimeCraft",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days"
    },
    "variants": [
      {
        "id": "var-45-1",
        "type": "color",
        "name": "Leather",
        "value": "Leather",
        "stock": 7
      },
      {
        "id": "var-45-2",
        "type": "color",
        "name": "Steel",
        "value": "Steel",
        "stock": 6
      },
      {
        "id": "var-45-3",
        "type": "color",
        "name": "Silicone",
        "value": "Silicone",
        "stock": 5
      }
    ],
    "tags": [
      "watches",
      "casual",
      "timecraft"
    ],
    "currency": "USD",
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false,
    "sold": 293,
    "createdAt": "2026-03-09T09:00:00Z",
    "reviews": [
      {
        "id": "rev-45-1",
        "productId": "prod-45",
        "userId": "user-8",
        "userName": "Oliver Stone",
        "rating": 5,
        "title": "Solid choice",
        "comment": "Works well for daily use and has a clean modern design.",
        "images": [],
        "createdAt": "2026-01-12T10:00:00Z"
      },
      {
        "id": "rev-45-2",
        "productId": "prod-45",
        "userId": "user-9",
        "userName": "Isla Reed",
        "rating": 5,
        "title": "Quality surprised me",
        "comment": "The product feels premium and matches the description perfectly.",
        "images": [],
        "createdAt": "2026-02-13T10:00:00Z"
      },
      {
        "id": "rev-45-3",
        "productId": "prod-45",
        "userId": "user-10",
        "userName": "Liam Patel",
        "rating": 5,
        "title": "Great everyday purchase",
        "comment": "Easy to use, nicely packed, and worth the price.",
        "images": [],
        "createdAt": "2026-03-14T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-46",
    "sku": "SE-WAT-0046",
    "name": "AquaGuard Sports Watch",
    "slug": "aquaguard-sports-watch",
    "categoryId": "cat-watches",
    "subcategory": "Sports",
    "brand": "TimeCraft",
    "images": [
      "https://picsum.photos/seed/aquaguard-sports-watch-main/900/900",
      "https://picsum.photos/seed/aquaguard-sports-watch-detail/900/900"
    ],
    "price": 124,
    "compareAtPrice": 145.88,
    "discountPercent": 15,
    "stock": 0,
    "rating": 3.9,
    "reviewCount": 49,
    "description": "AquaGuard Sports Watch is a carefully selected watches item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "TimeCraft",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days"
    },
    "variants": [
      {
        "id": "var-46-1",
        "type": "color",
        "name": "Leather",
        "value": "Leather",
        "stock": 0
      },
      {
        "id": "var-46-2",
        "type": "color",
        "name": "Steel",
        "value": "Steel",
        "stock": 0
      },
      {
        "id": "var-46-3",
        "type": "color",
        "name": "Silicone",
        "value": "Silicone",
        "stock": 0
      }
    ],
    "tags": [
      "watches",
      "sports",
      "timecraft"
    ],
    "currency": "USD",
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false,
    "sold": 324,
    "createdAt": "2026-03-12T09:00:00Z",
    "reviews": [
      {
        "id": "rev-46-1",
        "productId": "prod-46",
        "userId": "user-8",
        "userName": "Oliver Stone",
        "rating": 4,
        "title": "Quality surprised me",
        "comment": "The product feels premium and matches the description perfectly.",
        "images": [],
        "createdAt": "2026-01-13T10:00:00Z"
      },
      {
        "id": "rev-46-2",
        "productId": "prod-46",
        "userId": "user-9",
        "userName": "Isla Reed",
        "rating": 4,
        "title": "Great everyday purchase",
        "comment": "Easy to use, nicely packed, and worth the price.",
        "images": [],
        "createdAt": "2026-02-14T10:00:00Z"
      },
      {
        "id": "rev-46-3",
        "productId": "prod-46",
        "userId": "user-10",
        "userName": "Liam Patel",
        "rating": 3,
        "title": "Fast delivery",
        "comment": "Arrived earlier than expected and in excellent condition.",
        "images": [],
        "createdAt": "2026-03-15T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-47",
    "sku": "SE-WAT-0047",
    "name": "Minimal Rose Gold Watch",
    "slug": "minimal-rose-gold-watch",
    "categoryId": "cat-watches",
    "subcategory": "Analog",
    "brand": "NovaTech",
    "images": [
      "https://picsum.photos/seed/minimal-rose-gold-watch-main/900/900",
      "https://picsum.photos/seed/minimal-rose-gold-watch-detail/900/900"
    ],
    "price": 135,
    "compareAtPrice": 168.75,
    "discountPercent": 20,
    "stock": 45,
    "rating": 4.0,
    "reviewCount": 52,
    "description": "Minimal Rose Gold Watch is a carefully selected watches item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "TimeCraft",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days"
    },
    "variants": [
      {
        "id": "var-47-1",
        "type": "color",
        "name": "Leather",
        "value": "Leather",
        "stock": 45
      },
      {
        "id": "var-47-2",
        "type": "color",
        "name": "Steel",
        "value": "Steel",
        "stock": 44
      },
      {
        "id": "var-47-3",
        "type": "color",
        "name": "Silicone",
        "value": "Silicone",
        "stock": 43
      }
    ],
    "tags": [
      "watches",
      "analog",
      "timecraft"
    ],
    "currency": "USD",
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": true,
    "sold": 355,
    "createdAt": "2026-03-15T09:00:00Z",
    "reviews": [
      {
        "id": "rev-47-1",
        "productId": "prod-47",
        "userId": "user-8",
        "userName": "Oliver Stone",
        "rating": 4,
        "title": "Great everyday purchase",
        "comment": "Easy to use, nicely packed, and worth the price.",
        "images": [],
        "createdAt": "2026-01-14T10:00:00Z"
      },
      {
        "id": "rev-47-2",
        "productId": "prod-47",
        "userId": "user-9",
        "userName": "Isla Reed",
        "rating": 4,
        "title": "Fast delivery",
        "comment": "Arrived earlier than expected and in excellent condition.",
        "images": [],
        "createdAt": "2026-02-15T10:00:00Z"
      },
      {
        "id": "rev-47-3",
        "productId": "prod-47",
        "userId": "user-10",
        "userName": "Liam Patel",
        "rating": 3,
        "title": "Would buy again",
        "comment": "Good value and the color/finish looks even better in person.",
        "images": [],
        "createdAt": "2026-03-16T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-48",
    "sku": "SE-WAT-0048",
    "name": "Pilot Chronograph Watch",
    "slug": "pilot-chronograph-watch",
    "categoryId": "cat-watches",
    "subcategory": "Smart Watches",
    "brand": "GlowLab",
    "images": [
      "https://picsum.photos/seed/pilot-chronograph-watch-main/900/900",
      "https://picsum.photos/seed/pilot-chronograph-watch-detail/900/900"
    ],
    "price": 146,
    "discountPercent": 0,
    "stock": 4,
    "rating": 4.1,
    "reviewCount": 55,
    "description": "Pilot Chronograph Watch is a carefully selected watches item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "TimeCraft",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days"
    },
    "variants": [
      {
        "id": "var-48-1",
        "type": "color",
        "name": "Leather",
        "value": "Leather",
        "stock": 4
      },
      {
        "id": "var-48-2",
        "type": "color",
        "name": "Steel",
        "value": "Steel",
        "stock": 3
      },
      {
        "id": "var-48-3",
        "type": "color",
        "name": "Silicone",
        "value": "Silicone",
        "stock": 2
      }
    ],
    "tags": [
      "watches",
      "smart watches",
      "timecraft"
    ],
    "currency": "USD",
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false,
    "sold": 386,
    "createdAt": "2026-03-18T09:00:00Z",
    "reviews": [
      {
        "id": "rev-48-1",
        "productId": "prod-48",
        "userId": "user-8",
        "userName": "Oliver Stone",
        "rating": 4,
        "title": "Fast delivery",
        "comment": "Arrived earlier than expected and in excellent condition.",
        "images": [],
        "createdAt": "2026-01-15T10:00:00Z"
      },
      {
        "id": "rev-48-2",
        "productId": "prod-48",
        "userId": "user-9",
        "userName": "Isla Reed",
        "rating": 4,
        "title": "Would buy again",
        "comment": "Good value and the color/finish looks even better in person.",
        "images": [],
        "createdAt": "2026-02-16T10:00:00Z"
      },
      {
        "id": "rev-48-3",
        "productId": "prod-48",
        "userId": "user-10",
        "userName": "Liam Patel",
        "rating": 3,
        "title": "Solid choice",
        "comment": "Works well for daily use and has a clean modern design.",
        "images": [],
        "createdAt": "2026-03-17T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-49",
    "sku": "SE-BAG-0049",
    "name": "Nomad Laptop Backpack",
    "slug": "nomad-laptop-backpack",
    "categoryId": "cat-bags",
    "subcategory": "Backpacks",
    "brand": "TrailPack",
    "images": [
      "https://picsum.photos/seed/nomad-laptop-backpack-main/900/900",
      "https://picsum.photos/seed/nomad-laptop-backpack-detail/900/900"
    ],
    "price": 58,
    "compareAtPrice": 64.44,
    "discountPercent": 10,
    "stock": 30,
    "rating": 4.7,
    "reviewCount": 44,
    "description": "Nomad Laptop Backpack is a carefully selected bags item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "TrailPack",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days"
    },
    "variants": [
      {
        "id": "var-49-1",
        "type": "color",
        "name": "Natural",
        "value": "Natural",
        "stock": 30
      },
      {
        "id": "var-49-2",
        "type": "color",
        "name": "Charcoal",
        "value": "Charcoal",
        "stock": 29
      },
      {
        "id": "var-49-3",
        "type": "color",
        "name": "Cream",
        "value": "Cream",
        "stock": 28
      }
    ],
    "tags": [
      "bags",
      "backpacks",
      "trailpack"
    ],
    "currency": "USD",
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false,
    "sold": 254,
    "createdAt": "2026-04-03T09:00:00Z",
    "reviews": [
      {
        "id": "rev-49-1",
        "productId": "prod-49",
        "userId": "user-9",
        "userName": "Isla Reed",
        "rating": 5,
        "title": "Would buy again",
        "comment": "Good value and the color/finish looks even better in person.",
        "images": [],
        "createdAt": "2026-01-10T10:00:00Z"
      },
      {
        "id": "rev-49-2",
        "productId": "prod-49",
        "userId": "user-10",
        "userName": "Liam Patel",
        "rating": 5,
        "title": "Solid choice",
        "comment": "Works well for daily use and has a clean modern design.",
        "images": [],
        "createdAt": "2026-02-11T10:00:00Z"
      },
      {
        "id": "rev-49-3",
        "productId": "prod-49",
        "userId": "user-1",
        "userName": "Ava Brooks",
        "rating": 5,
        "title": "Quality surprised me",
        "comment": "The product feels premium and matches the description perfectly.",
        "images": [],
        "createdAt": "2026-03-12T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-50",
    "sku": "SE-BAG-0050",
    "name": "Canvas Market Tote",
    "slug": "canvas-market-tote",
    "categoryId": "cat-bags",
    "subcategory": "Totes",
    "brand": "TrailPack",
    "images": [
      "https://picsum.photos/seed/canvas-market-tote-main/900/900",
      "https://picsum.photos/seed/canvas-market-tote-detail/900/900"
    ],
    "price": 69,
    "compareAtPrice": 78.41,
    "discountPercent": 12,
    "stock": 7,
    "rating": 4.8,
    "reviewCount": 47,
    "description": "Canvas Market Tote is a carefully selected bags item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "TrailPack",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days"
    },
    "variants": [
      {
        "id": "var-50-1",
        "type": "color",
        "name": "Natural",
        "value": "Natural",
        "stock": 7
      },
      {
        "id": "var-50-2",
        "type": "color",
        "name": "Charcoal",
        "value": "Charcoal",
        "stock": 6
      },
      {
        "id": "var-50-3",
        "type": "color",
        "name": "Cream",
        "value": "Cream",
        "stock": 5
      }
    ],
    "tags": [
      "bags",
      "totes",
      "trailpack"
    ],
    "currency": "USD",
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": true,
    "sold": 285,
    "createdAt": "2026-04-06T09:00:00Z",
    "reviews": [
      {
        "id": "rev-50-1",
        "productId": "prod-50",
        "userId": "user-9",
        "userName": "Isla Reed",
        "rating": 5,
        "title": "Solid choice",
        "comment": "Works well for daily use and has a clean modern design.",
        "images": [],
        "createdAt": "2026-01-11T10:00:00Z"
      },
      {
        "id": "rev-50-2",
        "productId": "prod-50",
        "userId": "user-10",
        "userName": "Liam Patel",
        "rating": 5,
        "title": "Quality surprised me",
        "comment": "The product feels premium and matches the description perfectly.",
        "images": [],
        "createdAt": "2026-02-12T10:00:00Z"
      },
      {
        "id": "rev-50-3",
        "productId": "prod-50",
        "userId": "user-1",
        "userName": "Ava Brooks",
        "rating": 5,
        "title": "Great everyday purchase",
        "comment": "Easy to use, nicely packed, and worth the price.",
        "images": [],
        "createdAt": "2026-03-13T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-51",
    "sku": "SE-BAG-0051",
    "name": "Voyager Cabin Duffel",
    "slug": "voyager-cabin-duffel",
    "categoryId": "cat-bags",
    "subcategory": "Travel",
    "brand": "TrailPack",
    "images": [
      "https://picsum.photos/seed/voyager-cabin-duffel-main/900/900",
      "https://picsum.photos/seed/voyager-cabin-duffel-detail/900/900"
    ],
    "price": 80,
    "compareAtPrice": 94.12,
    "discountPercent": 15,
    "stock": 0,
    "rating": 3.9,
    "reviewCount": 50,
    "description": "Voyager Cabin Duffel is a carefully selected bags item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "TrailPack",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days"
    },
    "variants": [
      {
        "id": "var-51-1",
        "type": "color",
        "name": "Natural",
        "value": "Natural",
        "stock": 0
      },
      {
        "id": "var-51-2",
        "type": "color",
        "name": "Charcoal",
        "value": "Charcoal",
        "stock": 0
      },
      {
        "id": "var-51-3",
        "type": "color",
        "name": "Cream",
        "value": "Cream",
        "stock": 0
      }
    ],
    "tags": [
      "bags",
      "travel",
      "trailpack"
    ],
    "currency": "USD",
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false,
    "sold": 316,
    "createdAt": "2026-04-09T09:00:00Z",
    "reviews": [
      {
        "id": "rev-51-1",
        "productId": "prod-51",
        "userId": "user-9",
        "userName": "Isla Reed",
        "rating": 4,
        "title": "Quality surprised me",
        "comment": "The product feels premium and matches the description perfectly.",
        "images": [],
        "createdAt": "2026-01-12T10:00:00Z"
      },
      {
        "id": "rev-51-2",
        "productId": "prod-51",
        "userId": "user-10",
        "userName": "Liam Patel",
        "rating": 4,
        "title": "Great everyday purchase",
        "comment": "Easy to use, nicely packed, and worth the price.",
        "images": [],
        "createdAt": "2026-02-13T10:00:00Z"
      },
      {
        "id": "rev-51-3",
        "productId": "prod-51",
        "userId": "user-1",
        "userName": "Ava Brooks",
        "rating": 3,
        "title": "Fast delivery",
        "comment": "Arrived earlier than expected and in excellent condition.",
        "images": [],
        "createdAt": "2026-03-14T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-52",
    "sku": "SE-BAG-0052",
    "name": "Slim RFID Wallet",
    "slug": "slim-rfid-wallet",
    "categoryId": "cat-bags",
    "subcategory": "Laptop Bags",
    "brand": "TrailPack",
    "images": [
      "https://picsum.photos/seed/slim-rfid-wallet-main/900/900",
      "https://picsum.photos/seed/slim-rfid-wallet-detail/900/900"
    ],
    "price": 79,
    "compareAtPrice": 98.75,
    "discountPercent": 20,
    "stock": 45,
    "rating": 4.0,
    "reviewCount": 53,
    "description": "Slim RFID Wallet is a carefully selected bags item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "TrailPack",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days"
    },
    "variants": [
      {
        "id": "var-52-1",
        "type": "color",
        "name": "Natural",
        "value": "Natural",
        "stock": 45
      },
      {
        "id": "var-52-2",
        "type": "color",
        "name": "Charcoal",
        "value": "Charcoal",
        "stock": 44
      },
      {
        "id": "var-52-3",
        "type": "color",
        "name": "Cream",
        "value": "Cream",
        "stock": 43
      }
    ],
    "tags": [
      "bags",
      "laptop bags",
      "trailpack"
    ],
    "currency": "USD",
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false,
    "sold": 347,
    "createdAt": "2026-04-12T09:00:00Z",
    "reviews": [
      {
        "id": "rev-52-1",
        "productId": "prod-52",
        "userId": "user-9",
        "userName": "Isla Reed",
        "rating": 4,
        "title": "Great everyday purchase",
        "comment": "Easy to use, nicely packed, and worth the price.",
        "images": [],
        "createdAt": "2026-01-13T10:00:00Z"
      },
      {
        "id": "rev-52-2",
        "productId": "prod-52",
        "userId": "user-10",
        "userName": "Liam Patel",
        "rating": 4,
        "title": "Fast delivery",
        "comment": "Arrived earlier than expected and in excellent condition.",
        "images": [],
        "createdAt": "2026-02-14T10:00:00Z"
      },
      {
        "id": "rev-52-3",
        "productId": "prod-52",
        "userId": "user-1",
        "userName": "Ava Brooks",
        "rating": 3,
        "title": "Would buy again",
        "comment": "Good value and the color/finish looks even better in person.",
        "images": [],
        "createdAt": "2026-03-15T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-53",
    "sku": "SE-BAG-0053",
    "name": "CityCross Sling Bag",
    "slug": "citycross-sling-bag",
    "categoryId": "cat-bags",
    "subcategory": "Wallets",
    "brand": "GlowLab",
    "images": [
      "https://picsum.photos/seed/citycross-sling-bag-main/900/900",
      "https://picsum.photos/seed/citycross-sling-bag-detail/900/900"
    ],
    "price": 90,
    "discountPercent": 0,
    "stock": 4,
    "rating": 4.1,
    "reviewCount": 56,
    "description": "CityCross Sling Bag is a carefully selected bags item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "TrailPack",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days"
    },
    "variants": [
      {
        "id": "var-53-1",
        "type": "color",
        "name": "Natural",
        "value": "Natural",
        "stock": 4
      },
      {
        "id": "var-53-2",
        "type": "color",
        "name": "Charcoal",
        "value": "Charcoal",
        "stock": 3
      },
      {
        "id": "var-53-3",
        "type": "color",
        "name": "Cream",
        "value": "Cream",
        "stock": 2
      }
    ],
    "tags": [
      "bags",
      "wallets",
      "trailpack"
    ],
    "currency": "USD",
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": true,
    "sold": 378,
    "createdAt": "2026-04-15T09:00:00Z",
    "reviews": [
      {
        "id": "rev-53-1",
        "productId": "prod-53",
        "userId": "user-9",
        "userName": "Isla Reed",
        "rating": 4,
        "title": "Fast delivery",
        "comment": "Arrived earlier than expected and in excellent condition.",
        "images": [],
        "createdAt": "2026-01-14T10:00:00Z"
      },
      {
        "id": "rev-53-2",
        "productId": "prod-53",
        "userId": "user-10",
        "userName": "Liam Patel",
        "rating": 4,
        "title": "Would buy again",
        "comment": "Good value and the color/finish looks even better in person.",
        "images": [],
        "createdAt": "2026-02-15T10:00:00Z"
      },
      {
        "id": "rev-53-3",
        "productId": "prod-53",
        "userId": "user-1",
        "userName": "Ava Brooks",
        "rating": 3,
        "title": "Solid choice",
        "comment": "Works well for daily use and has a clean modern design.",
        "images": [],
        "createdAt": "2026-03-16T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-54",
    "sku": "SE-BAG-0054",
    "name": "Executive Leather Briefcase",
    "slug": "executive-leather-briefcase",
    "categoryId": "cat-bags",
    "subcategory": "Backpacks",
    "brand": "CasaNest",
    "images": [
      "https://picsum.photos/seed/executive-leather-briefcase-main/900/900",
      "https://picsum.photos/seed/executive-leather-briefcase-detail/900/900"
    ],
    "price": 101,
    "compareAtPrice": 106.32,
    "discountPercent": 5,
    "stock": 12,
    "rating": 4.2,
    "reviewCount": 59,
    "description": "Executive Leather Briefcase is a carefully selected bags item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "TrailPack",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days"
    },
    "variants": [
      {
        "id": "var-54-1",
        "type": "color",
        "name": "Natural",
        "value": "Natural",
        "stock": 12
      },
      {
        "id": "var-54-2",
        "type": "color",
        "name": "Charcoal",
        "value": "Charcoal",
        "stock": 11
      },
      {
        "id": "var-54-3",
        "type": "color",
        "name": "Cream",
        "value": "Cream",
        "stock": 10
      }
    ],
    "tags": [
      "bags",
      "backpacks",
      "trailpack"
    ],
    "currency": "USD",
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false,
    "sold": 409,
    "createdAt": "2026-04-18T09:00:00Z",
    "reviews": [
      {
        "id": "rev-54-1",
        "productId": "prod-54",
        "userId": "user-9",
        "userName": "Isla Reed",
        "rating": 4,
        "title": "Would buy again",
        "comment": "Good value and the color/finish looks even better in person.",
        "images": [],
        "createdAt": "2026-01-15T10:00:00Z"
      },
      {
        "id": "rev-54-2",
        "productId": "prod-54",
        "userId": "user-10",
        "userName": "Liam Patel",
        "rating": 4,
        "title": "Solid choice",
        "comment": "Works well for daily use and has a clean modern design.",
        "images": [],
        "createdAt": "2026-02-16T10:00:00Z"
      },
      {
        "id": "rev-54-3",
        "productId": "prod-54",
        "userId": "user-1",
        "userName": "Ava Brooks",
        "rating": 3,
        "title": "Quality surprised me",
        "comment": "The product feels premium and matches the description perfectly.",
        "images": [],
        "createdAt": "2026-03-17T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-55",
    "sku": "SE-KID-0055",
    "name": "STEM Builder Blocks",
    "slug": "stem-builder-blocks",
    "categoryId": "cat-kids",
    "subcategory": "Toys",
    "brand": "TinyTales",
    "images": [
      "https://picsum.photos/seed/stem-builder-blocks-main/900/900",
      "https://picsum.photos/seed/stem-builder-blocks-detail/900/900"
    ],
    "price": 34,
    "compareAtPrice": 38.64,
    "discountPercent": 12,
    "stock": 7,
    "rating": 4.8,
    "reviewCount": 48,
    "description": "STEM Builder Blocks is a carefully selected kids item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "TinyTales",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days"
    },
    "variants": [
      {
        "id": "var-55-1",
        "type": "size",
        "name": "Size S",
        "value": "S",
        "stock": 7
      },
      {
        "id": "var-55-2",
        "type": "size",
        "name": "Size M",
        "value": "M",
        "stock": 6
      },
      {
        "id": "var-55-3",
        "type": "size",
        "name": "Size L",
        "value": "L",
        "stock": 5
      },
      {
        "id": "var-55-4",
        "type": "size",
        "name": "Size XL",
        "value": "XL",
        "stock": 4
      }
    ],
    "tags": [
      "kids",
      "toys",
      "tinytales"
    ],
    "currency": "USD",
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false,
    "sold": 277,
    "createdAt": "2026-05-03T09:00:00Z",
    "reviews": [
      {
        "id": "rev-55-1",
        "productId": "prod-55",
        "userId": "user-10",
        "userName": "Liam Patel",
        "rating": 5,
        "title": "Solid choice",
        "comment": "Works well for daily use and has a clean modern design.",
        "images": [],
        "createdAt": "2026-01-10T10:00:00Z"
      },
      {
        "id": "rev-55-2",
        "productId": "prod-55",
        "userId": "user-1",
        "userName": "Ava Brooks",
        "rating": 5,
        "title": "Quality surprised me",
        "comment": "The product feels premium and matches the description perfectly.",
        "images": [],
        "createdAt": "2026-02-11T10:00:00Z"
      },
      {
        "id": "rev-55-3",
        "productId": "prod-55",
        "userId": "user-2",
        "userName": "Noah Carter",
        "rating": 5,
        "title": "Great everyday purchase",
        "comment": "Easy to use, nicely packed, and worth the price.",
        "images": [],
        "createdAt": "2026-03-12T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-56",
    "sku": "SE-KID-0056",
    "name": "Dino Adventure Hoodie",
    "slug": "dino-adventure-hoodie",
    "categoryId": "cat-kids",
    "subcategory": "Clothing",
    "brand": "TinyTales",
    "images": [
      "https://picsum.photos/seed/dino-adventure-hoodie-main/900/900",
      "https://picsum.photos/seed/dino-adventure-hoodie-detail/900/900"
    ],
    "price": 45,
    "compareAtPrice": 52.94,
    "discountPercent": 15,
    "stock": 0,
    "rating": 3.9,
    "reviewCount": 51,
    "description": "Dino Adventure Hoodie is a carefully selected kids item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "TinyTales",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days"
    },
    "variants": [
      {
        "id": "var-56-1",
        "type": "size",
        "name": "Size S",
        "value": "S",
        "stock": 0
      },
      {
        "id": "var-56-2",
        "type": "size",
        "name": "Size M",
        "value": "M",
        "stock": 0
      },
      {
        "id": "var-56-3",
        "type": "size",
        "name": "Size L",
        "value": "L",
        "stock": 0
      },
      {
        "id": "var-56-4",
        "type": "size",
        "name": "Size XL",
        "value": "XL",
        "stock": 0
      }
    ],
    "tags": [
      "kids",
      "clothing",
      "tinytales"
    ],
    "currency": "USD",
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": true,
    "sold": 308,
    "createdAt": "2026-05-06T09:00:00Z",
    "reviews": [
      {
        "id": "rev-56-1",
        "productId": "prod-56",
        "userId": "user-10",
        "userName": "Liam Patel",
        "rating": 4,
        "title": "Quality surprised me",
        "comment": "The product feels premium and matches the description perfectly.",
        "images": [],
        "createdAt": "2026-01-11T10:00:00Z"
      },
      {
        "id": "rev-56-2",
        "productId": "prod-56",
        "userId": "user-1",
        "userName": "Ava Brooks",
        "rating": 4,
        "title": "Great everyday purchase",
        "comment": "Easy to use, nicely packed, and worth the price.",
        "images": [],
        "createdAt": "2026-02-12T10:00:00Z"
      },
      {
        "id": "rev-56-3",
        "productId": "prod-56",
        "userId": "user-2",
        "userName": "Noah Carter",
        "rating": 3,
        "title": "Fast delivery",
        "comment": "Arrived earlier than expected and in excellent condition.",
        "images": [],
        "createdAt": "2026-03-13T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-57",
    "sku": "SE-KID-0057",
    "name": "Alphabet Learning Cards",
    "slug": "alphabet-learning-cards",
    "categoryId": "cat-kids",
    "subcategory": "Learning",
    "brand": "TinyTales",
    "images": [
      "https://picsum.photos/seed/alphabet-learning-cards-main/900/900",
      "https://picsum.photos/seed/alphabet-learning-cards-detail/900/900"
    ],
    "price": 56,
    "compareAtPrice": 70.0,
    "discountPercent": 20,
    "stock": 45,
    "rating": 4.0,
    "reviewCount": 54,
    "description": "Alphabet Learning Cards is a carefully selected kids item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "TinyTales",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days"
    },
    "variants": [
      {
        "id": "var-57-1",
        "type": "size",
        "name": "Size S",
        "value": "S",
        "stock": 45
      },
      {
        "id": "var-57-2",
        "type": "size",
        "name": "Size M",
        "value": "M",
        "stock": 44
      },
      {
        "id": "var-57-3",
        "type": "size",
        "name": "Size L",
        "value": "L",
        "stock": 43
      },
      {
        "id": "var-57-4",
        "type": "size",
        "name": "Size XL",
        "value": "XL",
        "stock": 42
      }
    ],
    "tags": [
      "kids",
      "learning",
      "tinytales"
    ],
    "currency": "USD",
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false,
    "sold": 339,
    "createdAt": "2026-05-09T09:00:00Z",
    "reviews": [
      {
        "id": "rev-57-1",
        "productId": "prod-57",
        "userId": "user-10",
        "userName": "Liam Patel",
        "rating": 4,
        "title": "Great everyday purchase",
        "comment": "Easy to use, nicely packed, and worth the price.",
        "images": [],
        "createdAt": "2026-01-12T10:00:00Z"
      },
      {
        "id": "rev-57-2",
        "productId": "prod-57",
        "userId": "user-1",
        "userName": "Ava Brooks",
        "rating": 4,
        "title": "Fast delivery",
        "comment": "Arrived earlier than expected and in excellent condition.",
        "images": [],
        "createdAt": "2026-02-13T10:00:00Z"
      },
      {
        "id": "rev-57-3",
        "productId": "prod-57",
        "userId": "user-2",
        "userName": "Noah Carter",
        "rating": 3,
        "title": "Would buy again",
        "comment": "Good value and the color/finish looks even better in person.",
        "images": [],
        "createdAt": "2026-03-14T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-58",
    "sku": "SE-KID-0058",
    "name": "Soft Plush Elephant",
    "slug": "soft-plush-elephant",
    "categoryId": "cat-kids",
    "subcategory": "Baby Care",
    "brand": "TinyTales",
    "images": [
      "https://picsum.photos/seed/soft-plush-elephant-main/900/900",
      "https://picsum.photos/seed/soft-plush-elephant-detail/900/900"
    ],
    "price": 55,
    "discountPercent": 0,
    "stock": 4,
    "rating": 4.1,
    "reviewCount": 57,
    "description": "Soft Plush Elephant is a carefully selected kids item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "TinyTales",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days"
    },
    "variants": [
      {
        "id": "var-58-1",
        "type": "size",
        "name": "Size S",
        "value": "S",
        "stock": 4
      },
      {
        "id": "var-58-2",
        "type": "size",
        "name": "Size M",
        "value": "M",
        "stock": 3
      },
      {
        "id": "var-58-3",
        "type": "size",
        "name": "Size L",
        "value": "L",
        "stock": 2
      },
      {
        "id": "var-58-4",
        "type": "size",
        "name": "Size XL",
        "value": "XL",
        "stock": 1
      }
    ],
    "tags": [
      "kids",
      "baby care",
      "tinytales"
    ],
    "currency": "USD",
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false,
    "sold": 370,
    "createdAt": "2026-05-12T09:00:00Z",
    "reviews": [
      {
        "id": "rev-58-1",
        "productId": "prod-58",
        "userId": "user-10",
        "userName": "Liam Patel",
        "rating": 4,
        "title": "Fast delivery",
        "comment": "Arrived earlier than expected and in excellent condition.",
        "images": [],
        "createdAt": "2026-01-13T10:00:00Z"
      },
      {
        "id": "rev-58-2",
        "productId": "prod-58",
        "userId": "user-1",
        "userName": "Ava Brooks",
        "rating": 4,
        "title": "Would buy again",
        "comment": "Good value and the color/finish looks even better in person.",
        "images": [],
        "createdAt": "2026-02-14T10:00:00Z"
      },
      {
        "id": "rev-58-3",
        "productId": "prod-58",
        "userId": "user-2",
        "userName": "Noah Carter",
        "rating": 3,
        "title": "Solid choice",
        "comment": "Works well for daily use and has a clean modern design.",
        "images": [],
        "createdAt": "2026-03-15T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-59",
    "sku": "SE-KID-0059",
    "name": "Junior Art Kit",
    "slug": "junior-art-kit",
    "categoryId": "cat-kids",
    "subcategory": "School",
    "brand": "CasaNest",
    "images": [
      "https://picsum.photos/seed/junior-art-kit-main/900/900",
      "https://picsum.photos/seed/junior-art-kit-detail/900/900"
    ],
    "price": 66,
    "compareAtPrice": 69.47,
    "discountPercent": 5,
    "stock": 12,
    "rating": 4.2,
    "reviewCount": 60,
    "description": "Junior Art Kit is a carefully selected kids item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "TinyTales",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days"
    },
    "variants": [
      {
        "id": "var-59-1",
        "type": "size",
        "name": "Size S",
        "value": "S",
        "stock": 12
      },
      {
        "id": "var-59-2",
        "type": "size",
        "name": "Size M",
        "value": "M",
        "stock": 11
      },
      {
        "id": "var-59-3",
        "type": "size",
        "name": "Size L",
        "value": "L",
        "stock": 10
      },
      {
        "id": "var-59-4",
        "type": "size",
        "name": "Size XL",
        "value": "XL",
        "stock": 9
      }
    ],
    "tags": [
      "kids",
      "school",
      "tinytales"
    ],
    "currency": "USD",
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": true,
    "sold": 401,
    "createdAt": "2026-05-15T09:00:00Z",
    "reviews": [
      {
        "id": "rev-59-1",
        "productId": "prod-59",
        "userId": "user-10",
        "userName": "Liam Patel",
        "rating": 4,
        "title": "Would buy again",
        "comment": "Good value and the color/finish looks even better in person.",
        "images": [],
        "createdAt": "2026-01-14T10:00:00Z"
      },
      {
        "id": "rev-59-2",
        "productId": "prod-59",
        "userId": "user-1",
        "userName": "Ava Brooks",
        "rating": 4,
        "title": "Solid choice",
        "comment": "Works well for daily use and has a clean modern design.",
        "images": [],
        "createdAt": "2026-02-15T10:00:00Z"
      },
      {
        "id": "rev-59-3",
        "productId": "prod-59",
        "userId": "user-2",
        "userName": "Noah Carter",
        "rating": 3,
        "title": "Quality surprised me",
        "comment": "The product feels premium and matches the description perfectly.",
        "images": [],
        "createdAt": "2026-03-16T10:00:00Z"
      }
    ]
  },
  {
    "id": "prod-60",
    "sku": "SE-KID-0060",
    "name": "School Lunch Bento Box",
    "slug": "school-lunch-bento-box",
    "categoryId": "cat-kids",
    "subcategory": "Toys",
    "brand": "PulseFit",
    "images": [
      "https://picsum.photos/seed/school-lunch-bento-box-main/900/900",
      "https://picsum.photos/seed/school-lunch-bento-box-detail/900/900"
    ],
    "price": 77,
    "compareAtPrice": 85.56,
    "discountPercent": 10,
    "stock": 30,
    "rating": 4.3,
    "reviewCount": 63,
    "description": "School Lunch Bento Box is a carefully selected kids item built for daily use, clean style, and reliable performance. It includes realistic variants, stock tracking, and review data for demo commerce flows.",
    "specifications": {
      "Brand": "TinyTales",
      "Warranty": "12 months",
      "Origin": "Curated global supplier",
      "Return Window": "14 days"
    },
    "variants": [
      {
        "id": "var-60-1",
        "type": "size",
        "name": "Size S",
        "value": "S",
        "stock": 30
      },
      {
        "id": "var-60-2",
        "type": "size",
        "name": "Size M",
        "value": "M",
        "stock": 29
      },
      {
        "id": "var-60-3",
        "type": "size",
        "name": "Size L",
        "value": "L",
        "stock": 28
      },
      {
        "id": "var-60-4",
        "type": "size",
        "name": "Size XL",
        "value": "XL",
        "stock": 27
      }
    ],
    "tags": [
      "kids",
      "toys",
      "tinytales"
    ],
    "currency": "USD",
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false,
    "sold": 432,
    "createdAt": "2026-05-18T09:00:00Z",
    "reviews": [
      {
        "id": "rev-60-1",
        "productId": "prod-60",
        "userId": "user-10",
        "userName": "Liam Patel",
        "rating": 4,
        "title": "Solid choice",
        "comment": "Works well for daily use and has a clean modern design.",
        "images": [],
        "createdAt": "2026-01-15T10:00:00Z"
      },
      {
        "id": "rev-60-2",
        "productId": "prod-60",
        "userId": "user-1",
        "userName": "Ava Brooks",
        "rating": 4,
        "title": "Quality surprised me",
        "comment": "The product feels premium and matches the description perfectly.",
        "images": [],
        "createdAt": "2026-02-16T10:00:00Z"
      },
      {
        "id": "rev-60-3",
        "productId": "prod-60",
        "userId": "user-2",
        "userName": "Noah Carter",
        "rating": 3,
        "title": "Great everyday purchase",
        "comment": "Easy to use, nicely packed, and worth the price.",
        "images": [],
        "createdAt": "2026-03-17T10:00:00Z"
      }
    ]
  }
];

export const getProductById = (id: string) => products.find((product) => product.id === id);

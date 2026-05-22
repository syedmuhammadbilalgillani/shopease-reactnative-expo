import { Product, ProductFilters, ProductSort } from '@/types';
import { mockDelay } from './mockApi';

export const filterProducts = (products: Product[], filters: ProductFilters = {}) => {
  return products.filter((product) => {
    const query = filters.query?.trim().toLowerCase();
    const matchesQuery = !query || [product.name, product.brand, product.subcategory, ...product.tags].join(' ').toLowerCase().includes(query);
    const matchesCategory = !filters.categoryId || product.categoryId === filters.categoryId;
    const matchesBrand = !filters.brand || product.brand === filters.brand;
    const matchesMin = filters.minPrice === undefined || product.price >= filters.minPrice;
    const matchesMax = filters.maxPrice === undefined || product.price <= filters.maxPrice;
    const matchesRating = !filters.minRating || product.rating >= filters.minRating;
    const matchesDiscount = !filters.discountOnly || product.discountPercent > 0;
    const matchesStock = !filters.inStockOnly || product.stock > 0;
    return matchesQuery && matchesCategory && matchesBrand && matchesMin && matchesMax && matchesRating && matchesDiscount && matchesStock;
  });
};

export const sortProducts = (products: Product[], sort: ProductSort = 'newest') => {
  const cloned = [...products];
  switch (sort) {
    case 'price_asc': return cloned.sort((a, b) => a.price - b.price);
    case 'price_desc': return cloned.sort((a, b) => b.price - a.price);
    case 'rating': return cloned.sort((a, b) => b.rating - a.rating);
    case 'best_selling': return cloned.sort((a, b) => b.sold - a.sold);
    case 'newest':
    default: return cloned.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }
};

export const productService = {
  list: (products: Product[], filters?: ProductFilters, sort?: ProductSort) => mockDelay(sortProducts(filterProducts(products, filters), sort)),
  detail: (products: Product[], id: string) => mockDelay(products.find((product) => product.id === id)),
  similar: (products: Product[], product: Product) => mockDelay(products.filter((item) => item.id !== product.id && item.categoryId === product.categoryId).slice(0, 8)),
  recommended: (products: Product[]) => mockDelay(products.filter((product) => product.rating >= 4.4 || product.isBestSeller).slice(0, 12))
};

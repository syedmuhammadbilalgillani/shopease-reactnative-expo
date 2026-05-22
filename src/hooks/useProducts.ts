import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ProductFilters, ProductSort } from '@/types';
import { productService } from '@/services/productService';
import { useCatalogStore } from '@/store/catalogStore';

export const useProducts = (filters?: ProductFilters, sort?: ProductSort) => {
  const products = useCatalogStore((state) => state.products);
  const key = useMemo(() => JSON.stringify({ filters, sort, size: products.length, updated: products.map((p) => `${p.id}:${p.stock}:${p.reviewCount}`).join('|') }), [filters, sort, products]);
  return useQuery({
    queryKey: ['products', key],
    queryFn: () => productService.list(products, filters, sort)
  });
};

export const useProduct = (id?: string) => {
  const products = useCatalogStore((state) => state.products);
  return useQuery({
    queryKey: ['product', id, products.length],
    enabled: Boolean(id),
    queryFn: () => productService.detail(products, id!)
  });
};

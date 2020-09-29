import { useEffect, useState } from 'react';
import { getProducts, IProduct } from '../api/products';

const useGetProducts: (kioskId: string) => IProduct[] = (kioskId) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchedProducts = getProducts(kioskId);
    setProducts(fetchedProducts);
  }, [kioskId]);

  return products;
};

export default useGetProducts;

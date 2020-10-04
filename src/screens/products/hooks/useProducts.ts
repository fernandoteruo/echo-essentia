import { useEffect, useState } from 'react';
import getProducts from '../api/products';
import { IProduct } from '../../../model/order';

const useGetProducts: (kioskId: string) => IProduct[] = (kioskId) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchedProducts = getProducts(kioskId);
    setProducts(fetchedProducts);
  }, [kioskId]);

  return products;
};

export default useGetProducts;

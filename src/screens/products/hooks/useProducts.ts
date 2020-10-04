import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import getProducts from '../api/products';
import { IProduct } from '../../../model/order';
import { IRootReducer } from '../../../store';

interface IUseProducts {
  products: IProduct[];
  selectedProduct: IProduct | null;
}

const useGetProducts: (kioskId: string) => IUseProducts = (kioskId) => {
  const selectedProduct = useSelector<IRootReducer, IProduct | null>(
    (state) => state.order.product,
  );
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchedProducts = getProducts(kioskId);
    setProducts(fetchedProducts);
  }, [kioskId]);

  return {
    products,
    selectedProduct,
  };
};

export default useGetProducts;

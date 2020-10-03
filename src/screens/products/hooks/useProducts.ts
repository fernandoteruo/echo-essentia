import { useContext, useEffect, useState } from 'react';
import getProducts from '../api/products';
import { IProduct, OrderContext } from '../../../context/Order';

interface IUseProducts {
  products: IProduct[];
  selectedProduct: IProduct | null;
}

const useGetProducts: (kioskId: string) => IUseProducts = (kioskId) => {
  const order = useContext(OrderContext);
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchedProducts = getProducts(kioskId);
    setProducts(fetchedProducts);
  }, [kioskId]);

  return {
    products,
    selectedProduct: order !== null ? order.product : null,
  };
};

export default useGetProducts;

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import getAvailableVolume from '../api/volume';
import { IProduct, IVolume } from '../../../model/order';
import { IRootReducer } from '../../../store';

const useVolume: (kioskId: string) => IVolume[] = (kioskId) => {
  const [volumes, setVolumes] = useState<IVolume[]>([]);
  const selectedProduct = useSelector<IRootReducer, IProduct | null>(
    (state) => state.order.product,
  );

  useEffect(() => {
    if (selectedProduct) {
      const fetchedAvailable = getAvailableVolume(kioskId, selectedProduct?.id);
      setVolumes(fetchedAvailable);
    }
  }, [kioskId, selectedProduct]);

  return volumes;
};

export default useVolume;

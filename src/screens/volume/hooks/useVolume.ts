import { useContext, useEffect, useState } from 'react';
import getAvailableVolume from '../api/volume';
import { IVolume, OrderContext } from '../../../context/Order';

interface IUseVolume {
  volumes: IVolume[];
  selectedVolume: IVolume | null;
}

const useVolume: (kioskId: string) => IUseVolume = (kioskId) => {
  const order = useContext(OrderContext);
  const [volumes, setVolumes] = useState<IVolume[]>([]);

  useEffect(() => {
    if (order?.product?.id) {
      const fetchedAvailable = getAvailableVolume(kioskId, order?.product?.id);
      setVolumes(fetchedAvailable);
    }
  }, [kioskId]);

  return {
    volumes,
    selectedVolume: order !== null ? order.volume : null,
  };
};

export default useVolume;

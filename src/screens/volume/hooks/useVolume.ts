import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getAvailableVolume from '../api/volume';
import { IVolume } from '../../../context/Checkout';

interface IVolumeUrlParams {
  productId: string;
}

const useGetAvailableVolumes: (kioskId: string) => IVolume[] = (kioskId) => {
  const { productId } = useParams<IVolumeUrlParams>();
  const [availableVolume, setAvailableVolume] = useState<IVolume[]>([]);

  useEffect(() => {
    const fetchedAvailable = getAvailableVolume(kioskId, productId);
    setAvailableVolume(fetchedAvailable);
  }, [kioskId, productId]);

  return availableVolume;
};

export default useGetAvailableVolumes;

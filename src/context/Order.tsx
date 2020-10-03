import React, { createContext, FC, useState } from 'react';

interface IProps {
  children: any;
}

export interface IProduct {
  id: string;
  category: string;
  name: string;
  imageUrl: string;
  description: string;
  price: number;
}

export interface IVolume {
  id: string;
  amount: number;
  price: number;
}

interface IContext {
  id: string | null;
  number: number | null;
  kioskId: string | null;
  product: IProduct | null;
  volume: IVolume | null;
  setId: (id: string) => void;
  setNumber: (number: number | null) => void;
  setKioskId: (kioskId: string | null) => void;
  setProduct: (product: IProduct | null) => void;
  setVolume: (volume: IVolume | null) => void;
  reset: () => void;
}

export const OrderContext = createContext<IContext | null>(null);

const OrderWrapper: FC<IProps> = ({ children }: IProps) => {
  const [id, setId] = useState<string | null>(null);
  const [number, setNumber] = useState<number | null>(null);
  const [kioskId, setKioskId] = useState<string | null>(null);
  const [product, setProduct] = useState<IProduct | null>(null);
  const [volume, setVolume] = useState<IVolume | null>(null);

  const reset = () => {
    setId(null);
    setNumber(null);
    setProduct(null);
    setVolume(null);
  };

  const value: IContext = {
    id,
    number,
    kioskId,
    product,
    volume,
    setId,
    setNumber,
    setKioskId,
    setProduct,
    setVolume,
    reset,
  };

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};

export default OrderWrapper;

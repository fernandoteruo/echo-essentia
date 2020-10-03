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
  product: IProduct | null;
  volume: IVolume | null;
  setId: (id: string) => void;
  setProduct: (product: IProduct) => void;
  setVolume: (volume: IVolume) => void;
}

export const CheckoutContext = createContext<IContext | null>(null);

const CheckoutWrapper: FC<IProps> = ({ children }: IProps) => {
  const [id, setId] = useState<string | null>(null);
  const [product, setProduct] = useState<IProduct | null>(null);
  const [volume, setVolume] = useState<IVolume | null>(null);

  const value: IContext = {
    id,
    product,
    volume,
    setId,
    setProduct,
    setVolume,
  };

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutWrapper;

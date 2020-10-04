export enum OrderStatus {
  PENDING_PRODUCT,
  PENDING_VOLUME,
  PENDING_PAYMENT,
  PENDING_FILLING,
  COMPLETED,
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

export enum PaymentType {
  DEBIT,
  CREDIT,
  CREDIT_INSTALLS_2,
}

export enum PaymentStatus {
  NOT_REQUESTED,
  ERROR,
  SUCCESS,
}

export interface IPayment {
  id: string;
  type: PaymentType;
  price: number;
  status: PaymentStatus;
}

interface IOrder {
  id: string | null;
  number: number | null;
  kioskId: string | null;
  status: OrderStatus | null;
  product: IProduct | null;
  volume: IVolume | null;
  payment: IPayment | null;
}

export default IOrder;

import { createAction } from '@reduxjs/toolkit';
import IOrder, { IPayment, IProduct, IVolume } from '../../model/order';

export const create = createAction<Pick<IOrder, 'id' | 'number' | 'kioskId'>>(
  'order/create',
);

export const setProduct = createAction<IProduct>('order/setProduct');

export const setVolume = createAction<IVolume>('order/setVolume');

export const setPayment = createAction<IPayment>('order/setPayment');

export const complete = createAction('order/complete');

export const reset = createAction('orders/reset');

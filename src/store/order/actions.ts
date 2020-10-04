import { createAction } from '@reduxjs/toolkit';
import IOrder from '../../model/order';

export const create = createAction<Pick<IOrder, 'id' | 'number' | 'kioskId'>>(
  'order/create',
);

export const setProduct = createAction<Pick<IOrder, 'product'>>(
  'order/setProduct',
);

export const setVolume = createAction<Pick<IOrder, 'volume'>>(
  'order/setVolume',
);

export const setPayment = createAction<Pick<IOrder, 'payment'>>(
  'order/setPayment',
);

export const complete = createAction('order/complete');

export const reset = createAction('orders/reset');

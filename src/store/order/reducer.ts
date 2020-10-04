import { createReducer } from '@reduxjs/toolkit';
import {
  complete,
  create,
  reset,
  setPayment,
  setProduct,
  setVolume,
} from './actions';
import IOrder, { OrderStatus } from '../../model/order';

const initialState: IOrder = {
  id: null,
  number: null,
  kioskId: null,
  status: null,
  product: null,
  volume: null,
  payment: null,
};

const orderReducer = createReducer<IOrder>(initialState, (builder) => {
  builder
    .addCase(create, (state, { payload }) => {
      return {
        ...state,
        id: payload.id,
        number: payload.number,
        kioskId: payload.kioskId,
        status: OrderStatus.PENDING_PRODUCT,
      };
    })
    .addCase(setProduct, (state, { payload }) => {
      const product = state?.product?.id === payload.id ? null : payload;
      return {
        ...state,
        product,
        status: OrderStatus.PENDING_VOLUME,
      };
    })
    .addCase(setVolume, (state, { payload }) => {
      const volume = state?.volume?.id === payload.id ? null : payload;
      return {
        ...state,
        volume,
        status: OrderStatus.PENDING_PAYMENT,
      };
    })
    .addCase(setPayment, (state, { payload }) => {
      return {
        ...state,
        payment: payload,
        status: OrderStatus.PENDING_FILLING,
      };
    })
    .addCase(complete, (state, action) => {
      return {
        ...state,
        status: OrderStatus.COMPLETED,
      };
    })
    .addCase(reset, (state, action) => {
      return initialState;
    });
});

export default orderReducer;

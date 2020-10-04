import { combineReducers, configureStore } from '@reduxjs/toolkit';
import IOrder from '../model/order';
import orderReducer from './order/reducer';

interface IRootReducer {
  order: IOrder;
}

const rootReducer = combineReducers<IRootReducer>({
  order: orderReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

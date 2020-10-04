import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import IOrder from '../model/order';
import orderReducer from './order/reducer';

interface IRootReducer {
  order: IOrder;
}

const rootReducer = combineReducers<IRootReducer>({
  order: orderReducer,
});

const middlewares = [logger];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...middlewares),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

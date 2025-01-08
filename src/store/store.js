import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../slice/cartSlice';
import uiSlice from '../slice/uiSlice'

const store = configureStore( {reducer: {
    ui: uiSlice,
    cart: cartSlice
}} );
export default store;

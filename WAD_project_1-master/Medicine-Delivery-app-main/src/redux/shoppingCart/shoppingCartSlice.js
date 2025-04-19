import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage'; 
import { createSlice } from '@reduxjs/toolkit';
import { postOrderThunk } from "./orderThank";

const shoppingCartInitialState = {
    basket: [],
    order: [],
    isLoading: false,
    error: null,
};

export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState: shoppingCartInitialState,
    reducers: {
        addShoppingCart(state, { payload }) {
            state.basket.push(payload);
        },
        deleteShoppingCart(state, { payload }) {
            const index = state.basket.findIndex(medicine => medicine.id === payload);
            state.basket.splice(index, 1);
        },
        updateShoppingCart(state, { payload }) {
            const index = state.basket.findIndex(item => item.id === payload.id);
            if (index !== -1) {
                state.basket[index].quantity = payload.quantity;
            };
        },
        resetShoppingCart(state, _) {
            state.basket = []
        }
    },
    extraReducers: builder => {
        builder
            .addCase(postOrderThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(postOrderThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.order = [...state.order, payload]
                state.error = null;
            })
            .addCase(postOrderThunk.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
    }
});

const persistConfig = {
    key: 'shoppingCart',
    storage,
    whitelist: ['basket']
};

export const shoppingCartPersistReducer = persistReducer(
    persistConfig,
    shoppingCartSlice.reducer
);

export const { addShoppingCart, deleteShoppingCart, updateShoppingCart, resetShoppingCart } = shoppingCartSlice.actions;

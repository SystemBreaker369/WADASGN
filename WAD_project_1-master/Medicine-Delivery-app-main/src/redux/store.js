import { configureStore } from '@reduxjs/toolkit'
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { filterReducer } from './filter/filterSlice';
import { medicinesReducer } from './medicine/medicineSlice';
import { shoppingCartPersistReducer } from './shoppingCart/shoppingCartSlice';

export const store = configureStore({
    reducer: {
        medicines: medicinesReducer,
        filter: filterReducer,
        shoppingCart: shoppingCartPersistReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  sort: null,
  filterMedicineByShop: [],
  diseaseCategory: null,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    sortSet(state, { payload }) {
      state.sort = payload;
    },
    filterDelete(state, { payload }) {
      state.filter = null;
    },
    filterMedicineByShopSet(state, { payload }) {
      state.filterMedicineByShop = payload;
    },
    setDiseaseCategory(state, { payload }) {
      state.diseaseCategory = payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const {
  sortSet,
  filterDelete,
  filterMedicineByShopSet,
  setDiseaseCategory,
} = filterSlice.actions;

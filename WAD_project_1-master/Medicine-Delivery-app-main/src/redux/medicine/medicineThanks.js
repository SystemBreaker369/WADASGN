import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://65e3681688c4088649f5c41d.mockapi.io/';

const getAllMedicines = async (_, thunkAPI) => {
    try {
        const response = await axios.get('/drugs');
        return response.data;
    }
    catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
};

export const getAllMedicinesThunk = createAsyncThunk(
    'medicines/getAllMedicines',
    getAllMedicines
);
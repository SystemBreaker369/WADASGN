import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

axios.defaults.baseURL = 'https://65e3681688c4088649f5c41d.mockapi.io/';

export const options = {
  width: '400px',
  position: 'center-center',
  timeout: 3000,
  fontSize: '20px',
};

export const postOrder = async order => {
  try {
    const response = await axios.post('/order', order);
    Notify.success(
      `${response.data.user.name}, your order added successfully`,
      options
    );
    console.log('response.data from postOrder =>', response.data);
    return response.data;
  } catch (e) {
    Notify.failure(
      `Sorry, your order wasn't added. Error: "${e.message}"`,
      options
    );
    throw e; // Re-throw to allow catching in component
  }
};

export const postOrderThunk = createAsyncThunk(
  'shoppingCart/postOrder',
  async (order, thunkAPI) => {
    try {
      return await postOrder(order);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

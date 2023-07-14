import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider } from 'react-redux'; 

const initialState = [{
  id: 1,
  name: "멋진 바지",
  price: 20000,
  option: [28, 30, 32],
  likes: 100,
},
{
  id: 2,
  name: "멋진 셔츠",
  price: 10000,
  option: ["small", "medium", "large"],
  likes: 200,
},
{
  id: 3,
  name: "멋진 신발",
  price: 30000,
  option: [230, 240, 250, 260, 270],
  likes: 300,
}]

let products = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    sortByPrice: (state) => {
      state.sort((a,b)=> a.price - b.price)
    },
    reset: () => {
      return initialState;
    }
  },
});

let cart = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state,action) => {
      state.push(action.payload);
    }
  }
})

export const { sortByPrice } = products.actions;
export const { reset } = products.actions;
export const { addToCart } = cart.actions;

const store = configureStore({
  reducer: {
    products: products.reducer,
    cart: cart.reducer,
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

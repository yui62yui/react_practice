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
    },
    addAmount: (state, action) => {
      const product = state.find((item) => item.id === action.payload.id);
      console.log(state)
      // state 콘솔로 찍었을 때 Proxy(Array) {0: {…}} 로 나오고 0번에는 [[Handler]]: null[[Target]]: null[[IsRevoked]]: true 이런 게 나오는데 갑자기 state에서 find를 어떻게 쓰죠?????? 이해 불가...

      product.amount += 1;
      product.amountPrice = product.amount * product.price;


      // action.payload = { ...action.payload, amount: action.payload.amount+1 }
      // state = action.payload

      // 바로 위 코드가 제가 쓴 코드인데 작동이 도저히 안 돼서 gpt한테 물어 봤더니 정상 작동되는 53-60번째 줄 코드를 알려 줬습니다...... 근데 도저히 저게 왜 작동되고 왜 제 거는 작동이 안 되는지 영문을 모르겠습니다.........
    },
    minusAmount: (state, action) => {
      const product = state.find((item) => item.id === action.payload.id);
      if (product.amount > 1) {
        product.amount -= 1;
        product.amountPrice = product.amount * product.price;
      } else {
        alert("구매수량은 1보다 작을 수 없습니다")
      }
      // action.payload = { ...action.payload, amount: action.payload.amount - 1 }
      // state = action.payload
    },
    deleteFromCart: (state,action) => {
      state.pop(action.payload)
    }
  }
})

export const { sortByPrice, reset } = products.actions;
export const { addToCart, addAmount, minusAmount, deleteFromCart } = cart.actions;

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

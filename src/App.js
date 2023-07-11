import { Link, Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Product from './pages/Product';
import Products from './pages/Products';
import Layout from './common/Layout';
import Login from './common/Login';
import Signup from './common/Signup';
import { useState } from 'react';

function App() {

  const [ products, setProducts ] = useState([
    {
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
    }
  ]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main products={products}/>}></Route>
        <Route path="/products" element={<Products products={products}/>}></Route>
        <Route path="/products/:id" element={<Product products={products}/>}></Route>
        {/* products뒤에 어떤 걸 입력하든 product 페이지로 이동함 */}
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Route>
      <Route
        path="*"
        element={
          <>
            <div>없는 페이지입니다.</div>
            <Link to="/">홈으로 이동</Link>
          </>
        }
      />
    </Routes>
  )
}

export default App;

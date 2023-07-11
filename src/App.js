import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Product from './pages/Product';
import Products from './pages/Products';
import Layout from './common/Layout';
import Login from './common/Login';
import Signup from './common/Signup';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<Product />}></Route>
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

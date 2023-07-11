import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Product from './pages/Product';
import Products from './pages/Products';
import Layout from './common/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Main />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/products/:id' element={<Product />}/>
        </Route>
        <Route path='*' element={
          <>
            <div>없는 페이지입니다</div>
            <Link to="/">홈으로 이동</Link>
          </>
          }
        >
        </Route>
      </Routes>
    </>
  )
}

export default App;

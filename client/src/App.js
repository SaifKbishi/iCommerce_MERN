import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/sale/Cart';
import Footer from './components/Footer';
import Checkout from './components/sale/Checkout';
import SmallBasket from './components/sale/SmallBasket';

import Register from './components/user/Register';
import UsersList from './components/user/UsersList';
import UserInfo from './components/user/UserInfo';
import UserAdd from './components/user/UserAdd';
import UserEdit from './components/user/UserEdit';
import SignIn from './components/user/SignIn';

import Products from './components/product/Products';
import ProductAdd from './components/product/ProductAdd';
import ProductInfo from './components/product/ProductInfo';
import ProductEdit from './components/product/ProductEdit';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Container} from '@mui/material/';
import { useNavigate, Link as RouterLink } from "react-router-dom";
import {Link as MUILink} from '@mui/material/';


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes >
        <Route path="/" element={<Home/>} />
        <Route path="/iCommerce" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/smallBasket" element={<SmallBasket/>} />        
        <Route path="/register" element={<Register/>} />

        <Route path="/v3/products" element={<Products/>} />
        <Route path="/v3/products/new" element={<ProductAdd/>} />
        <Route path="/v3/products/:id" element={<ProductInfo/>} />
        <Route path="/v3/products/:id/edit" element={<ProductEdit/>} />
        
        <Route path="/v2/users" element={<UsersList/>} />
        <Route path="/v2/users/:id" element={<UserInfo/>} />
        <Route path="/v2/users/new" element={<UserAdd/>} />
        <Route path="/v2/users/:id/edit" element={<UserEdit/>} />
        <Route path="/v2/users/signin" element={<SignIn/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;

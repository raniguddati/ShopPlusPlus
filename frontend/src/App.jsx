
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/homePage/home.jsx'
import Motorcycles from './page/motorcycles/motorcycles.jsx';
import { Navbar } from './components/narbar/navbar.jsx';
import AboutUs from './page/aboutUs/aboutUs.jsx';
import Accessories from './page/accessories/accessories.jsx';
import ContactUs from './page/contactUs/contactUs.jsx';
import Cart from './page/cart/cartDetail.jsx';
import Profile from './page/profile/profile.jsx';
import Tracing from './page/tracing/tracking.jsx';
import Footer from './components/footer/footer';
import Login from './page/login/login';
import SignUp from './page/signUp/signUp.jsx';
import AddProduct from './page/addproduct/addproduct.jsx';
import { CartProvider } from './api/addtocart.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Routes>

            <Route element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="motorcycles" element={<Motorcycles />} />
              <Route path="accessories" element={<Accessories />} />
              <Route path="aboutus" element={<AboutUs />} />
              <Route path="contactus" element={<ContactUs />} />
              <Route path="cart" element={<Cart />} />
              <Route path='profile' element={<Profile />} />
              <Route path='tracing' element={<Tracing />} />
              <Route path='login' element={<Login />} />
              <Route path='signup' element={<SignUp />} />
              <Route path='addproduct' element={<AddProduct />} />
            </Route>

          </Routes>
        </CartProvider>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Login from "./component/Auth/Login.jsx";
import SignUp from "./component/Auth/SignUp.jsx";
import ResetPassword from "./component/Auth/ResetPassword.jsx";
import { LoginProvider } from "./Context/LoginContext.jsx";
import Profile from "./component/Account/Profile.jsx";
import Test from "./component/Test.jsx";
import Test2 from "./component/Test2.jsx";
import MainLandingPage from "./component/LandingPage/MainLandingPage.jsx";
import Cart from './component/Cart.jsx';
import Shop from './component/Shop.jsx';
import Products from "./component/Products.jsx";
import Orders from "./component/Orders.jsx";
import Checkout from "./component/Checkout.jsx";
import ContactUs from "./component/ContactUs.jsx";
import Blog from './component/Blog.jsx';
import AccountSetting from "./component/Account/AccountSetting.jsx"
import ProductDetails from "./component/products/ProductDetails.jsx";
import Test3 from "./component/Test3.jsx";
import { CartContextProvider } from "./Context/CartContext.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<MainLandingPage />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="profile" element={<Profile />} />
      <Route path="reset" element={<ResetPassword />} />
      <Route path="settings" element={<AccountSetting />} />
      <Route path="profile" element={<Profile />} />
      <Route path="cart" element={<Cart />} />
      <Route path="shop" element={<Shop />} />
      <Route path="products" element={<Products />} />
      <Route path="orders" element={<Orders />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="contactus" element={<ContactUs />} />
      <Route path="blog" element={<Blog />} />
      <Route path="productDetails" element={<ProductDetails />} />
      <Route path="test" element={<Test />} />
      <Route path="test2" element={<Test2 />} />
      <Route path="test3" element={<Test3 />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <LoginProvider>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </LoginProvider>
);

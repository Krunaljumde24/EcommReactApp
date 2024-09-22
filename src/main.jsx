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
import MainLandingPage from "./component/LandingPage/MainLandingPage.jsx";
import Cart from './component/Cart.jsx';
import Shop from './component/Shop.jsx';
import Products from "./component/Products.jsx";
import Orders from "./component/Orders.jsx";
import Checkout from "./component/Checkout.jsx";
import ContactUs from "./component/ContactUs.jsx";
import Blog from './component/Blog.jsx';
import AccountSetting from "./component/Account/AccountSetting.jsx"


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
      <Route path="test" element={<Test />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <LoginProvider>
    <RouterProvider router={router} />
  </LoginProvider>
);

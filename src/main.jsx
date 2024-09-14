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
import SignIn from "./component/SignIn.jsx";
import SignUp from "./component/SignUp.jsx";
import ResetPassword from "./component/ResetPassword.jsx";
import { LoginProvider } from "./Context/LoginContext.jsx";
import Profile from "./component/Profile.jsx";
import AccountSetting from "./component/AccountSetting.jsx";
import Test from "./component/Test.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="profile" element={<Profile />} />
      <Route path="reset" element={<ResetPassword />} />
      <Route path="settings" element={<AccountSetting />} />
      <Route path="test" element={<Test />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <LoginProvider>
      <RouterProvider router={router} />
    </LoginProvider>
  </>
);

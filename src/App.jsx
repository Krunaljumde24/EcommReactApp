import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./component/Common/Header";
import Footer from "./component/Common/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Toaster position="top-right" />
      <Footer />
    </>
  );
}

export default App;

import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./component/Common/Header";
import Footer from "./component/Common/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        <Outlet />
      </div>
      <Toaster position="top-right" />
      <Footer />
    </>
  );
}

export default App;

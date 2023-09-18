import {} from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Nav />
      <div className="mx-auto max-w-4xl pt-5">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;

import {
  BrowserRouter,
  //   Navigate,
  //   Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AppRouter = () => {
  //   function PrivateRouter() {
  //     return userCheck ? <Outlet /> : <Navigate to="/" replace />;
  //   }
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/details" element={<PrivateRouter />}>
          <Route path="/details:title" element={<BlogDetails />} />
        </Route>  */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;

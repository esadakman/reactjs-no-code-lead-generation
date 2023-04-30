import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
// import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Admin from "../pages/Admin";
import { useSelector } from "react-redux";

const AppRouter = () => {
  const authUser = useSelector((state) => state.auth.authUser);
  // console.log(authUser);

  function PrivateRouter() {
    return authUser ? <Outlet /> : <Navigate to="/" replace />;
  }
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<PrivateRouter />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
        {/* <Route
          path="/admin/*"
          element={<PrivateRouter element={<Admin />} />}
        /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default AppRouter;

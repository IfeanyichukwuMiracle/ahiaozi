import AppContext from "./context/AppContext";
import {
  Landing,
  Signup,
  Login,
  Home,
  Course,
  Error,
  Cart,
  MyCourses,
  Learn,
  Checkout,
  Dashboard,
} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteProtector from "./routeProtector/RouteProtector";
import DashboardProtector from "./routeProtector/DashboardProtector";
import CheckoutProtector from "./routeProtector/CheckoutProtector";

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/" element={<Home />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/course/:courseId" element={<Course />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/my-courses"
            element={
              <RouteProtector>
                <MyCourses />
              </RouteProtector>
            }
          />
          <Route
            path="/checkout"
            element={
              <CheckoutProtector>
                <Checkout />
              </CheckoutProtector>
            }
          />
          <Route
            path="/course/learn/:courseId"
            element={
              <RouteProtector>
                <Learn />
              </RouteProtector>
            }
          />
          <Route
            path="/dashboard"
            element={
              <DashboardProtector>
                <Dashboard />
              </DashboardProtector>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;

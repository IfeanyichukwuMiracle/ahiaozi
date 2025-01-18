import AppContext from "./context/AppContext";
import {
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
  Profile,
} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteProtector from "./routeProtector/RouteProtector";
import DashboardProtector from "./routeProtector/DashboardProtector";
import CheckoutProtector from "./routeProtector/CheckoutProtector";
import AuthProtector from "./routeProtector/AuthProtector";

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile/:userId"
            element={
              <RouteProtector>
                <Profile />
              </RouteProtector>
            }
          />
          <Route
            path="/auth/login"
            element={
              <AuthProtector>
                <Login />
              </AuthProtector>
            }
          />
          <Route
            path="/auth/signup"
            element={
              <AuthProtector>
                <Signup />
              </AuthProtector>
            }
          />
          <Route path="/course/:courseId" element={<Course />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/my-courses/:type"
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
            path="/dashboard/:dashboardNav"
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

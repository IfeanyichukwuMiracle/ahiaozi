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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/course/:courseId" element={<Course />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/my-courses" element={<MyCourses />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/course/learn/:courseId" element={<Learn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Footer, Header } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import googleIcon from "../../assets/google.png";
import { useState } from "react";
import axios from "axios";
// url
import backend_url from "../../backend-url";

const Signup = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirm_password: "",
    agreed: true,
  });
  const navigate = useNavigate();

  function handleChange(e) {
    setUser((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const values = Object.values(user);
    const { agreed, ...rest } = user;
    if (!agreed) {
      toast.error("Agree to terms and conditions");
      return;
    }
    if (values.includes("")) {
      toast.error("Fields can't be empty");
      return;
    }
    if (user.password !== user.confirm_password) {
      toast.error("Passwords don't match!");
      return;
    }

    const toastId = toast.loading("Signing up...");
    try {
      await axios.post(`${backend_url}/user/signup`, rest);
      toast.success("Signup successfull!");
      setTimeout(() => navigate("/auth/login"), 1800);
    } catch (e) {
      console.log(e);
      toast.error("Signup error!");
    } finally {
      toast.dismiss(toastId);
      setUser({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirm_password: "",
        agreed: true,
      });
    }
  }
  return (
    <>
      <Toaster />
      <Header />
      <section className="w-full py-16 flex justify-center items-center">
        <form
          className="bg-[#fefefe] shadow-md w-max rounded-md p-6"
          onSubmit={handleSubmit}
        >
          <p className="font-bold text-2xl mb-4">Sign up</p>
          <div>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Firstname"
              value={user.firstname}
              onChange={handleChange}
              required
              className="bg-gray-50 py-2 px-4 rounded-md mb-2"
            />
          </div>
          <div>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Lastname"
              value={user.lastname}
              onChange={handleChange}
              required
              className="bg-gray-50 py-2 px-4 rounded-md mb-2"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={user.email}
              onChange={handleChange}
              required
              className="bg-gray-50 py-2 px-4 rounded-md mb-2"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
              min={8}
              required
              className="bg-gray-50 py-2 px-4 rounded-md mb-2"
            />
          </div>
          <div>
            <input
              type="password"
              name="confirm_password"
              id="confirm_password"
              placeholder="Confirm Password"
              value={user.confirm_password}
              onChange={handleChange}
              min={8}
              required
              className="bg-gray-50 py-2 px-4 rounded-md mb-2"
            />
          </div>
          <div className="flex items-center gap-1 text-[.75rem]">
            <input
              type="checkbox"
              name="terms"
              id="terms"
              defaultChecked={user.agreed}
              onChange={() => {
                setUser((prevData) => {
                  return { ...prevData, agreed: !user.agreed };
                });
              }}
            />
            <label htmlFor="terms">I agree to all Terms and Conditions</label>
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 transition-all text-[#fefefe] font-bold text-[1.1rem] w-full py-1 rounded-md mt-4"
            >
              Sign up
            </button>
            <p className="mt-1 text-sm text-center">
              Already have an account?{" "}
              <Link
                to={`/auth/login`}
                onClick={() =>
                  window.scroll({ top: 0, left: 0, behavior: "smooth" })
                }
                className="text-blue-600 underline"
              >
                Login
              </Link>
            </p>
          </div>
          {/* Google auth */}
          <p className="text-center py-1 font-semibold my-2">OR</p>
          <div>
            <button className="border hover:bg-gray-50 transition-all py-1 flex items-center justify-center gap-2 w-full rounded">
              <img src={googleIcon} alt="google" className="size-6" />
              <p className="font-semibold">Sign in with Google</p>
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Signup;

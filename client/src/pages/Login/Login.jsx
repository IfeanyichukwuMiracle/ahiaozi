import { useState } from "react";
import { Footer } from "../../components";
import { Link } from "react-router-dom";

import googleIcon from "../../assets/google.png";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setUser((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const values = Object.values(user);
    if (values.includes("")) {
      alert("Fill empty fields!");
      return;
    }

    console.log(user);
    setUser({
      email: "",
      password: "",
    });
  }
  return (
    <>
      <section className="w-full py-16 flex justify-center items-center">
        <form
          className="bg-[#fefefe] shadow-md w-max rounded-md p-6"
          onSubmit={handleSubmit}
        >
          <p className="font-bold text-2xl mb-4">Sign in</p>
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
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 transition-all text-[#fefefe] font-bold text-[1.1rem] w-full py-1 rounded-md mt-4"
            >
              Sign in
            </button>
            <p className="mt-1 text-sm text-center">
              Don&apos;t have an account?{" "}
              <Link to={`/auth/signup`} className="text-blue-600 underline">
                Signup
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

export default Login;

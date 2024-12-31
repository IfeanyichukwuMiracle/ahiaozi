import { Footer } from "../../components";

import googleIcon from "../../assets/google.png";
import { useState } from "react";

const Signup = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirm_password: "",
    agreed: true,
  });

  function handleChange(e) {
    setUser((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const values = Object.values(user);
    const { agreed, ...rest } = user;

    if (!agreed) {
      alert("Agree to terms");
      return;
    }
    if (values.includes("")) {
      alert("Fill empty fields!");
      return;
    }

    console.log(rest);
    setUser({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirm_password: "",
      agreed: true,
    });
  }
  return (
    <>
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

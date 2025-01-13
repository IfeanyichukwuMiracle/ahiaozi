import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useContext, useState } from "react";
import Menu from "../Menu/Menu";
import { Context } from "../../context/AppContext";
import toast, { Toaster } from "react-hot-toast";

import { AnimatePresence } from "motion/react";

const Header = ({ sticky }) => {
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { state, dispatch } = useContext(Context);

  async function logout() {
    const toastId = toast.loading("Logging out...");
    await new Promise((resolve) => setTimeout(resolve, 1800));
    dispatch({ type: "logout" });
    toast.dismiss(toastId);
    toast.success("Logged out!");
  }

  async function becomeAffiliate() {}

  async function becomeTutor() {}

  return (
    <>
      <Toaster />
      {/* popup cart */}
      <AnimatePresence>
        {showCart && <Cart setShowCart={setShowCart} key={"box"} />}
      </AnimatePresence>
      {/* popup menu */}
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />

      {/* header */}
      <header
        className={`${
          sticky ? "sticky top-0" : "relative"
        } z-50 shadow-lg w-full flex justify-between items-center bg-[#fefefe] sm:py-4 sm:px-6 py-3 px-2`}
      >
        <Link
          to={"/"}
          onClick={() => window.scroll({ top: 0, left: 0, behavior: "smooth" })}
          className="text-black"
        >
          <p className="font-bold text-lg">Infomart</p>
        </Link>
        <div className="sm:flex sm:gap-4 hidden text-[.95rem]">
          {state.token && (
            <Link
              to={`/my-courses`}
              onClick={() =>
                window.scroll({ top: 0, left: 0, behavior: "smooth" })
              }
            >
              <nav>My Courses</nav>
            </Link>
          )}
          {state.role === "tutor" || state.role === "affiliate" ? (
            <Link
              to={`/dashboard/overview`}
              onClick={() =>
                window.scroll({ top: 0, left: 0, behavior: "smooth" })
              }
            >
              <nav>Dashboard</nav>
            </Link>
          ) : (
            <>
              <nav className="cursor-pointer" onClick={becomeAffiliate}>
                Become an Affiliate
              </nav>
              <nav className="cursor-pointer" onClick={becomeTutor}>
                Become a Tutor
              </nav>
            </>
          )}
          {!state.token && (
            <nav>
              <Link
                to={`/auth/signup`}
                style={{ color: "black" }}
                onClick={() =>
                  window.scroll({ top: 0, left: 0, behavior: "smooth" })
                }
              >
                Sign up
              </Link>
            </nav>
          )}
        </div>
        <div className="flex items-center gap-4">
          <div className="relative" onClick={() => setShowCart(true)}>
            <p className="absolute -top-3 -right-2 text-sm bg-red-500 w-5 h-5 flex items-center justify-center rounded-full font-semibold text-white">
              {state.cart.length}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </div>
          {state.token ? (
            <button
              onClick={logout}
              className="hidden sm:block bg-red-500 hover:bg-red-400 text-white text-base font-semibold px-2 pb-1 transition-all rounded-sm"
            >
              Logout
            </button>
          ) : (
            <Link
              to={`/auth/signup`}
              onClick={() =>
                window.scroll({ top: 0, left: 0, behavior: "smooth" })
              }
            >
              <button className="hidden sm:block border pb-1 px-2 text-blue-500 hover:bg-blue-50 transition-all border-blue-500 rounded-sm">
                Sign up
              </button>
            </Link>
          )}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.7}
          stroke="currentColor"
          className="size-6 sm:hidden block cursor-pointer"
          onClick={() => setShowMenu(true)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </header>
    </>
  );
};

export default Header;

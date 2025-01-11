import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/AppContext";
import toast, { Toaster } from "react-hot-toast";

const Menu = ({ setShowMenu, showMenu }) => {
  const { state, dispatch } = useContext(Context);

  async function logout() {
    setShowMenu(false);
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
      <section
        className={`flex flex-col max-w-[17rem] fixed top-0 ${
          showMenu ? `right-0` : `-right-[18rem]`
        } transition-all z-[60] p-4 bg-[#fefefe] sm:hidden shadow-2xl min-w-[16rem] h-screen justify-between`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 absolute top-4 right-2 cursor-pointer"
          onClick={() => setShowMenu(false)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>

        <div className="flex flex-col mt-7 gap-6 text-lg">
          <Link to={`/`}>
            <nav>Home</nav>
          </Link>
          {state.role === "tutor" || state.role === "affiliate" ? (
            <Link to={`/dashboard/overview`}>
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
          <Link to={`/cart`}>
            <nav>Cart</nav>
          </Link>
          {state.token && (
            <Link to={`/my-courses`}>
              <nav>My Courses</nav>
            </Link>
          )}
          {state.role === "affiliate" && (
            <Link to={`/dashboard/marketplace`}>
              <nav>Marketplace</nav>
            </Link>
          )}
          {state.role === "tutor" && (
            <>
              <Link to={`/dashboard/courses`}>
                <nav>Courses</nav>
              </Link>
              <Link to={`/dashboard/add-course`}>
                <nav>Add Course</nav>
              </Link>
            </>
          )}
        </div>
        <div>
          {!state.token ? (
            <Link to={`/auth/signup`}>
              <button className="bg-blue-600 hover:bg-blue-500 transition-all text-white font-semibold w-full py-2 rounded-sm">
                Signup
              </button>
            </Link>
          ) : (
            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-400 transition-all text-white font-semibold w-full py-2 rounded-sm"
            >
              Logout
            </button>
          )}
        </div>
      </section>
    </>
  );
};

export default Menu;

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/AppContext";
import toast, { Toaster } from "react-hot-toast";

import { AnimatePresence, motion } from "motion/react";

const Menu = ({ setShowMenu, showMenu }) => {
  const { state, dispatch } = useContext(Context);
  const [dashboard, setDashboard] = useState(false);

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
          <Link
            to={`/`}
            onClick={() =>
              window.scroll({ top: 0, left: 0, behavior: "smooth" })
            }
          >
            <nav>Home</nav>
          </Link>
          <Link
            to={`/cart`}
            onClick={() =>
              window.scroll({ top: 0, left: 0, behavior: "smooth" })
            }
          >
            <nav>Cart</nav>
          </Link>
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
          {/* dashboard links */}
          {state.role === "tutor" || state.role === "affiliate" ? (
            <div className="cursor-pointer relative">
              <nav
                className="flex gap-1 items-center"
                onClick={() => setDashboard(!dashboard)}
              >
                <p>Dashboard</p>
                {dashboard ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                )}
              </nav>
              <AnimatePresence>
                {dashboard && (
                  <motion.section
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className="absolute -bottom-[7rem] bg-[#fefefe] rounded-sm shadow-sm flex flex-col "
                  >
                    <Link
                      to={`/dashboard/overview`}
                      onClick={() =>
                        window.scroll({ top: 0, left: 0, behavior: "smooth" })
                      }
                      className="px-4 py-2 border-b border-gray-100 hover:bg-gray-100 transition-all"
                    >
                      <nav>Overview</nav>
                    </Link>
                    {state.role === "affiliate" && (
                      <>
                        <Link
                          to={`/dashboard/marketplace`}
                          onClick={() =>
                            window.scroll({
                              top: 0,
                              left: 0,
                              behavior: "smooth",
                            })
                          }
                          className="px-4 py-2 border-b border-gray-100 hover:bg-gray-100 transition-all"
                        >
                          <nav>Marketplace</nav>
                        </Link>
                      </>
                    )}
                    {state.role === "tutor" && (
                      <>
                        <Link
                          to={`/dashboard/courses`}
                          onClick={() =>
                            window.scroll({
                              top: 0,
                              left: 0,
                              behavior: "smooth",
                            })
                          }
                          className="px-4 py-2 border-b border-gray-100 hover:bg-gray-100 transition-all"
                        >
                          <nav>Courses</nav>
                        </Link>
                        <Link
                          to={`/dashboard/add-course`}
                          onClick={() =>
                            window.scroll({
                              top: 0,
                              left: 0,
                              behavior: "smooth",
                            })
                          }
                          className="px-4 py-2 border-b border-gray-100 hover:bg-gray-100 transition-all"
                        >
                          <nav>Add Course</nav>
                        </Link>
                      </>
                    )}
                  </motion.section>
                )}
              </AnimatePresence>
            </div>
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
        </div>
        <div>
          {!state.token ? (
            <Link
              to={`/auth/signup`}
              onClick={() => {
                window.scroll({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
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

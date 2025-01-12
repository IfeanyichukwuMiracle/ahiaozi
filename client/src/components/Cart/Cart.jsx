import { Link } from "react-router-dom";
import courseImg from "../../assets/course.jpg";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/AppContext";

import { motion } from "motion/react";

const Cart = ({ setShowCart }) => {
  const { state, dispatch } = useContext(Context);
  const [total, setTotal] = useState(0);

  function removeCartItem(id) {
    dispatch({ type: "remove_item", payload: id });
  }

  function getTotal() {
    let count = 0;
    state.cart.forEach((course) => {
      count = count + course.price;
    });
    setTotal(count);
  }

  useEffect(() => {
    getTotal();
  }, [state]);
  return (
    <>
      <section className="fixed top-0 z-[60] bg-gray-900 bg-opacity-50 w-full min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="bg-white rounded-sm w-full h-screen sm:h-[35rem] p-6 sm:w-[70%] md:w-[55%] relative"
        >
          {state.cart.length > 0 ? (
            <>
              <div className="mb-10 flex justify-between items-center w-full">
                <p className="text-black font-bold text-xl">
                  {state.cart.length} Cart Item
                  {state.cart.length > 1 ? "s" : ""}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-7 cursor-pointer"
                  onClick={() => setShowCart(false)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <div className="overflow-y-scroll h-[65%] py-4">
                {state.cart.map((course) => {
                  return (
                    <div
                      key={course._id}
                      className="flex justify-between gap-2 w-full py-2 border-b border-gray-200"
                    >
                      <div className="flex gap-2 w-[86%]">
                        <img
                          src={courseImg}
                          alt="course"
                          className="block w-[40%]"
                        />
                        <div>
                          <p className="font-semibold">{course.name}</p>
                          <p className="text-[.83rem]">
                            By :&nbsp;
                            {course.tutor.firstname +
                              " " +
                              course.tutor.lastname}
                          </p>
                          <p className="font-bold text-lg">
                            &#8358;{course.price}
                          </p>
                        </div>
                      </div>
                      <p
                        onClick={() => removeCartItem(course._id)}
                        className="text-blue-600 underline text-sm w-auto pr-2 cursor-pointer"
                      >
                        Remove
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4">
                <div>
                  <p className="font-semibold text-gray-600">Total:</p>
                  <p className="font-extrabold text-xl">&#8358;{total}</p>
                </div>
                <Link to={`/cart`}>
                  <button className="bg-blue-600 hover:bg-blue-500 transition-all text-white font-semibold text-lg rounded-sm mt-2 w-full py-2">
                    Checkout
                  </button>
                </Link>
              </div>
            </>
          ) : (
            <div className="my-12 flex items-center justify-center">
              <div className="flex items-center flex-col gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-10 text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>

                <p className="font-semibold text-xl">Cart is empty</p>
                <button
                  onClick={() => {
                    setShowCart(false);
                  }}
                >
                  <p className="text-blue-600 underline cursor-pointer">
                    Get Courses.
                  </p>
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </section>
    </>
  );
};

export default Cart;

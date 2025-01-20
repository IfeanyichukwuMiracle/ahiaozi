import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/AppContext";
import { motion } from "motion/react";

import courseImg from "../../assets/course.webp";

import checkedImg from "../../assets/checked.png";

const Checkout = () => {
  const { state, dispatch } = useContext(Context);
  const [total, setTotal] = useState(0);

  function removeCartItem(id) {
    dispatch({ type: "remove_item", payload: id });
  }

  function emptyCart() {
    dispatch({ type: "empty_cart" });
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
      {/* Header */}
      <header
        className={`sticky top-0 z-50 shadow-lg w-full flex justify-between items-center bg-[#fefefe] sm:py-4 sm:px-6 py-3 px-2`}
      >
        <Link
          to={"/"}
          onClick={() => window.scroll({ top: 0, left: 0, behavior: "smooth" })}
          className="text-black"
        >
          <p className="font-bold text-lg">Infomart</p>
        </Link>
        <button
          onClick={emptyCart}
          className="text-blue-500 font-semibold py-1 px-2 hover:bg-blue-50 transition-all rounded-sm"
        >
          Cancel
        </button>
      </header>

      {/* checkout section */}
      <section className="my-[3.5rem] w-full py-2 px-2 sm:px-6">
        <section className="w-full sm:w-[50%] lg:w-[38%] p-2 mx-auto rounded-md">
          <p style={{ fontFamily: "var(--heading-font)" }} className="mb-4">
            Checkout
          </p>
          <div>
            <p className="font-semibold text-sm w-full py-2 border-b border-gray-200">
              Order Details
            </p>
            <div>
              {state.cart.map((course) => {
                return (
                  <div
                    key={course._id}
                    className="flex sm:flex-row flex-col gap-3 justify-between py-4 border-b border-gray-200"
                  >
                    <div className="flex gap-2 items-center">
                      <div className="w-[8rem] min-w-[7rem]">
                        <img
                          src={courseImg}
                          alt="course_name"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <p className="text-base font-semibold">{course.name}</p>
                        <p className="text-sm">
                          <strong>{course.enrolled}</strong> enrolled!
                        </p>
                        <p className="text-blue-500 font-bold text-lg">
                          &#8358;{course.price}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center flex-row-reverse sm:gap-4">
                      <p
                        onClick={() => removeCartItem(course._id)}
                        className="text-blue-500 text-[.9rem] underline cursor-pointer"
                      >
                        Remove
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="my-3 py-3 px-1 rounded-sm">
            <p className="font-semibold text-sm w-full py-2 mb-3 border-b border-gray-200">
              Order Summary
            </p>
            <p className="font-bold text-gray-800">Total:</p>
            <p className="font-extrabold text-blue-500 text-xl">
              &#8358;{total}
            </p>
          </div>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-500 hover:bg-blue-400 transition-all text-white font-semibold rounded-sm py-2"
          >
            Buy Now!
          </motion.button>
          <div className="flex items-center gap-1 w-max my-1 mx-auto">
            <p className="text-sm font-semibold text-gray-600">
              Secure Flutterwave Checkout
            </p>
            <img src={checkedImg} alt="secure-checkout" className="size-4" />
          </div>
        </section>
      </section>
    </>
  );
};

export default Checkout;

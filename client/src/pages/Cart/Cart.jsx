import { Card, Footer, Header } from "../../components";
import courseImg from "../../assets/course.webp";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/AppContext";

const Cart = () => {
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
      <Header sticky={true} />

      {/* cart container */}
      <section className="py-12 px-2 sm:px-6 sm:relative">
        <p className="font-bold text-3xl mb-12">Shopping Cart</p>

        {/* cart section */}
        {state.cart.length > 0 ? (
          <div className="flex mb-24 sm:flex-row flex-col gap-10 sm:gap-12 justify-between items-start">
            <div className={`w-[100%]`}>
              <p className="py-2 font-semibold border-b border-gray-200">
                {state.cart.length} Course{state.cart.length > 1 ? "s" : ""} in
                cart
              </p>
              <div>
                {state.cart
                  .map((course) => {
                    return (
                      <div
                        key={course._id}
                        className="flex sm:flex-row flex-col gap-3 justify-between py-4 border-b border-gray-200"
                      >
                        <div className="flex gap-4 items-center">
                          <div className="w-[8rem] min-w-[7rem]">
                            <img
                              src={courseImg}
                              alt="course_name"
                              className="w-full"
                            />
                          </div>
                          <div>
                            <p className="text-base font-semibold">
                              {course.name}
                            </p>
                            <p className="text-xs">
                              {course.tutor.firstname +
                                " " +
                                course.tutor.lastname}
                            </p>
                            <div className="flex items-center gap-2 mt-1">
                              <p className="bg-amber-200 text-amber-900 font-semibold rounded-sm py-[.1rem] px-[.2rem] shadow-md text-sm">
                                Latest
                              </p>
                              <p className="text-sm">
                                <strong>{course.enrolled}</strong> enrolled!
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center flex-row-reverse sm:gap-4">
                          <p
                            onClick={() => removeCartItem(course._id)}
                            className="text-blue-500 text-[.95rem] underline cursor-pointer"
                          >
                            Remove
                          </p>
                          <p className="text-blue-600 font-bold text-lg">
                            &#8358;{course.price}
                          </p>
                        </div>
                      </div>
                    );
                  })
                  .reverse()}
              </div>
            </div>
            <div className="sm:sticky sm:top-[5.5rem] w-[100%] sm:w-[30%] border-b border-gray-200">
              <p className="font-semibold text-gray-800">Total:</p>
              <p className="text-2xl sm:text-3xl font-extrabold">
                &#8358;{total}
              </p>
              <Link to={`/checkout`}>
                <button className="bg-blue-600 hover:bg-blue-500 transition-all text-white w-[100%] font-bold my-4 py-2 rounded-sm">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
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
              <Link to={`/`}>
                <p className="text-blue-600 underline">Get Courses.</p>
              </Link>
            </div>
          </div>
        )}

        {/* might like section */}
        <section className="my-6">
          <p className="font-bold text-xl mb-6">You might also like</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {[1, 2, 3].map((course) => {
              return <Card key={course} />;
            })}
          </div>
        </section>

        {/* footer */}
        <Footer />
      </section>
    </>
  );
};

export default Cart;

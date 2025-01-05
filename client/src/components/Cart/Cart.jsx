import { Link } from "react-router-dom";
import courseImg from "../../assets/course.jpg";

const Cart = ({ setShowCart }) => {
  return (
    <>
      <section className="fixed top-0 z-[60] bg-black bg-opacity-70 w-full min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-sm w-full h-screen sm:h-[35rem] overflow-y-scroll p-6 sm:w-[70%] md:w-[55%] relative">
          <div className="mb-4 flex justify-between items-center w-full">
            <p className="text-black font-bold text-xl">{3} Cart Items</p>
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
          <div className="overflow-y-scroll h-[85%]">
            {[1, 2, 3, 4].map((course) => {
              return (
                <div
                  key={course}
                  className="flex justify-between gap-2 w-full py-2 border-b border-gray-200"
                >
                  <div className="flex gap-2 w-[86%]">
                    <img
                      src={courseImg}
                      alt="course"
                      className="block w-[40%]"
                    />
                    <div>
                      <p className="font-semibold">Course name</p>
                      <p className="text-[.83rem]">Tutor&apos;s name</p>
                      <p className="font-bold text-lg">&#8358;90,980</p>
                    </div>
                  </div>
                  <p className="text-blue-600 underline text-sm w-auto pr-2">
                    Remove
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-4">
            <div>
              <p className="font-semibold text-gray-600">Total:</p>
              <p className="font-extrabold text-xl">&#8358;90,980</p>
            </div>
            <Link to={`/cart`}>
              <button className="bg-blue-600 hover:bg-blue-500 transition-all text-white font-semibold text-lg rounded-sm mt-2 w-full py-2">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;

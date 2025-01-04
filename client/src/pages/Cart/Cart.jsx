import { Card, Footer, Header } from "../../components";
import courseImg from "../../assets/course.jpg";

const Cart = () => {
  return (
    <>
      <Header sticky={true} />

      {/* cart container */}
      <section className="py-12 px-2 sm:px-6 sm:relative">
        <p className="font-bold text-3xl mb-12">Shopping Cart</p>

        {/* cart section */}
        <div className="flex mb-24 sm:flex-row flex-col gap-10 sm:gap-12 justify-between items-start">
          <div className="w-[100%]">
            <p className="py-2 font-semibold border-b border-gray-200">
              1 Course in cart
            </p>
            <div>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((course) => {
                return (
                  <div
                    key={course}
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
                          Course name. The highest
                        </p>
                        <p className="text-xs">tutor name</p>
                        <div className="flex items-center gap-2 mt-1">
                          <p className="bg-amber-300 text-amber-700 rounded-sm py-[.1rem] px-[.2rem] shadow-md text-sm">
                            Latest
                          </p>
                          <p className="text-sm">
                            <strong>9000</strong> enrolled!
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center flex-row-reverse sm:gap-4">
                      <p className="text-blue-500 text-[.95rem] underline cursor-pointer">
                        Remove
                      </p>
                      <p className="text-blue-600 font-bold text-lg">
                        &#8358;90,000
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="sm:sticky sm:top-[5.5rem] w-[100%] sm:w-[30%] border-b border-gray-200">
            <p className="font-semibold text-gray-800">Total:</p>
            <p className="text-2xl font-bold">&#8358;90,000</p>
            <button className="bg-blue-600 text-white w-[100%] font-bold my-4 py-2 rounded-sm">
              Checkout
            </button>
          </div>
        </div>

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

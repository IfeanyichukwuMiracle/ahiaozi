import { Card, Footer, Header, Preview } from "../../components";
import courseImg from "../../assets/course-2.webp";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCourseById } from "../../queryFns.js";
import { SpinnerCircular } from "spinners-react";
import { Context } from "../../context/AppContext.jsx";
import toast, { Toaster } from "react-hot-toast";

import { AnimatePresence } from "motion/react";

const Course = () => {
  const { courseId } = useParams();
  const { state, dispatch } = useContext(Context);
  const navigate = useNavigate();
  const [viewPreview, setViewPreview] = useState(false);
  const result = useQuery({
    queryKey: ["courses", courseId],
    queryFn: ({ queryKey }) => getCourseById(queryKey[1]),
  });

  function handleViewPreview() {
    setViewPreview(true);
  }
  function addToCart() {
    const cart = state.cart.find((course) => course._id == courseId);
    if (!cart) {
      dispatch({ type: "add_to_cart", payload: result.data.data.data });
      toast.success("Course Added!");
      return;
    }
    toast.error("Course already in cart!");
  }

  function buyNow() {
    const cart = state.cart.find((course) => course._id == courseId);
    if (!cart) {
      dispatch({ type: "add_to_cart", payload: result.data.data.data });
      toast.success("Course Added!");
      setTimeout(() => navigate("/cart"), 1800);
      return;
    }
    navigate("/cart");
  }

  return (
    <>
      <Toaster />
      <Header sticky={false} />
      <AnimatePresence>
        {viewPreview && <Preview setViewPreview={setViewPreview} key="box" />}
      </AnimatePresence>

      {/* sticky course info */}
      {result?.data?.data && (
        <section className="bg-gray-900 h-max shadow-lg sm:fixed sm:top-0 sm:w-full z-10 text-white py-1 px-6 hidden sm:flex sm:justify-between items-center">
          <div>
            <p className="font-extrabold text-lg">
              {result.data.data.data.name}
            </p>
            <div className="flex gap-6">
              <p className="bg-amber-200 text-amber-900 shadow-md rounded-sm text-[.81rem] font-semibold flex justify-center items-center px-1">
                Bestseller
              </p>
              <p className="text-sm">
                <strong>{result.data.data.data.enrolled}</strong> enrolled!!!
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={addToCart}
              className="py-2 px-2 rounded-md bg-gray-500 font-semibold"
            >
              Add To Cart
            </button>
            <button
              onClick={buyNow}
              className="py-2 px-2 rounded-md bg-blue-600 font-semibold"
            >
              Buy Now!
            </button>
          </div>
        </section>
      )}

      {/* course info section  */}
      <section className="my-6 relative sm:px-6 px-2 py-1">
        {result.isError ? (
          // Error message
          <section className="border border-red-500 text-red-500 bg-red-50 rounded-sm p-4 my-12">
            <p>An Error Occurred while fetching data: Network Error</p>
            <p>Check internet connection and try again</p>
          </section>
        ) : result.isLoading ? (
          // spinner component
          <div className="w-full py-8 my-16 flex items-center justify-center">
            <SpinnerCircular
              size={60}
              thickness={120}
              speed={100}
              color="#3581fc"
              secondaryColor="#fefefe"
            />
          </div>
        ) : (
          <>
            {/* nav links */}
            <div className="flex text-sm mb-6">
              <nav>Courses /&nbsp;</nav>
              <nav>{result.data.data.data.name}</nav>
            </div>
            {/* Hero */}
            <section className="flex sm:items-center lg:gap-[9.8rem] gap-6 sm:gap-5 flex-col sm:flex-row">
              <div className="w-full sm:w-[62%]">
                <p className="text-2xl font-bold mb-4">
                  {result.data.data.data.name}
                </p>
                <p className="text-base sm:text-[1.08rem] mb-4">
                  {result.data.data.data.description}
                </p>
                <div className="flex gap-6 mb-2">
                  <p className="bg-amber-200 text-amber-900 rounded-sm shadow-md text-[.81rem] font-semibold flex justify-center items-center px-1">
                    Bestseller
                  </p>
                  <p className="text-sm">
                    <strong>{result.data.data.data.enrolled}</strong>{" "}
                    enrolled!!!
                  </p>
                </div>
                <p className="text-[.95rem] mb-1">
                  Created by:{" "}
                  <span className="text-blue-600 font-bold">
                    {`${result.data.data.data.tutor.firstname} ${result.data.data.data.tutor.lastname}`}
                  </span>
                </p>
                <p className="text-[.95rem] mb-1 flex items-center gap-1 mt-2">
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
                      d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
                    />
                  </svg>

                  {result.data.data.data.language.toUpperCase()}
                </p>
              </div>
              <div className="w-full sm:w-[38%] bg-[#fefefe] sm:border border-gray-200">
                <div
                  className="relative h-max cursor-pointer"
                  onClick={handleViewPreview}
                >
                  <div className="bg-opacity-40 w-full h-[100%] absolute top-0 flex justify-center items-center text-white font-bold text-xl bg-gray-800">
                    Preview Course
                  </div>
                  <img
                    src={courseImg}
                    alt="course name"
                    className="block w-full"
                  />
                </div>
                <p className="pt-2 pb-2 sm:pb-0 sm:px-4 font-extrabold text-2xl">
                  &#8358; {result.data.data.data.price}
                </p>
                <div className="flex flex-col gap-2 pb-3 sm:pb-2 sm:p-4">
                  <button
                    onClick={addToCart}
                    className="py-2 text-white px-2 rounded-sm bg-blue-600 font-extrabold"
                  >
                    Add To Cart
                  </button>
                  <button
                    onClick={buyNow}
                    className="py-2 px-2 rounded-sm border border-gray-500 font-semibold"
                  >
                    Buy Now
                  </button>
                </div>
                <p className="text-sm text-center -mt-2 mb-4">
                  30-days money back guarantee!
                </p>
              </div>
            </section>
            {/* Course content */}
            <section className="my-10 w-full sm:w-[61%]">
              <p className="font-bold text-xl">Course Content</p>
              <div className="flex gap-2 mt-3 mb-1 text-[.98rem]">
                <p>7 Sections</p>
                <p className="font-bold text-base">28hrs</p>
              </div>
              <ul className="bg-[#fafafa] border border-gray-200 rounded-sm">
                {[1, 2, 3, 4, 5, 6, 7].map((item) => {
                  return (
                    <li
                      key={item}
                      className="p-2 flex items-center justify-between border-b border-gray-200"
                    >
                      <p className="text-[.96rem]">Content</p>
                      <p className="text-sm font-semibold">4hrs</p>
                    </li>
                  );
                })}
              </ul>
            </section>
          </>
        )}
        {/* Also bought */}
        <section className="my-16">
          <p className="text-xl font-bold mb-4">Students also bought</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:grid-cols-4">
            {[1, 2, 3, 4].map((item) => {
              return (
                <Link key={item} to={`/course/${item}`}>
                  <Card />
                </Link>
              );
            })}
          </div>
        </section>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Course;

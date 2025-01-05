import { Card, Footer, Header, Preview } from "../../components";
import courseImg from "../../assets/course-2.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Course = () => {
  const [viewPreview, setViewPreview] = useState(false);
  function handleViewPreview() {
    setViewPreview(true);
  }

  return (
    <>
      <Header sticky={false} />
      {viewPreview && <Preview setViewPreview={setViewPreview} />}

      {/* sticky course info */}
      <section className="bg-gray-900 h-max shadow-lg sm:fixed sm:top-0 sm:w-full z-10 text-white py-1 px-6 hidden sm:flex sm:justify-between items-center">
        <div>
          <p className="font-extrabold text-lg">Course Name 2.0</p>
          <div className="flex gap-6">
            <p className="bg-amber-200 text-amber-900 shadow-md rounded-sm text-[.81rem] font-semibold flex justify-center items-center px-1">
              Bestseller
            </p>
            <p className="text-sm">
              <strong>9,000</strong> enrolled!!!
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="py-2 px-2 rounded-md bg-gray-500 font-semibold">
            Add To Cart
          </button>
          <button className="py-2 px-2 rounded-md bg-blue-600 font-semibold">
            Buy Now!
          </button>
        </div>
      </section>

      {/* course info section  */}
      <section className="my-6 relative sm:px-6 px-2 py-1">
        {/* nav links */}
        <div className="flex text-sm mb-6">
          <nav>Courses /&nbsp;</nav>
          <nav>Category</nav>
        </div>
        {/* Hero */}
        <section className="flex sm:items-center lg:gap-[9.8rem] gap-6 sm:gap-5 flex-col sm:flex-row">
          <div className="w-full sm:w-[62%]">
            <p className="text-2xl font-bold mb-4">Course Name 2.0</p>
            <p className="text-base sm:text-[1.08rem] mb-4">
              Course aim Lorem ipsum dolor sit amet consectetur adipisicing.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis officia voluptatum repudiandae ullam blanditiis in eaque
              dolore eligendi laudantium unde optio dolores doloremque, porro
              asperiores ut. Ad rem atque odio.
            </p>
            <div className="flex gap-6 mb-2">
              <p className="bg-amber-200 text-amber-900 rounded-sm shadow-md text-[.81rem] font-semibold flex justify-center items-center px-1">
                Bestseller
              </p>
              <p className="text-sm">
                <strong>9,000</strong> enrolled!!!
              </p>
            </div>
            <p className="text-[.95rem] mb-1">
              Created by:{" "}
              <span className="text-blue-600 font-bold">{`Tutor's Name`}</span>
            </p>
            <p className="text-[.95rem] mb-1">English</p>
          </div>
          <div className="w-full sm:w-[38%] bg-[#fefefe] sm:border border-gray-200">
            <div
              className="relative h-max cursor-pointer"
              onClick={handleViewPreview}
            >
              <div className="bg-opacity-40 w-full h-[100%] absolute top-0 flex justify-center items-center text-white font-bold text-xl bg-gray-800">
                Preview Course
              </div>
              <img src={courseImg} alt="course name" className="block w-full" />
            </div>
            <p className="pt-2 pb-2 sm:pb-0 sm:px-4 font-extrabold text-2xl">
              &#8358; 90,960
            </p>
            <div className="flex flex-col gap-2 pb-3 sm:pb-2 sm:p-4">
              <button className="py-2 text-white px-2 rounded-sm bg-blue-600 font-extrabold">
                Add To Cart
              </button>
              <button className="py-2 px-2 rounded-sm border border-gray-500 font-semibold">
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

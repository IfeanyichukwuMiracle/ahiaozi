import { Footer, Header } from "../../components";
import learnVid from "../../assets/vid.mp4";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const Learn = () => {
  const { courseId } = useParams();
  const [currentTab, setCurrentTab] = useState("course-content");

  return (
    <>
      <Header />

      {/* video section */}
      <section className="w-full sm:h-[30rem] overflow-hidden relative group mb-4">
        <p className="hidden group-hover:block z-20 text-white p-2 sm:px-6 absolute top-0">
          Course name - module name
        </p>
        <div className="w-full items-center z-10 absolute hidden sm:group-hover:flex top-0 bg-opacity-15 p-2 sm:px-6 bg-gray-800 text-white h-[87%]">
          <div className="w-full flex justify-between">
            <button>prev</button>
            <button>next</button>
          </div>
        </div>
        <video src={learnVid} controls className="w-[100%] h-[100%]" />
      </section>

      {/* nav links */}
      <div className="flex gap-2 py-1 px-2 sm:px-6">
        <nav
          onClick={() => setCurrentTab("course-content")}
          className={`p-1 border-b-2 cursor-pointer ${
            currentTab === "course-content"
              ? "border-blue-500 text-blue-500"
              : "border-[#fefefe] text-black"
          } hover:text-blue-500 font-semibold`}
        >
          Course Content
        </nav>
        <nav
          onClick={() => setCurrentTab("overview")}
          className={`p-1 border-b-2 cursor-pointer ${
            currentTab === "overview"
              ? "border-blue-500 text-blue-500"
              : "border-[#fefefe] text-black"
          } font-semibold hover:text-blue-500`}
        >
          Overview
        </nav>
        <nav
          onClick={() => setCurrentTab("reviews")}
          className={`p-1 border-b-2 cursor-pointer ${
            currentTab === "reviews"
              ? "border-blue-500 text-blue-500"
              : "border-[#fefefe] text-black"
          } font-semibold hover:text-blue-500`}
        >
          Reviews
        </nav>
      </div>

      {/* Course content */}
      {currentTab === "course-content" && (
        <section className="rounded-sm overflow-hidden px-2 sm:px-6 my-8">
          {[1, 2, 3, 4].map((content) => {
            return (
              <div
                key={content}
                className="w-full sm:w-[50%] flex items-center justify-between p-2 bg-gray-50"
              >
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="content" id="content" />
                  <Link
                    to={`/course/learn/${courseId}?module=id-${content}`}
                    onClick={() =>
                      window.scroll({ top: 0, left: 0, behavior: "smooth" })
                    }
                  >
                    <p className="font-medium hover:text-blue-500 text-black">
                      Module name
                    </p>
                  </Link>
                </div>
                <p className="font-semibold text-sm">2hrs</p>
              </div>
            );
          })}
        </section>
      )}

      {/* Overview */}
      {currentTab === "overview" && (
        <section className="rounded-sm overflow-hidden px-2 sm:px-6 my-8">
          <div className=" sm:w-[50%] w-full p-2">
            <p className="font-semibold text-lg mb-1">Course Overview</p>
            <p className="text-base text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, totam cupiditate? Voluptatem, provident possimus
              consequuntur impedit sequi tenetur quo pariatur volupt.
            </p>
          </div>
        </section>
      )}

      {/* Reviews */}
      {currentTab === "reviews" && (
        <section className="rounded-sm flex gap-6 sm:gap-16 flex-col sm:flex-row overflow-hidden px-2 sm:px-6 my-8">
          <form className="w-full sm:w-[50%]">
            <div>
              <textarea
                name="review"
                id="review"
                placeholder="Enter your review"
                rows={4}
                className="w-full p-2 bg-gray-50 rounded-sm"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold py-1 px-2 rounded-sm"
            >
              Send Review
            </button>
          </form>
          <div className="w-full sm:w-[50%] py-2 bg-gray-50 rounded-sm">
            {[1, 2, 3].map((review) => {
              return (
                <div
                  key={review}
                  className="py-1 px-2 border-b border-gray-200"
                >
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-bold text-sm">customer name</p>
                    <p className="text-sm text-gray-600">12-12-12 3:32pm</p>
                  </div>
                  <p className="text-[.9rem] text-gray-700">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    In, eos! Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Doloremque, nesciunt!
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Learn;

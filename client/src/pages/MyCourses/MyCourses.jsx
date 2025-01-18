import { Link } from "react-router-dom";
import { MyCourse, Footer, Header } from "../../components";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import courseImg from "../../assets/course.jpg";

const MyCourses = () => {
  const { type } = useParams();
  const [showCourses, setShowCourses] = useState(false);
  const navigate = useNavigate();

  async function removeWishlistItem() {}

  useEffect(() => {
    if (type === "all-courses") {
      setShowCourses(true);
      return;
    }
    if (type === "wishlist") {
      setShowCourses(true);
      return;
    }
    setShowCourses(false);
    navigate("/404");
  }, [type]);

  if (showCourses) {
    return (
      <>
        <Header />
        {/* banner */}
        <section className="py-9 sm:py-16 px-2 bg-[#fefefe] sm:bg-gray-200 sm:px-6 text-2xl sm:text-3xl">
          <p
            className="font-bold text-gray-950 sm:text-gray-700"
            style={{ fontFamily: "var(--heading-font)" }}
          >
            {type === "all-courses" && "My Learning"}
            {type === "wishlist" && "My Wishlist"}
          </p>
        </section>

        {/* links */}
        <div className="py-2 px-2 sm:px-6 flex items-center gap-3 text-[.95rem]">
          <Link
            to={`/my-courses/all-courses`}
            onClick={() =>
              window.scroll({ top: 0, left: 0, behavior: "smooth" })
            }
          >
            <nav
              className={` cursor-pointer hover:text-blue-500 font-semibold border-b-2 ${
                type === "all-courses"
                  ? "border-blue-500 text-blue-500"
                  : "border-[#fefefe] text-black"
              } p-1`}
            >
              All Courses
            </nav>
          </Link>
          <Link
            to={`/my-courses/wishlist`}
            onClick={() =>
              window.scroll({ top: 0, left: 0, behavior: "smooth" })
            }
          >
            <nav
              className={`p-1 cursor-pointer font-semibold hover:text-blue-500 border-b-2 ${
                type === "wishlist"
                  ? "border-blue-500 text-blue-500"
                  : "border-[#fefefe] text-black"
              } `}
            >
              Wishlist
            </nav>
          </Link>
        </div>

        {/* courses */}
        {type === "all-courses" && (
          <section className="px-2 sm:px-6 my-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {[1, 2, 3].map((course) => {
              return (
                <Link
                  to={`/course/learn/${course}?module=id-1`}
                  onClick={() =>
                    window.scroll({ top: 0, left: 0, behavior: "smooth" })
                  }
                  key={course}
                >
                  <MyCourse completed={true} />
                </Link>
              );
            })}
          </section>
        )}

        {/* Wishlist */}
        {type === "wishlist" && (
          <section className="px-2 sm:px-6 my-6 py-2">
            <div>
              {[1, 2, 3, 4]
                .map((course) => {
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
                            Course #{course}
                          </p>
                          <p className="text-xs">{`tutor's name`}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <p className="bg-amber-200 text-amber-900 font-semibold rounded-sm py-[.1rem] px-[.2rem] shadow-md text-sm">
                              Latest
                            </p>
                            <p className="text-sm">
                              <strong>{2000}</strong> enrolled!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center flex-row-reverse sm:gap-4">
                        <p
                          onClick={() => removeWishlistItem(course._id)}
                          className="text-blue-500 text-[.95rem] underline cursor-pointer"
                        >
                          Remove
                        </p>
                        <p className="text-blue-600 font-bold text-lg">
                          &#8358;{course},000
                        </p>
                      </div>
                    </div>
                  );
                })
                .reverse()}
            </div>
          </section>
        )}

        {/* Footer */}
        <Footer />
      </>
    );
  }
};

export default MyCourses;

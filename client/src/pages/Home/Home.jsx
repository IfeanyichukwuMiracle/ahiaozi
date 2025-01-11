import { Header, Card, Footer } from "../../components";
import { SpinnerCircular } from "spinners-react";
import heroImg from "../../assets/home_img.jpg";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../../queryFns.js";

import course_img from "../../assets/course.jpg";

import profile from "../../assets/profile.jpg";
import profile2 from "../../assets/profile-1.jpg";
import profile3 from "../../assets/profile-2.jpg";

const Home = () => {
  const result = useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
  });

  return (
    <>
      <Header sticky={true} />

      {/* hero section */}
      <section className="px-2 sm:px-6 py-[4rem] flex items-center flex-col sm:flex-row gap-10">
        <div className="sm:w-[60%] w-full">
          <p
            className="font-extrabold text-2xl sm:text-3xl mb-3"
            style={{ fontFamily: "var(--heading-font)" }}
          >
            Udemy But For Relevant High Income Skills
          </p>
          <p className="text-base">
            Whether you&apos;re a customer/learner, an affiliate or tutor,
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            labore deserunt odio.
          </p>
          <div className="my-4 flex items-center gap-2">
            <div className="flex">
              <img
                src={profile}
                alt="legit tutor"
                className="size-8 rounded-full border-2 border-[#fefefe] "
                loading="lazy"
              />
              <img
                src={profile2}
                alt="legit tutor"
                className="size-8 ml-[-1.2rem] rounded-full border-2 border-[#fefefe] "
                loading="lazy"
              />
              <img
                src={profile3}
                alt="legit tutor"
                className="size-8 ml-[-1.2rem] rounded-full border-2 border-[#fefefe] "
                loading="lazy"
              />
            </div>
            <p className="text-sm">
              <strong>70+</strong> Customers | <strong>25+</strong> Affiliates
              |&nbsp;
              <strong>30+</strong> Tutors
            </p>
          </div>
          <button className="bg-blue-500 text-white font-semibold py-1 px-2 rounded-sm mt-4">
            Start Learning
          </button>
        </div>
        <div className="sm:w-[40%] w-full relative">
          <img
            src={heroImg}
            alt="a happy learner"
            className="block w-full rounded-sm shadow-lg"
            loading="lazy"
          />
        </div>
      </section>

      {/* categories */}
      <section className="w-full px-2 py-4 sm:px-6 my-8 sm:my-16 bg-[#fcfcfc] text-sm flex flex-wrap gap-2 justify-center">
        {[1, 2, 3, 4, 5, 6].map((category) => {
          return (
            <nav
              key={category}
              className="py-1 px-2 rounded-full bg-gray-50 border border-gray-200 w-max text-gray-500 cursor-pointer hover:border-blue-200 hover:text-blue-500 hover:bg-blue-50 transition-all"
            >
              Category {category}
            </nav>
          );
        })}
      </section>

      {/* Courses list */}
      <section className="px-2 sm:px-6 my-4">
        <p className="font-extrabold text-xl sm:text-2xl mb-4">
          Recommended For You
        </p>
        {result.isError ? (
          <section className="border border-red-500 text-red-500 bg-red-50 rounded-sm p-4 my-12">
            <p>An Error Occurred while fetching data: Network Error</p>
            <p>Check internet connection and try again</p>
          </section>
        ) : result.isLoading ? (
          <div className="w-full py-4 my-8 flex items-center justify-center">
            <SpinnerCircular
              size={60}
              thickness={120}
              speed={120}
              color="#3581fc"
              secondaryColor="#fdfdfd"
            />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:grid-cols-4">
              {result?.data?.data?.data?.length > 0 ? (
                result?.data.data.data.map((course) => {
                  return (
                    <Link key={course._id} to={`/course/${course._id}`}>
                      <Card {...course} />
                    </Link>
                  );
                })
              ) : (
                <p className="py-4 my-4">No courses!</p>
              )}
            </div>
            {result?.data?.data?.data?.length > 0 && (
              <div className="my-12 flex gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-7 sm:size-8 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-7 sm:size-8 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            )}
          </>
        )}
      </section>

      {/* Trending */}
      <section className="px-2 sm:px-6 my-16 py-2">
        <p className="font-extrabold text-xl sm:text-2xl mb-4">Trending ⚡</p>
        <div className="flex gap-8 mt-5 flex-col-reverse sm:flex-row items-center">
          <img
            src={course_img}
            alt="trending course"
            className="block w-full rounded-sm shadow-lg hover:scale-[1.01] hover:shadow-xl transition-all cursor-pointer "
          />
          <div className="w-full">
            <p className="font-extrabold text-2xl mb-3">
              Digital Marketing Fundamentals
            </p>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perspiciatis voluptatibus iure id exercitationem enim? Eligendi
              porro facilis aliquam perspiciatis totam!
            </p>
            <button className="bg-blue-500 text-white font-semibold py-1 px-2 rounded-sm">
              View Course
            </button>
          </div>
        </div>
      </section>

      {/* Affiliate Signup */}
      <section className="px-2 sm:px-6 py-2">
        <div className="bg-blue-50 p-4 rounded-sm shadow-lg">
          <p className="font-bold text-xl sm:text-2xl mb-3">
            Signup as an Affiliate
          </p>
          <p className="mb-3">
            Every course on infomart is created by an expert in their field,
            refer courses to people - courses that are guaranteed to increase
            theri earning capacity - and <strong>earn</strong>
          </p>
          <button className="bg-blue-500 text-white font-semibold py-1 px-2 rounded-sm mt-3">
            Signup as an Affiliate
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;

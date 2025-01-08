import { Header, Card, Footer } from "../../components";
import { SpinnerCircular } from "spinners-react";
import heroImg from "../../assets/home-img.jpg";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../../queryFns.js";

const Home = () => {
  const result = useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
  });

  return (
    <>
      <Header sticky={true} />

      {/* hero section */}
      <section className="w-full relative mb-24 sm:mb-16" id="hero">
        <div
          id="hero-card"
          className="max-w-[25rem] w-[40%] min-w-[11rem] shadow-xl top-[20%] left-[3%]  sm:top-[25%] sm:left-[5%] p-4 absolute bg-[#fefefe] rounded-md"
        >
          <p
            className="font-extrabold mb-1 text-xl sm:text-[1.5rem]"
            style={{ fontFamily: "var(--heading-font)" }}
          >
            Learn to Earn !!
          </p>
          <p className="text-[.93rem] mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button className="bg-blue-500 rounded-md py-1 px-2 text-[.95rem] font-semibold text-white">
            Start Learning
          </button>
        </div>
        <img
          src={heroImg}
          className="block w-full top-0"
          alt="people learning skills"
        />
      </section>

      {/* Hero text */}
      <div id="hero-text">
        <p
          className="font-extrabold mb-1 text-2xl"
          style={{ fontFamily: "var(--heading-font)" }}
        >
          Learn to Earn !!
        </p>
        <p className="text-[.93rem] mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button className="bg-blue-500 rounded-md py-1 px-2 text-[.95rem] font-semibold text-white">
          Start Learning
        </button>
      </div>

      {/* Courses list */}
      <section className="px-2 sm:px-6">
        <p className="font-extrabold text-xl sm:text-2xl mb-4 sm:mb-6">
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
              speed={100}
              color="blue"
              secondaryColor="#ebebeb"
            />
          </div>
        ) : (
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
        )}
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;

import { Header, Card, Footer } from "../../components";

import heroImg from "../../assets/home-img.jpg";
import { Link } from "react-router-dom";

const Home = () => {
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
            className="font-extrabold mb-1 text-lg"
            style={{ fontFamily: "var(--heading-font)" }}
          >
            Relevant Skills At Your Fingertips
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
          className="font-extrabold mb-1 text-lg"
          style={{ fontFamily: "var(--heading-font)" }}
        >
          Relevant Skills At Your Fingertips
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
        <p className="font-extrabold text-2xl sm:text-3xl mb-4 sm:mb-6">
          Recommended For You
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:grid-cols-4">
          {[1, 2, 3, 4, 5].map((item) => {
            return (
              <Link key={item} to={`/course/${item}`}>
                <Card />
              </Link>
            );
          })}
        </div>
      </section>
      <section className="mt-16 px-2 sm:px-6">
        <p className="font-extrabold text-2xl sm:text-3xl mb-4 sm:mb-6">
          Trending
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:grid-cols-4">
          {[1, 2, 3, 4, 5].map((item) => {
            return <Card key={item} />;
          })}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;

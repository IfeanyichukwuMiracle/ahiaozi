import { Card, Footer, Header } from "../../components";

const MyCourses = () => {
  return (
    <>
      <Header />

      {/* banner */}
      <section className="py-9 sm:py-16 px-2 bg-[#fefefe] sm:bg-gray-200 sm:px-6 text-2xl sm:text-3xl">
        <p
          className="font-bold text-gray-950 sm:text-gray-700"
          style={{ fontFamily: "var(--heading-font)" }}
        >
          My Learning
        </p>
      </section>

      {/* links */}
      <div className="py-2 px-2 sm:px-6 flex gap-3 text-[.95rem]">
        <nav className={`text-blue-600 font-bold`}>All Courses</nav>
        <nav>Wishlist</nav>
      </div>

      {/* courses */}
      <section className="px-2 sm:px-6 my-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
        {[1, 2, 3].map((course) => {
          return <Card key={course} />;
        })}
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default MyCourses;

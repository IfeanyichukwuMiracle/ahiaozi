import { Footer, Header } from "../../components";
import learnVid from "../../assets/vid.mp4";

const Learn = () => {
  return (
    <>
      <Header />

      {/* video section */}
      <section className="w-full sm:h-[30rem] overflow-hidden relative group mb-4">
        <p className="hidden group-hover:block z-20 text-white p-2 sm:px-6 absolute top-0">
          Course name - module name
        </p>
        <div className="w-full items-center z-10 absolute hidden sm:group-hover:flex top-0 bg-opacity-30 p-2 sm:px-6 bg-gray-900 text-white h-[87%]">
          <div className="w-full flex justify-between">
            <button>prev</button>
            <button>next</button>
          </div>
        </div>
        <video src={learnVid} controls className="w-[100%] h-[100%]" />
      </section>

      {/* nav links */}
      <div className="flex gap-1 py-1 px-2 sm:px-6">
        <nav className="bg-blue-50 rounded-sm py-1 px-3 text-blue-600 font-bold">
          Course Content
        </nav>
        <nav className="py-1 px-3">Overview</nav>
        <nav className="py-1 px-3">Reviews</nav>
      </div>

      {/* Course content */}
      <section className="rounded-sm overflow-hidden px-2 sm:px-6 my-8">
        {[1, 2, 3, 4].map((content) => {
          return (
            <div
              key={content}
              className="w-full sm:w-[50%] flex items-center justify-between p-2 bg-gray-50"
            >
              <div className="flex items-center gap-2">
                <input type="checkbox" name="content" id="content" />
                <p>Module name</p>
              </div>
              <p className="font-semibold text-sm">2hrs</p>
            </div>
          );
        })}
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Learn;

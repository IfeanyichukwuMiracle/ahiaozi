import { motion } from "motion/react";

const Search = ({ setShowSearch }) => {
  return (
    <>
      <section className="fixed top-0 z-[60] bg-gray-900 bg-opacity-50 w-full min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="bg-white rounded-sm w-full h-screen sm:h-[35rem] p-6 sm:w-[70%] md:w-[55%] relative"
        >
          <div className="mb-10 flex justify-between items-center w-full">
            <p className="text-black font-bold text-xl">
              Whatcha Looking Fo&apos;
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7 cursor-pointer"
              onClick={() => setShowSearch(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
          <form className="py-1 flex gap-2 justify-between">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Enter Search"
              className="w-[80%] block rounded-sm px-2 bg-gray-50"
            />
            <button
              type="submit"
              className="w-[20%] flex items-center justify-center gap-1 bg-blue-500 py-2 px-2 rounded-sm text-white font-semibold"
            >
              <p className="hidden sm:block">Search</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </form>
        </motion.div>
      </section>
    </>
  );
};

export default Search;

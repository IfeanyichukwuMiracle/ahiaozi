const Menu = ({ setShowMenu, showMenu }) => {
  return (
    <>
      <section
        className={`flex flex-col max-w-[17rem] fixed top-0 ${
          showMenu ? `right-0` : `-right-[18rem]`
        } transition-all z-[60] p-4 bg-[#fefefe] sm:hidden shadow-2xl min-w-[16rem] h-screen justify-between`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 absolute top-4 right-2 cursor-pointer"
          onClick={() => setShowMenu(false)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>

        <div className="flex flex-col mt-7 gap-2">
          <nav>Link</nav>
          <nav>Link</nav>
          <nav>Link</nav>
          <nav>Link</nav>
        </div>
        <div>
          <button className="bg-blue-600 hover:bg-blue-500 transition-all text-white font-semibold w-full py-1 rounded-sm">
            Button
          </button>
        </div>
      </section>
    </>
  );
};

export default Menu;

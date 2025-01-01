import { Link } from "react-router-dom";

const Header = ({ sticky }) => {
  return (
    <>
      {/* header */}
      <header
        className={`${
          sticky ? "sticky top-0" : "relative"
        } z-50 shadow-lg w-full flex justify-between items-center bg-[#fefefe] sm:py-4 sm:px-6 py-3 px-2`}
      >
        <p className="font-bold text-lg">Infomart</p>
        <div className="sm:flex sm:gap-4 hidden">
          <nav>Courses</nav>
          <nav>Affiliates</nav>
          <nav>Tutors</nav>
          <nav>
            <Link to={`/auth/signup`} style={{ color: "black" }}>
              Sign up
            </Link>
          </nav>
        </div>
        <Link to={`/auth/signup`}>
          <button className="hidden sm:block border-[1.95px] py-1 px-2 text-blue-500 hover:bg-blue-50 transition-all border-blue-500 rounded-md">
            Sign up
          </button>
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.7}
          stroke="currentColor"
          className="size-6 sm:hidden block cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </header>
    </>
  );
};

export default Header;

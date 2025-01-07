import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <section className="hidden sm:flex flex-col justify-between h-screen sticky min-w-[14rem] max-w-[15rem] p-5 bg-[#fefefe] border-r border-gray-200 top-0 left-0">
      <div>
        <Link to={`/`}>
          <p className="font-bold text-lg mb-6 text-blue-600">Infomart</p>
        </Link>
        <div className="flex flex-col gap-4">
          <nav>Overview</nav>
          <nav>Courses</nav>
          <nav>Marketplace</nav>
          <nav>Add Course</nav>
          <nav>Settings</nav>
        </div>
      </div>
      <button className="bg-red-500 text-white font-semibold w-full pt-1 pb-2 rounded-sm">
        Logout
      </button>
    </section>
  );
};

export default Sidebar;

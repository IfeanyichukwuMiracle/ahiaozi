import { Link } from "react-router-dom";
import { tutor_navs, affiliate_navs } from "../../dashboard_nav";
import { useContext } from "react";
import { Context } from "../../context/AppContext";

const Sidebar = ({ dashboardNav }) => {
  const { state } = useContext(Context);

  return (
    <section className="hidden sm:flex flex-col justify-between h-screen sticky min-w-[14rem] max-w-[15rem] p-5 bg-[#fefefe] border-r border-gray-200 top-0 left-0">
      <div>
        <Link to={`/`}>
          <p className="font-bold text-lg mb-8 text-blue-600">Infomart</p>
        </Link>
        <div className="flex flex-col gap-6">
          {state.role === "tutor" &&
            tutor_navs.map((nav) => {
              return (
                <Link key={nav} to={`/dashboard/${nav}`}>
                  <nav
                    className={`${
                      dashboardNav === nav ? "text-blue-600" : "text-black"
                    } capitalize cursor-pointer transition-all hover:text-blue-600 w-max py-1 px-2 rounded-sm`}
                  >
                    {nav.split("-").join(" ")}
                  </nav>
                </Link>
              );
            })}
          {state.role === "affiliate" &&
            affiliate_navs.map((nav) => {
              return (
                <Link key={nav} to={`/dashboard/${nav}`}>
                  <nav
                    className={`${
                      dashboardNav === nav ? "text-blue-600" : "text-black"
                    } capitalize cursor-pointer transition-all hover:text-blue-600 w-max py-1 px-2 rounded-sm`}
                  >
                    {nav.split("-").join(" ")}
                  </nav>
                </Link>
              );
            })}
        </div>
      </div>
      <button className="bg-red-500 text-white font-semibold w-full pt-1 pb-2 rounded-sm">
        Logout
      </button>
    </section>
  );
};

export default Sidebar;

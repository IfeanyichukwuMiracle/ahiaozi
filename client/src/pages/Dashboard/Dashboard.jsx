import { useContext, useEffect, useState } from "react";
import { Footer, Form, Sidebar } from "../../components";
import Menu from "../../components/Menu/Menu";
import { Context } from "../../context/AppContext";
import { Link, useParams } from "react-router-dom";
import { tutor_navs, affiliate_navs } from "../../dashboard_nav";
import {MarketCard} from "../../components"

import { motion, AnimatePresence } from "motion/react";

const Dashboard = () => {
  const { dashboardNav } = useParams();
  const [showMenu, setShowMenu] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, [dashboardNav]);

  return (
    <DashboardNavProtector>
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />

      <section className="w-full flex relative">
        <Sidebar dashboardNav={dashboardNav} setShowMenu={setShowMenu} />
        <section className="py-5 w-full overflow-x-hidden px-2 sm:px-6">
          {/* banner */}
          <div className="flex items-center justify-between pb-3 border-b border-gray-200 relative">
            {/* settings */}
            <AnimatePresence>
              {showSettings && <Settings key={"hello"} />}
            </AnimatePresence>
            <p className="font-bold text-xl sm:text-2xl flex items-center gap-3">
              {/* ettings icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="block sm:hidden size-6 sm:size-7 cursor-pointer"
                onClick={() => setShowSettings(!showSettings)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              Good Evening, Mike 😁
            </p>
            <div className="flex items-center gap-2">
              {/* ettings icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="hidden sm:block size-6 sm:size-7 cursor-pointer"
                onClick={() => setShowSettings(!showSettings)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              {/* menu icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.7}
                stroke="currentColor"
                className="size-6 sm:hidden block cursor-pointer"
                onClick={() => setShowMenu(true)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </div>
          {/* overview */}
          {dashboardNav === "overview" && (
            <>
              <div className="w-full items-start grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-4 my-8">
                <div className="p-4 shadow-lg rounded-md">
                  <div className="flex items-center gap-2 mb-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 sm:size-7 text-blue-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                      />
                    </svg>
                    <p>Total Earnings</p>
                  </div>
                  <p className="font-bold text-3xl">&#8358;80,856</p>
                  <p className="font-semibold text-gray-300 text-sm">
                    Updated few mins ago
                  </p>
                </div>
                <div className="p-4 shadow-lg rounded-md">
                  <div className="flex items-center gap-2 mb-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 sm:size-7 text-blue-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>

                    <p>Number Of Sales</p>
                  </div>
                  <p className="font-bold text-3xl">13</p>
                  <p className="font-semibold text-gray-300 text-sm">
                    Updated few mins ago
                  </p>
                </div>
                <div className="p-4 shadow-lg rounded-md">
                  <div className="flex items-center gap-2 mb-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 sm:size-7 text-blue-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                      />
                    </svg>

                    <p>Next Payout</p>
                  </div>
                  <p className="font-bold text-3xl">&#8358;80,856</p>
                  <button className="mt-4 bg-blue-600 hover:bg-blue-500 transition-all text-white font-bold w-full py-2 rounded-sm">
                    Withdraw
                  </button>
                </div>
              </div>
              <div className="p-4 h-[20rem] w-full my-12 shadow-lg rounded-md">
                <div className="flex items-center gap-2 mb-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 sm:size-7 text-blue-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9 14.25 6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                  <p>Recent Transaction</p>
                </div>
                <div className="overflow-y-scroll h-[70%]">
                  <p className="text-sm text-slate-500">
                    No recent transactions!
                  </p>
                </div>
              </div>
            </>
          )}
          {/* tutors courses */}
          {dashboardNav === "courses" && (
            <>
              <section className="py-2 w-full my-6 overflow-x-scroll">
                <table className="w-full min-w-[60rem] ">
                  <tr className="border-b border-gray-200 text-left mb-4">
                    <th className="py-2">Name</th>
                    <th>Price</th>
                    <th>Desc.</th>
                    <th>Edit/Delete</th>
                  </tr>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((course) => {
                    return (
                      <tr key={course} className="border-b border-gray-200">
                        <td className="text-base py-2 bg-gray-50 px-2">
                          How to run faceboook ads #{course}...
                        </td>
                        <td className="text-base px-2">&#8358;90,000</td>
                        <td className="text-base px-2 bg-gray-50 ">
                          Lorem ipsum dolor sit amet...
                        </td>
                        <td className="px-2 py-2 flex gap-2 items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6 hover:text-green-400 transition-all"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6 hover:text-red-400 transition-all"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </td>
                      </tr>
                    );
                  })}
                </table>
              </section>
              <div className="flex justify-between items-center mt-10">
                <div className="flex items-center gap-1 hover:bg-[#fbfbfb] transition-all py-1 px-2 rounded-sm cursor-pointer hover:shadow-sm">
                  {/* prev icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                    />
                  </svg>
                  <p className="text-[.92rem]">Previous</p>
                </div>
                <div className="flex items-center gap-1 hover:bg-[#fbfbfb] transition-all py-1 px-2 rounded-sm cursor-pointer hover:shadow-sm">
                  {/* next icon */}
                  <p className="text-[.92rem]">Next</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
                    />
                  </svg>
                </div>
              </div>
            </>
          )}
          {/* add course page */}
          {dashboardNav === "add-course" && <Form />}
          {/* marketplace */}
          {dashboardNav === "marketplace" && (
            <>
              <section className="w-full py-8 grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-8">
                {[1,2,3,4,5,6].map(course => {
                  return <MarketCard key={course} id={course} />                 
                })}
              </section>
              <div className="flex justify-between items-center mt-10">
                <div className="flex items-center gap-1 hover:bg-[#fbfbfb] transition-all py-1 px-2 rounded-sm cursor-pointer hover:shadow-sm">
                  {/* prev icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                    />
                  </svg>
                  <p className="text-[.92rem]">Previous</p>
                </div>
                <div className="flex items-center gap-1 hover:bg-[#fbfbfb] transition-all py-1 px-2 rounded-sm cursor-pointer hover:shadow-sm">
                  {/* next icon */}
                  <p className="text-[.92rem]">Next</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
                    />
                  </svg>
                </div>
              </div>
            </>
          )}
        </section>
      </section>

      {/* Footer */}
      <Footer />
    </DashboardNavProtector>
  );
};

function Settings() {
  const { state } = useContext(Context);
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      key={"box"}
      className="bg-[#fefefe] shadow-md rounded-sm absolute -bottom-[10.2rem] left-3 sm:left-[69%] lg:left-[80%] w-max"
    >
      <Link to={`/profile/userId`}>
        <p className="px-3 py-2 cursor-pointer hover:bg-gray-50 transition-all flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          Profile
        </p>
      </Link>
      <p className="px-3 py-2 cursor-pointer border-gray-100 border-t hover:bg-gray-50 transition-all flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
          />
        </svg>
        Switch to Customer
      </p>
      {state.role === "tutor" && (
        <p className="px-3 py-2 cursor-pointer border-t border-gray-100 border-b hover:bg-gray-50 transition-all flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
            />
          </svg>
          Switch to Affiliate
        </p>
      )}
      {state.role === "affiliate" && (
        <p className="px-3 py-2 cursor-pointer border-t border-gray-100 border-b hover:bg-gray-50 transition-all flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
            />
          </svg>
          Switch to Tutor
        </p>
      )}
      <p className="text-red-500 px-3 py-2 cursor-pointer hover:bg-gray-50 transition-all flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
          />
        </svg>
        Logout
      </p>
    </motion.div>
  );
}

function DashboardNavProtector({ children }) {
  const [showPage, setShowPage] = useState(false);
  const { dashboardNav } = useParams();
  const { state } = useContext(Context);

  useEffect(() => {
    const isNavValid = tutor_navs.find((nav) => nav === dashboardNav);
    const isNavValid2 = affiliate_navs.find((nav) => nav === dashboardNav);
    if (state.role === "tutor" && !isNavValid) {
      window.location.href = "/404";
      return;
    } else if (state.role === "affiliate" && !isNavValid2) {
      window.location.href = "/404";
      return;
    } else {
      setShowPage(true);
    }
  }, [dashboardNav]);

  if (showPage) return <>{children}</>;
}

export default Dashboard;

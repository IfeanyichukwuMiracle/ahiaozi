import { useState } from "react";
import { Footer, Header } from "../../components";

import { motion, AnimatePresence } from "motion/react";

const Profile = () => {
  const [profile, setProfile] = useState("personal");
  const [updatePassword, setUpdatePassword] = useState(false);

  return (
    <>
      <AnimatePresence>
        {updatePassword && (
          <UpdatePassword key={"box"} setUpdatePassword={setUpdatePassword} />
        )}
      </AnimatePresence>

      {/* password update */}
      <section
        onClick={() => setUpdatePassword(true)}
        className={`fixed bottom-[1rem] p-2 group hover:bg-blue-600 transition-all rounded-full shadow-xl cursor-pointer flex items-center justify-center right-[1rem] bg-blue-500 text-white`}
      >
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
            />
          </svg>
          <p className="hidden group-hover:block font-semibold">
            Update Password
          </p>
        </div>
      </section>

      {/* Header */}
      <Header />

      {/* Profile section */}
      <section className="py-10 px-2 sm:px-6 my-10 w-full flex flex-col items-center justify-center">
        <form className="bg-[#fefefe] p-4 rounded-md shadow-md w-[70%] min-w-[21rem] sm:w-[40%] sm:max-w-[25rem] ">
          {profile === "bank" && (
            <>
              <p className="font-bold text-xl mb-3">Bank Details</p>
              <div>
                <input
                  type="number"
                  name="accountNumber"
                  id="accountNumber"
                  placeholder="Acct. Number"
                  className="bg-gray-50 py-2 w-full px-4 rounded-md mb-2"
                />
              </div>
              <div>
                <select
                  name="bankName"
                  id="bankName"
                  className="bg-gray-50 py-2 w-full px-4 rounded-md mb-2"
                >
                  <option value="">--Select Bank--</option>
                  <option value="zenith">Zenith Bank</option>
                  <option value="zenith">Providus Bank</option>
                  <option value="zenith">United Bank of Africa</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-500 hover:bg-blue-400 transition-all mt-6 py-2 rounded-md font-bold"
              >
                Update Bank Details
              </button>
            </>
          )}
          {profile === "personal" && (
            <>
              <p className="font-bold text-xl mb-3">Personal Details</p>
              <div>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="Firstname"
                  className="bg-gray-50 py-2 w-full px-4 rounded-md mb-2"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Lastname"
                  className="bg-gray-50 py-2 w-full px-4 rounded-md mb-2"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="bg-gray-50 py-2 w-full px-4 rounded-md mb-2"
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-500 hover:bg-blue-400 transition-all mt-6 py-2 rounded-md font-bold"
              >
                Update Personal Details
              </button>
            </>
          )}
        </form>
        <div className="flex my-8 bg-gray-100 text-gray-600 rounded-md overflow-hidden">
          <p
            onClick={() => setProfile("personal")}
            className={`flex gap-1 items-center py-1 px-2 cursor-pointer ${
              profile === "personal" && "bg-blue-50 text-blue-500"
            } hover:bg-blue-50 hover:text-blue-500 transition-all font-semibold`}
          >
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
            Personal Details
          </p>
          <p
            onClick={() => setProfile("bank")}
            className={`flex gap-1 items-center py-1 px-2 cursor-pointer ${
              profile === "bank" && "bg-blue-50 text-blue-500"
            } hover:bg-blue-50 hover:text-blue-500 transition-all font-semibold`}
          >
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
                d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
              />
            </svg>
            Bank Details
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

function UpdatePassword({ setUpdatePassword }) {
  const [isPwd, setIsPwd] = useState(false);

  function submitPassword(e) {
    e.preventDefault();
    if (!isPwd) {
      setIsPwd(true);
      return;
    }
    alert("New Password submitted");
    setUpdatePassword(false);
  }

  return (
    <>
      <section className="fixed flex p-2 sm:p-6 items-center justify-center z-[100] top-0 w-full bg-gray-900 bg-opacity-50 h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="bg-[#fefefe] p-4 rounded-sm w-full sm:w-[50%] sm:min-w-[20rem] shadow-md relative"
        >
          <svg
            onClick={() => setUpdatePassword(false)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 absolute -top-7 text-white right-0 sm:-right-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
          <p className="text-lg font-semibold mb-3">Password Update</p>
          <form>
            <div className={`${isPwd && "mb-2"}`}>
              <input
                type="password"
                name="current_password"
                id="password"
                placeholder="Current Password"
                className="bg-gray-100 w-full p-2 rounded-sm"
                disabled={isPwd}
              />
            </div>
            {isPwd && (
              <div className="mb-2">
                <input
                  type="password"
                  name="new_password"
                  id="password"
                  placeholder="New Password"
                  className="bg-gray-100 w-full p-2 rounded-sm"
                />
              </div>
            )}
            <button
              onClick={submitPassword}
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-400 transition-all text-white font-semibold py-2 rounded-sm mt-4"
            >
              {isPwd ? "Update Password" : "Verify Password"}
            </button>
          </form>
        </motion.div>
      </section>
    </>
  );
}

export default Profile;

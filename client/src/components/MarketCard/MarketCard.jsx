import course_img from "../../assets/course.webp";
import { motion } from "motion/react";

import toast, { Toaster } from "react-hot-toast";

const MarketCard = ({ id }) => {
  function copyLink() {
    navigator.clipboard.writeText(`https://link-${id}-copied.com/`);
    toast.success("Affiliate Link Copied!");
  }

  return (
    <>
      <Toaster />
      <div className="w-full">
        <img
          src={course_img}
          alt="course name"
          className="block w-full"
          loading="lazy"
        />
        <div>
          <p className="font-bold text-lg">Course name</p>
          <p className="text-[.8rem] text-gray-600">James Ibori</p>
          <div className="text-sm">
            <strong>1,500</strong> enrolled
          </div>
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg sm:text-xl">&#8358;80,000</p>
            <p className="text-base bg-violet-200 w-max text-violet-900 font-semibold shadow-md rounded-sm py-[.1rem] px-1">
              30%
            </p>
          </div>
        </div>
        <motion.button
          onClick={copyLink}
          animate={{ scale: 1 }}
          whileTap={{ scale: 0.96 }}
          className="mt-2 w-full flex items-center justify-center gap-1 bg-blue-500 hover:bg-blue-400 transition-all text-white py-2 rounded-sm text-semibold"
        >
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
              d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
            />
          </svg>
          <p>Copy Link</p>
        </motion.button>
      </div>
    </>
  );
};

export default MarketCard;

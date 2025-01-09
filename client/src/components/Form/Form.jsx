import { useEffect, useState } from "react";

const Form = () => {
  const [moduleArray, setModuleArray] = useState([1]);

  function increaseModule() {
    setModuleArray((prevArr) => {
      return [...prevArr, prevArr[prevArr.length - 1] + 1];
    });
  }

  async function createCourse(e) {
    e.preventDefault();
  }

  useEffect(() => {}, [moduleArray]);

  return (
    <>
      <section className="py-2 w-full my-6">
        <form className="w-full">
          <div className="mb-4">
            <label htmlFor="name" className="text-[.95rem]">
              Course Name<span className="text-red-600">*</span>
            </label>
            <input
              className="block rounded-sm py-2 px-2 w-full mt-1 bg-[#fafafa]"
              type="text"
              name="name"
              id="name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="text-[.95rem]">
              Course Description<span className="text-red-600">*</span>
            </label>
            <textarea
              required
              rows={4}
              name="description"
              id="description"
              className="block rounded-sm py-2 px-2 w-full mt-1 bg-[#fafafa]"
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="text-[.95rem]">
              Course Price (&#8358;)
              <span className="text-red-600">*</span>
            </label>
            <input
              className="block rounded-sm py-2 px-2 w-full mt-1 bg-[#fafafa]"
              type="number"
              name="price"
              id="price"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="commission" className="text-[.95rem]">
              Commission (%)
            </label>
            <input
              className="block rounded-sm py-2 px-2 w-full mt-1 bg-[#fafafa]"
              type="number"
              name="commission"
              id="commission"
              required
            />
          </div>
          <div className="mb-4 mt-8">
            <label
              htmlFor="thumbnail"
              className="text-[.95rem] flex items-center gap-2 border border-blue-500 text-blue-500 hover:bg-blue-50 transition-all p-1 rounded-sm cursor-pointer w-max"
            >
              <p>Course Thumbnail</p>
              <div className="flex">
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
                    d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                  />
                </svg>
                <span className="text-red-500">*</span>
              </div>
            </label>
            <input
              className="hidden rounded-sm py-2 px-2 w-full mt-1 bg-[#fafafa]"
              type="file"
              name="thumbnail"
              id="thumbnail"
              required
            />
          </div>
          <div className="mb-4 mt-8">
            {moduleArray.map((module) => {
              return (
                <div key={module} className="mb-4">
                  <label htmlFor={"module-" + module} className="text-[.95rem]">
                    Module {module}
                    <span className="text-red-600">*</span>
                  </label>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 justify-between">
                    <input
                      className="block rounded-sm w-full sm:w-[80%] py-2 px-2 mt-1 bg-[#fafafa]"
                      type="text"
                      name={"module-" + module}
                      id={"module-" + module}
                      required
                    />
                    <div className="w-max sm:w-[20%] h-max">
                      <label
                        htmlFor={"module-video" + module}
                        className="block w-full text-center text-[.95rem] border border-blue-500 text-blue-500 hover:bg-blue-50 transition-all py-[.2rem] sm:py-[.55rem] px-2 rounded-sm cursor-pointer"
                      >
                        Video {module}
                      </label>
                      <input
                        className="hidden rounded-sm py-2 px-2 w-full mt-1 bg-[#fafafa]"
                        type="file"
                        name={"module-video" + module}
                        id={"module-video" + module}
                        required
                      />
                    </div>
                  </div>
                </div>
              );
            })}
            <p
              onClick={increaseModule}
              className="bg-blue-500 flex items-center gap-1 text-[.95rem] text-white w-max py-1 px-2 rounded-sm cursor-pointer"
            >
              Add a module
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
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </p>
          </div>
          {/* submit button */}
          <button
            type="submit"
            onClick={createCourse}
            className="bg-blue-500 hover:bg-blue-400 transition-all text-white font-semibold text-lg py-2 rounded-sm my-14 w-full"
          >
            Create Course
          </button>
        </form>
      </section>
    </>
  );
};

export default Form;

import Video from "../../assets/vid.mp4";

const Preview = ({ setViewPreview }) => {
  function handleViewPreview() {
    setViewPreview(false);
  }
  return (
    <>
      <section className="w-full px-2 sm:px-6 h-screen fixed flex justify-center items-center top-0 z-50 bg-gray-900 bg-opacity-50 backdrop-blur-sm">
        <div className="w-[99%] sm:w-[30rem] h-max relative">
          <svg
            onClick={handleViewPreview}
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
          <video src={Video} controls className="w-full rounded-sm"></video>
        </div>
      </section>
    </>
  );
};

export default Preview;

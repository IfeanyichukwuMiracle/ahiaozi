import Video from "../../assets/vid.mp4";

const Preview = ({ setViewPreview }) => {
  function handleViewPreview() {
    setViewPreview(false);
  }
  return (
    <>
      <section className="bg-black w-full h-screen fixed flex justify-center items-center top-0 z-50 bg-opacity-70 backdrop-blur-sm">
        <div className="w-[99%] sm:w-[30rem] h-max relative">
          <p
            className="absolute -top-6 cursor-pointer text-white -right-6"
            onClick={handleViewPreview}
          >
            close
          </p>
          <video src={Video} controls className="w-full rounded-sm"></video>
        </div>
      </section>
    </>
  );
};

export default Preview;

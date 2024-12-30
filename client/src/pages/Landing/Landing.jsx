import image1 from "../../assets/hero-img-1.jpg";
import image2 from "../../assets/hero-img-2.jpg";
import image3 from "../../assets/hero-img-3.jpg";

import facebookIcon from "../../assets/facebook.png";
import instagramIcon from "../../assets/instagram.png";
import webDesign from "../../assets/web-design-icon.png";
import sales from "../../assets/sales-icon.png";

import profile from "../../assets/profile.jpg";
import profile2 from "../../assets/profile-1.jpg";
import profile3 from "../../assets/profile-2.jpg";

import aiSkill from "../../assets/aiSkill.png";
import salesSkill from "../../assets/salesSkill.png";
import marketingSkill from "../../assets/marketingSkill.png";

import broke from "../../assets/broke.jpg";

import feature from "../../assets/feature.png";
import feature2 from "../../assets/feature2.png";
import feature3 from "../../assets/feature3.png";

import { Footer } from "../../components";

const Landing = () => {
  return (
    <>
      {/* header */}
      <header className="sticky top-0 z-50 shadow-sm w-full flex justify-between items-center bg-[#fefefe] sm:py-3 sm:px-6 py-2 px-2">
        <p className="font-bold text-lg">Infomart</p>
        <div className="sm:flex sm:gap-4 hidden">
          <nav>Courses</nav>
          <nav>Affiliates</nav>
          <nav>Tutors</nav>
          <nav>Sign up</nav>
        </div>
        <button className="hidden sm:block border-[1.95px] py-1 px-2 text-blue-500 hover:bg-blue-50 transition-all border-blue-500 rounded-md">
          Sign up
        </button>
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

      {/* hero */}
      <main className="bg-[#fefefe] flex flex-col gap-[4rem] sm:gap-8 sm:flex-row sm:items-center py-[3rem] px-2 sm:py-[5.5rem] sm:px-6">
        <div className="w-full sm:w-[45%]">
          <p className="mb-2 font-semibold text-sm text-gray-600">
            BE RELEVANT
          </p>
          <h1
            style={{ fontFamily: "var(--heading-font)" }}
            className="font-extrabold text-2xl mb-2 sm:text-4xl"
          >
            Learn Skills That Keep You Ahead Of Others.
          </h1>
          <p className="text-[.95rem]">
            People are broke because of{" "}
            <strong>a lack of certain skills</strong> that keep them from being
            broke. <strong>That&apos;s all.</strong> Don&apos;t want to be
            broke? Then you&apos;re in the right place.
          </p>
          <button className="bg-blue-500 text-[.93rem] flex items-center gap-2 hover:bg-blue-600 transition-all font-bold text-[#fefefe] rounded-md py-1 px-2 mt-4">
            <span>START LEARNING THE SKILLS NEEDED</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
          <div className="my-4 flex items-center gap-2">
            <div className="flex">
              <img
                src={profile}
                alt="legit tutor"
                className="size-10 rounded-full border-2 border-white"
                loading="lazy"
              />
              <img
                src={profile2}
                alt="legit tutor"
                className="size-10 ml-[-1.2rem] rounded-full border-2 border-white"
                loading="lazy"
              />
              <img
                src={profile3}
                alt="legit tutor"
                className="size-10 ml-[-1.2rem] rounded-full border-2 border-white"
                loading="lazy"
              />
            </div>
            <p className="text-sm">
              Lots of <strong>legit</strong> tutors.
            </p>
          </div>
        </div>
        <div className="w-full sm:w-[55%] sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:items-center sm:gap-4 relative">
          <Tag type={`facebook`} />
          <Tag type={`web`} />
          <Tag type={`instagram`} />
          <Tag type={`sales`} />
          <img
            src={image1}
            alt="a skilled person"
            className="block row-start-[1] row-end-[-1] rounded-md"
            loading="lazy"
          />
          <img
            src={image2}
            alt="a skilled person"
            className="sm:block rounded-md hidden"
            loading="lazy"
          />
          <img
            src={image3}
            alt="a skilled person"
            className="sm:block hidden rounded-md"
            loading="lazy"
          />
        </div>
      </main>

      {/* Skills */}
      <section className="bg-[#fafdff] py-8 px-2 sm:px-6">
        <p className="font-extrabold text-2xl sm:text-3xl mb-16">
          Learn Skills That Matter.
        </p>
        <div className="flex flex-col gap-8 sm:flex-row">
          <div className="bg-blue-50 p-4 rounded-md shadow-md">
            <img
              src={marketingSkill}
              alt="marketing"
              className="size-10 mb-2"
            />
            <p className="font-bold">Online Marketing</p>
            <p className="text-[.95rem]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
              voluptatum doloremque repellendus, id quod totam. Blanditiis.
            </p>
            <button className="text-blue-400 mt-4">Start Learning</button>
          </div>
          <div className="bg-blue-50 p-4 rounded-md shadow-md">
            <img src={salesSkill} alt="marketing" className="size-10 mb-2" />
            <p className="font-bold">Sales</p>
            <p className="text-[.95rem]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
              voluptatum doloremque repellendus, id quod totam. Blanditiis.
            </p>
            <button className="text-blue-400 mt-4">Start Learning</button>
          </div>
          <div className="bg-blue-50 p-4 rounded-md shadow-md">
            <img src={aiSkill} alt="marketing" className="size-10 mb-2" />
            <p className="font-bold">AI</p>
            <p className="text-[.95rem]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
              voluptatum doloremque repellendus, id quod totam. Blanditiis.
            </p>
            <button className="text-blue-400 mt-4">Start Learning</button>
          </div>
          {/* <div>
            <img src={salesSkill} alt="marketing" className="size-10" />
            <p>Sales</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
              voluptatum doloremque repellendus, id quod totam. Blanditiis
              laboriosam rem repellendus quae.
            </p>
          </div>
          <div>
            <img src={aiSkill} alt="marketing" className="size-10" />
            <p>AI</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
              voluptatum doloremque repellendus, id quod totam. Blanditiis
              laboriosam rem repellendus quae.
            </p>
          </div> */}
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 transition-all mt-12 py-1 px-2 rounded-md text-[#fefefe] font-bold">
          Sign Up To Start Learning
        </button>
      </section>

      {/* Featured in */}
      <section className="py-8 px-2 sm:px-6 bg-[#fbfbfb]">
        <div className="flex flex-col gap-[1.6rem] sm:gap-0 sm:flex-row justify-around">
          <img
            src={feature}
            alt="tech-feature"
            className="w-[30%] sm:w-auto m-auto"
          />
          <img
            src={feature2}
            alt="tech-feature"
            className="w-[30%] sm:w-auto m-auto"
          />
          <img
            src={feature3}
            alt="tech-feature"
            className="w-[30%] sm:w-auto m-auto"
          />
        </div>
      </section>

      {/* Benefits */}
      <section className="flex flex-col-reverse sm:flex-row gap-[4rem] sm:gap-8 w-full my-6 py-[4rem] px-2 sm:px-6 items-center">
        <div className="w-full sm:w-[40%] h-auto relative">
          <div className="absolute right-[1rem] sm:right-[-1.5rem] top-[-1.5rem] flex items-center gap-3 bg-[#fefefe] py-1 px-2 shadow-lg rounded-md w-max">
            <p>Icon</p>
            <div>
              <p className="font-bold text-[.95rem]">Abdul-Hameed Rasheed</p>
              <div className="flex justify-between items-center text-sm">
                <p className="font-semibold">Balance</p>
                <p>&#8358; 0</p>
              </div>
            </div>
          </div>
          <img
            src={broke}
            className="block w-full h-full rounded-md"
            alt="a broke individual without skills"
          />
        </div>
        <div className="w-full sm:w-[55%]">
          <p className="font-extrabold mb-3 text-2xl sm:text-3xl">
            The Cause Of &quot;Broke-ness&quot;
          </p>
          <p className="text-[.95rem]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
            corrupti maxime voluptas, numquam inventore hic est quia voluptatum
            rerum animi quasi delectus ut dolorum! Rem perferendis iusto
            necessitatibus aut. Reprehenderit!
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 transition-all mt-4 py-1 px-2 rounded-md text-[#fefefe] font-bold">
            Sign Up To Start Learning
          </button>
        </div>
      </section>

      {/* Testimoinals */}
      <section className="py-8 px-2 sm:px-6 bg-blue-500">
        <p className="font-extrabold mb-3 text-[#fefefe] text-2xl sm:text-3xl">
          What Some Users Are Saying
        </p>
        <div className="py-2 grid grid-cols-1 sm:grid-cols-3 items-start gap-6 my-12">
          <div className="bg-gradient-to-tr from-gray-200 via-[#fcfcfc] to-white rounded-md shadow-xl p-4">
            <img
              src={profile2}
              alt="testimonial"
              className="block size-16 rounded-full mb-3"
            />
            <p className="text-[.95rem] text-gray-800 mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio quaerat illum quisquam cumque blanditiis tempore.
            </p>
            <div>
              <p className="text-[1.15rem] font-semibold">Jane</p>
              <p className="text-gray-500 font-semibold text-[.9rem]">
                Facebook Ads Specialist
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-tr from-gray-200 via-[#fcfcfc] to-white rounded-md shadow-xl p-4">
            <img
              src={profile}
              alt="testimonial"
              className="block size-16 rounded-full mb-3"
            />
            <p className="text-[.95rem] text-gray-800 mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio quaerat illum quisquam cumque blanditiis tempore. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Ullam, iure.
            </p>
            <div>
              <p className="text-[1.15rem] font-semibold">Jane</p>
              <p className="text-gray-500 font-semibold text-[.9rem]">
                Business Owner
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-tr from-gray-200 via-[#fcfcfc] to-white rounded-md shadow-xl p-4">
            <img
              src={profile3}
              alt="testimonial"
              className="block size-16 rounded-full mb-3"
            />
            <p className="text-[.95rem] text-gray-800 mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio.
            </p>
            <div>
              <p className="text-[1.15rem] font-semibold">Jane</p>
              <p className="text-gray-500 font-semibold text-[.9rem]">
                Copywriter
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*CTA*/}
      <section className="bg-gradient-to-tr from-blue-50 via-[#fdfdfd] to-[#f4f7ff] w-[98%] sm:w-[90%] my-24 mx-auto p-6 shadow-sm rounded-md">
        <p className="font-extrabold text-2xl sm:text-3xl mb-3">
          Start Learning On Infomart
        </p>
        <p className="mb-6">
          Create a free account in less than 3 minutes and start learning!
        </p>
        <button className="bg-blue-500 text-[#fefefe] font-semibold p-2 rounded-md">
          Sign up for free
        </button>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

function Tag({ type }) {
  return (
    <>
      <div
        className={`absolute ${
          type === "web" &&
          `bottom-[-1rem] left-[2rem] sm:bottom-[1rem] sm:left-[-2rem]`
        } ${
          type === "facebook" && `bottom-[-0.3rem] right-[.5rem] facebook-tag`
        } ${type === "sales" && `top-[-1.5rem] left-[-.5rem] sales-tag`} ${
          type === "instagram" && `top-[-1.7rem] right-[-0.5rem]`
        } flex gap-2 shadow-2xl shadow-gray-700 items-center bg-[#fefefe] rounded-md py-1 px-2`}
      >
        <img
          src={
            type === "facebook"
              ? facebookIcon
              : type === "instagram"
              ? instagramIcon
              : type === "web"
              ? webDesign
              : type === "sales"
              ? sales
              : ""
          }
          className="block size-5"
          alt="facebook advertising"
          loading="lazy"
        />
        <p className="text-[.9rem]">
          {type === "facebook"
            ? "Facebook Advertising"
            : type === "instagram"
            ? "Instagram Advertising"
            : type === "web"
            ? "Web Design"
            : type === "sales"
            ? "Sales"
            : ""}
        </p>
      </div>
    </>
  );
}

export default Landing;

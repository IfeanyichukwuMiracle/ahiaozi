import course_img from "../../assets/course.jpg";

const Card = ({ name, tutor, enrolled, price }) => {
  return (
    <>
      <div className="cursor-pointer">
        <img
          src={course_img}
          alt="course_name"
          className="block rounded-sm"
          loading="lazy"
        />
        <div>
          <p className="font-bold text-lg">{name || "Course name"}</p>
          <p className="text-[.8rem] text-gray-600">
            {tutor?.firstname
              ? `${tutor?.firstname} ${tutor?.lastname}`
              : "tutor's name"}
          </p>
          <div className="text-sm">
            <strong>{enrolled || 9000}</strong> enrolled
          </div>
          <p className="font-bold text-lg sm:text-xl">
            &#8358;{price || "13,550"}
          </p>
          <p className="text-[.93rem] bg-amber-200 w-max text-amber-900 font-semibold shadow-md rounded-sm py-[.1rem] px-1">
            Bestseller
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;

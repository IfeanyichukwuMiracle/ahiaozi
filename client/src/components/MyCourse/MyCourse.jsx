import course_img from "../../assets/course.jpg";

const MyCourse = ({ name, tutor, enrolled, completed }) => {
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
          {completed ? (
            <div className="bg-green-100 w-max text-green-700 font-semibold text-sm my-2 px-1 rounded-sm">
              <p>Completed</p>
            </div>
          ) : (
            <div className="bg-amber-100 w-max text-amber-700 font-semibold text-sm my-2 px-1 rounded-sm">
              <p>Not Completed</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MyCourse;

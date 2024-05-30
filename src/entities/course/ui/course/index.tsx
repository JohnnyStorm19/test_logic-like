import { CourseTitle } from "../../../../shared/ui";
import { CourseItemProps } from "../../models";
import { CourseHeader } from "../header";

export const CourseItem = ({ courseInfo }: CourseItemProps) => {
  const { bgColor, name, image } = courseInfo;

  return (
    <div className="overflow-hidden rounded-2xl shadow-courseItem">
      <CourseHeader bgColor={bgColor} courseName={name} imageSrc={image} />
      <CourseTitle title={courseInfo.name} />
    </div>
  );
};

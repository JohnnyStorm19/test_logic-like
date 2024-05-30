import { CourseItem } from "../../../entities/course";
import { CourseItemListProps } from "../models";

export const CourseItemList = ({ coursesInfo }: CourseItemListProps) => {
    return (
      <section className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {coursesInfo.map((course) => {
          return <CourseItem key={course.id} courseInfo={course} />;
        })}
      </section>
    );
  };

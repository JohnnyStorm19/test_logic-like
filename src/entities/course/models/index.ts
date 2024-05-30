import { ICourse } from "../../../shared/types";

export interface CourseItemProps {
  courseInfo: ICourse;
}
export interface CourseHeaderProps {
  bgColor: string;
  imageSrc: string;
  courseName: string;
}

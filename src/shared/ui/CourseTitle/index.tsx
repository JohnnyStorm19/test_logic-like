interface ICourseTitleProps {
    title: string;
}

export const CourseTitle = ({ title }: ICourseTitleProps) => {
  return <h3 className="px-5 pb-[18px] pt-3">{title}</h3>;
};

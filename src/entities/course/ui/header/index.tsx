import { CourseHeaderProps } from "../../models";


export const CourseHeader = ({bgColor, imageSrc, courseName}: CourseHeaderProps) => {
  return (
    <header
      style={{
        backgroundColor: bgColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={imageSrc} alt={courseName} className="h-[162px]" />
    </header>
  );
};

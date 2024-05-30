import { useQuery } from "@tanstack/react-query";
import { getCourseData } from "../../../shared/api";

export const useGetCoursesData = () => {
  return useQuery({
    queryKey: ["courseData"],
    queryFn: getCourseData,
  });
};

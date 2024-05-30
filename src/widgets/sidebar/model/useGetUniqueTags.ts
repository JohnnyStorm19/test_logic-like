import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { getCourseData } from "../../../shared/api/course";

export const useGetUniqueTags = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["tags"],
    queryFn: getCourseData,
  });

  const uniqueTags = useMemo(() => {
    const tags = data && data.map((course) => course.tags).flat();
    const uniqueTags = new Set(tags);
    return Array.from(uniqueTags);
  }, [data]);

  return { uniqueTags, isError, isLoading };
};

import { useMemo } from "react";
import { ICourse } from "../../../shared/types";
import { useSearchParams } from "react-router-dom";

export const useGetFilteredData = (data: ICourse[] | undefined) => {
  const [searchParams] = useSearchParams();
  const selectedCourse = searchParams.get("course") || "";

  const filteredData = useMemo(() => {
    if (!data) return [];
    return data.filter((data) => data.tags.includes(selectedCourse));
  }, [data, selectedCourse]);
  return { filteredData };
};

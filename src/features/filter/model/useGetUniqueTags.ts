import { useMemo } from "react";
import { ICourse } from "../../../shared/types";
import { DEFAULT_TAG } from "../../../shared/consts";

export const useGetUniqueTags = (courseData: ICourse[]) => {
  const uniqueTags = useMemo(() => {
    const tags = courseData && courseData.map((course) => course.tags).flat();
    const uniqueTags = new Set(tags);
    return [DEFAULT_TAG, ...Array.from(uniqueTags)];
  }, [courseData]);

  return { uniqueTags };
};

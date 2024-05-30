import { useContext } from "react";
import { generateKey } from "../../../shared/lib";
import { useGetUniqueTags } from "../model";
import { Context } from "../../../app/providers";
import { FilterItem, Loader, MyError } from "../../../shared/ui";
import { IContext } from "../../../shared/types";

export const CourseFilter = () => {
  const { courseData, isError, isLoading } = useContext(Context) as IContext;
  const { uniqueTags } = useGetUniqueTags(courseData);

  if (isLoading) {
    return <Loader />
  }
  if (isError) {
    return <MyError />
  }

  return (
    <section className="flex flex-col ">
      {uniqueTags.map((name) => {
        const id = generateKey();
        return <FilterItem key={id} name={name} />;
      })}
    </section>
  );
};

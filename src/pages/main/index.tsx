import { ContextProvider } from "../../app/providers";
import { Loader, MyError } from "../../shared/ui";
import { CourseItemList, Sidebar } from "../../widgets";
import { useGetFilteredData, useGetCoursesData } from "./model";

export const MainPage = () => {
  const { data, isError, isLoading, isSuccess } = useGetCoursesData();
  const { filteredData } = useGetFilteredData(data);

  if (isError) {
    return <MyError />
  }
  if (isLoading) {
    return <Loader />
  }

  return (
    <ContextProvider
      values={{
        courseData: data || [],
        isError,
        isLoading,
      }}
    >
      <div className="flex gap-6 items-start p-6 font-nunito font-extrabold text-sm sm:text-lg flex-wrap sm:flex-nowrap">
        <aside className="w-sidebar p-3 border-2 border-border-color rounded-xl">
          <Sidebar />
        </aside>
        <main className="flex-0 sm:flex-1">
          {isSuccess && (
            <CourseItemList
              coursesInfo={!filteredData.length ? data : filteredData}
            />
          )}
        </main>
      </div>
    </ContextProvider>
  );
};

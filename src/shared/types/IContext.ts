import { ICourse } from "./courseType";

export interface IContext {
  courseData: ICourse[];
  isLoading: boolean;
  isError: boolean;
}

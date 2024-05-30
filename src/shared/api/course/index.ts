import { PATH_TO_COURSES_INFO } from "../../consts";
import { ICourse } from "../../types";
import { API } from "../base";

export const getCourseData = async () => {
    const courseData: ICourse[] = await API.get(PATH_TO_COURSES_INFO).json();
    return courseData;
}
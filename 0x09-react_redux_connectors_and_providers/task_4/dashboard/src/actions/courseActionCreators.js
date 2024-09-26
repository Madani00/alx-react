import { bindActionCreators } from 'redux';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes"

export const selectCourse = (index) => {
    return {
        type: SELECT_COURSE,
        index,
    };
};

export const unSelectCourse = (index) => {
    return {
        type: UNSELECT_COURSE,
        index,
    };
};

export const fetchCourseSuccess = (data) => {
    return {
        type: FETCH_COURSE_SUCCESS,
        data,
    };
};

// export bound action creators
export const boundSelectCourse = (dispach) => bindActionCreators(selectCourse, dispach);
export const boundUnSelectCourse = (dispach) => bindActionCreators(unSelectCourse, dispach);

import { bindActionCreators } from 'redux';
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes"

export const selectCourse = (index) => {
    return {
        type: SELECT_COURSE,
        index
    }
}

export const unSelectCourse = (index) => {
    return {
        type: UNSELECT_COURSE,
        index
    }
}

// export bound action creators
export const boundSelectCourse = (dispach) => bindActionCreators(selectCourse, dispach);
export const boundUnSelectCourse = (dispach) => bindActionCreators(unSelectCourse, dispach);

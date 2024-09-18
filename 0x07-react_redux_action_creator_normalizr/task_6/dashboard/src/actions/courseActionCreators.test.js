import { selectCourse, unSelectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

describe('test actions', () => {
    it('verifies selectCourse returns correct data', () => {
        const res = { type: SELECT_COURSE, index: 1 };

        expect(selectCourse(1)).toEqual(res);
    });
    it('verifies unSelectCourse returns correct data', () => {
        const res = { type: UNSELECT_COURSE, index: 1 };

        expect(unSelectCourse(1)).toEqual(res);
    });
})
import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";


describe('CourseList tests', () => {
    it('should render CourseList', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.exists()).toBe(true);
    });

    it('renders 5 diffrent rows', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.find('table thead CourseListRow')).toHaveLength(2);
        expect(wrapper.find('table tbody CourseListRow')).toHaveLength(3);
    });
});
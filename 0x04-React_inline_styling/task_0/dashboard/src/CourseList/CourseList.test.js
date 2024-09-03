import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";


const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
]

describe('CourseList tests', () => {
    it('should render CourseList', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.exists()).toBe(true);
    });

    // it('renders 5 diffrent rows', () => {
    //     const wrapper = shallow(<CourseList />);
    //     expect(wrapper.find('table thead CourseListRow')).toHaveLength(2);
    //     expect(wrapper.find('table tbody CourseListRow')).toHaveLength(1);
    // });

    it('renders the list items', () => {
        const wrapper = shallow(<CourseList listCourses={listCourses} />);
        wrapper.find('ul').forEach((ele) => {
            expect(ele.equals(<CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />));
        });
        expect(wrapper.find("tbody").children()).toHaveLength(3);
        expect(wrapper.find("tbody").childAt(0).html()).toEqual("<tr><td>ES6</td><td>60</td></tr>");
        expect(wrapper.find("tbody").childAt(1).html()).toEqual("<tr><td>Webpack</td><td>20</td></tr>");
        expect(wrapper.find("tbody").childAt(2).html()).toEqual("<tr><td>React</td><td>40</td></tr>");
    });

    it('renders empty list', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.find('tbody').childAt(0).html()).toEqual("<tr><td>No course available yet</td><td></td></tr>")
    })
});
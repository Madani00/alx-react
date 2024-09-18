import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';


describe('CourseListRow tests', () => {
    it('should check if the component renders one cell with colspan=2', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" />);
        expect(wrapper.find('th').html()).toEqual("<th colSpan=\"2\">test</th>")
    });

    it('checks the component renders two td within tr', () => {
        const wrapper = shallow(<CourseListRow textFirstCell='test' />);
        expect(wrapper.find('tr td')).toHaveLength(2);
    });
});
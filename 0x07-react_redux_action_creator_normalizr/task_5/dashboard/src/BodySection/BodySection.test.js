import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';


describe('testing BodySection', () => {
    it('renders bodySection correctly', () => {
        const wrapper = shallow(<BodySection title="test title"><p>test children node</p></BodySection>)
        expect(wrapper.find("h2").html()).toEqual("<h2>test title</h2>");
        expect(wrapper.find("h2").text()).toEqual("test title");
        expect(wrapper.find("p").html()).toEqual("<p>test children node</p>");
        expect(wrapper.find("p").text()).toEqual("test children node");
    })
})
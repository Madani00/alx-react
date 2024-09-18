import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';


describe('testing BodySectionWithMarginBottom', () => {
    it('renders BodySectionWithMarginBottom correctly', () => {
        const wrapper = shallow(<BodySectionWithMarginBottom title="test"><p>test</p></BodySectionWithMarginBottom>)
        expect(wrapper.find("BodySection").html()).toEqual('<div class="bodySection"><h2>test</h2><p>test</p></div>');

    })
})
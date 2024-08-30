import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';


describe('Footer suite', () => {
    it('verfies Footer renders correctly', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists()).toBe(true);
    });

    it('verfies two inputs exist', () => {
        const wrapper = shallow(<Footer />);
        const txt = wrapper.find('p').last().text();
        expect(txt).toContain('Copyright');
    });
});
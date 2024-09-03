import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header'


describe('Header suite', () => {
    it('should render Header without crashing', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.exists()).toBe(true);
    });

    it('verfies img and is renedered', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('img')).toHaveLength(1);
    });

    it('verfies h1 is renedered', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('h1')).toHaveLength(1);
    });
});
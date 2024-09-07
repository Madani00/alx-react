import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';


describe('Login suite', () => {
    it('verfies login renders correctly', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.exists()).toBe(true);
    });

    it('verfies two inputs exist', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input')).toHaveLength(2);
    });

    it('verfies two label exist', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('label')).toHaveLength(2);
    });
});
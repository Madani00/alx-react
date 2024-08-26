import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';


describe('NotificationItem tests', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper.exists()).toBe(true);
    });

    it('renders correct html from type="default" value="test" props', () => {
        const wrapper = shallow(<NotificationItem />);

        wrapper.setProps({ type: "default", value: "test" });
        expect(wrapper.html()).toEqual('<li data-notification-type="default">test</li>');
    });

    it('renders correctly props', () => {
        const wrapper = shallow(<NotificationItem />);
        wrapper.setProps({ html: "<u>test</u>" });
        expect(wrapper.html()).toEqual('<li data-notification-type="urgent"><u>test</u></li>');
    });
});
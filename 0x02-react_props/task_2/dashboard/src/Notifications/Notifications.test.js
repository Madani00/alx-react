import React from "react";
import { shallow } from "enzyme";
import Notif from "./Notifications";


describe('Notifications', () => {
    it('renders notifications', () => {
        const notifi = shallow(<Notif />);
        expect(notifi).toBeDefined();
    });

    it('renders list', () => {
        const wrapper = shallow(<Notif />);
        expect(wrapper.find('ul')).toHaveLength(1);
    });

    it('renders three list items', () => {
        const wrapper = shallow(<Notif />);
        expect(wrapper.find('ul NotificationItem')).toHaveLength(3);
    });

    it('renders three list items', () => {
        const wrapper = shallow(<Notif />);
        expect(wrapper.find('ul NotificationItem').first().html()).toEqual('<li data-notification-type="default">New course available</li>');
    });

    it('renders the text', () => {
        const wrapper = shallow(<Notif />);
        const txt = wrapper.find('p').text();
        expect(txt).toEqual('Here is the list of notifications');
    });
});

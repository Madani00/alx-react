import React from "react";
import { shallow } from "enzyme";
import Notif from "./Notifications";
import { getLatestNotification } from "../utils/utils";


const listNotif = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: getLatestNotification() }
]

describe('Notifications', () => {
    it('renders notifications', () => {
        const notifi = shallow(<Notif />);
        expect(notifi).toBeDefined();
    });

    it('renders list', () => {
        const wrapper = shallow(<Notif />);
        expect(wrapper.find('ul')).toHaveLength(1);
    });

    it('renders 1 list item with empty list passed', () => {
        const wrapper = shallow(<Notif listNotifications={[]} />);
        expect(wrapper.find('ul NotificationItem')).toHaveLength(1);
    });

    it('renders 1 list item when nothing is passed', () => {
        const wrapper = shallow(<Notif />);
        expect(wrapper.find('ul NotificationItem')).toHaveLength(1);
    });

    it('renders element with no notifications', () => {
        const wrapper = shallow(<Notif />);
        expect(wrapper.find('ul NotificationItem').first().html()).toEqual('<li data-notification-type="default">No new notification for now</li>');
    });

    it("renders the list items", () => {
        const wrapper = shallow(<Notif displayDrawer={true} listNotifications={listNotif} />);
        expect(wrapper.find("ul").children()).toHaveLength(listNotif.length);
        wrapper.find("ul").forEach((ele) => {
            expect(ele.equals(<Notif />));
        });
    });

    it('renders three list items', () => {
        const wrapper = shallow(<Notif listNotifications={listNotif} />);
        expect(wrapper.find('ul NotificationItem').first().html()).toEqual('<li data-notification-type="default">New course available</li>');
    });

    it('renders the text', () => {
        const wrapper = shallow(<Notif listNotifications={listNotif} />);
        const txt = wrapper.find('p').at(1).text();
        expect(txt).toEqual('Here is the list of notifications');
    });
});

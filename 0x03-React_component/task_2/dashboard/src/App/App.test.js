/**
 * @jest-environment jsdom
 */

import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";

describe("App tests", () => {
    it("renders without crashing", () => {
        const component = shallow(<App />);

        expect(component).toBeDefined();
    });

    it('verfies Notifications exists', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Notif')).toHaveLength(1);
    });

    it('verfies Header exists', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Header')).toHaveLength(1);
    });

    it('verfies Login exists', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Login')).toHaveLength(1);
    });

    it('verfies Footer exists', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Footer')).toHaveLength(1);
    });

    it('verfies CourseList does not exist', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('CourseList')).toHaveLength(0);
    });
});

describe('App isLoggedIn=true tests', () => {
    it('verfies CourseList exists', () => {
        const wrapper = shallow(<App isLoggedIn={true} />);
        expect(wrapper.find('CourseList')).toHaveLength(1);
    });

    it('verfies Login does not exist', () => {
        const wrapper = shallow(<App isLoggedIn={true} />);
        expect(wrapper.find('Login')).toHaveLength(0);
    });
});

describe('ctr+h', () => {
    document.alert = jest.fn();
    it("verifies alert is called", () => {
        const wrapper = mount(<App />);
        const spy = jest.spyOn(window, "alert");
        const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
        document.dispatchEvent(event);

        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
        wrapper.unmount();
    });
    it('verifies alert is "Logging you out"', () => {
        const wrapper = mount(<App />);
        const spy = jest.spyOn(window, "alert");
        const event = new KeyboardEvent("keydown", {
            ctrlKey: true,
            key: "h"
        });
        document.dispatchEvent(event);

        expect(spy).toHaveBeenCalledWith("Logging you out");
        jest.restoreAllMocks();
        wrapper.unmount();
    });
    document.alert.mockClear();

    it("verifies logOut is called", () => {
        const mocked = jest.fn();
        const wrapper = mount(<App logOut={mocked} />);
        const event = new KeyboardEvent("keydown", {
            ctrlKey: true,
            key: "h"
        });
        document.dispatchEvent(event);

        expect(mocked).toHaveBeenCalledTimes(1);
        wrapper.unmount();
    });

})
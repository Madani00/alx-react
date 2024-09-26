import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { fromJS } from "immutable";
import { mount } from "enzyme";
import App from "./App";
import uiReducer from "../reducers/uiReducer";

describe("App component with Redux", () => {
  let store;

  beforeEach(() => {
    store = createStore(uiReducer, fromJS({
      isUserLoggedIn: false,
      isNotificationDrawerVisible: false,
    }));
  });

  it("should not display the drawer by default", () => {
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper.find("Notifications").prop("displayDrawer")).toBe(false);
    wrapper.unmount();
  });

  it("should display the drawer when the state isNotificationDrawerVisible is true", () => {
    store = createStore(uiReducer, fromJS({
      isUserLoggedIn: false,
      isNotificationDrawerVisible: true,
    }));

    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper.find("Notifications").prop("displayDrawer")).toBe(true);
    wrapper.unmount();
  });

  it("should hide the drawer when hideNotificationDrawer action is dispatched", () => {
    store.dispatch({ type: "HIDE_NOTIFICATION_DRAWER" });

    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper.find("Notifications").prop("displayDrawer")).toBe(false);
    wrapper.unmount();
  });

  it("should display the drawer when displayNotificationDrawer action is dispatched", () => {
    store.dispatch({ type: "DISPLAY_NOTIFICATION_DRAWER" });

    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper.find("Notifications").prop("displayDrawer")).toBe(true);
    wrapper.unmount();
  });
});

import { shallow } from "enzyme";
import React from "react";
import Footer from "./Footer";
import { getFullYear, getFooterCopy } from "../utils/utils";


describe("Footer test", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("should render the text Copyright", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toEqual(`Copyright ${getFullYear()} - ${getFooterCopy()}`);
  });
});


describe('Footer Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Footer isLoggedIn={false}/>);
    expect(wrapper.exists()).toBe(true);
  });

  it('should not display the contact link when the user is not logged in', () => {
    const wrapper = shallow(<Footer isLoggedIn={false} />);
    expect(wrapper.find('a')).toHaveLength(0);
  });

  it('should display the contact link when the user is logged in', () => {
    const wrapper = shallow(<Footer isLoggedIn={true}/>);
    expect(wrapper.find('a')).toHaveLength(1);
  });
});

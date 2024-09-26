import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header'; // Import the unconnected component

describe('Header Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Header user={{ isLoggedIn: false }} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should not display the logout link when the user is not logged in', () => {
    const wrapper = shallow(<Header user={{ isLoggedIn: false }} />);
    expect(wrapper.find('#logout')).toHaveLength(0);
  });

  it('should display the logout link when the user is logged in', () => {
    const wrapper = shallow(<Header user={{ isLoggedIn: true }} />);
    expect(wrapper.find('#logout')).toHaveLength(1);
  });
});

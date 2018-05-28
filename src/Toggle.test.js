import React from 'react';
import { shallow, mount } from 'enzyme';
import Toggle from './Toggle';

describe('Toggle', () => {
  it('initial state for the toggle should be false', () => {
    const wrapper = shallow(<Toggle />);
    expect(wrapper.instance().state.toggleOn).toBe(false); // instance allows us to access the component as we would normally
  });

  it('changes the toggle state when toggleDiv is called', () => {
    const wrapper = shallow(<Toggle />);
    wrapper.instance().toggleDiv();
    expect(wrapper.instance().state.toggleOn).toBe(true); //
  });

  it('changes the toggle state when the button is clicked', () => {
    const wrapper = mount(<Toggle />);
    wrapper.find('#myButton').simulate('click');
    expect(wrapper.state().toggleOn).toBe(true); // without instance we can call the state() function
  });
});

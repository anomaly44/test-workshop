import React from 'react';
import { shallow, mount } from 'enzyme';
import Toggle from './Toggle';

describe('Toggle', () => {
  it('initial state for the toggle should be false', () => {
    const wrapper = shallow(<Toggle />);
    expect(wrapper.instance().state.toggleOn).toBe(false);
  });

  it('changes the toggle state when toggleDiv is called', () => {
    const wrapper = shallow(<Toggle />);
    wrapper.instance().toggleDiv();
    expect(wrapper.instance().state.toggleOn).toBe(true);
  });

  it('changes the toggle state when the button is clicked', () => {
    const wrapper = mount(<Toggle />);
    wrapper.find('#myButton').simulate('click');
    expect(wrapper.instance().state.toggleOn).toBe(true);
  });
});

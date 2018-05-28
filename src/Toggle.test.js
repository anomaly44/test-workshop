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
    expect(wrapper.instance().state.toggleOn).toBe(true);
  });

  it('changes the toggle state when the button is clicked', () => {
    const wrapper = shallow(<Toggle />);
    wrapper.find('.button').simulate('click');
    // without instance we can call the state() function
    // If possible, you should utilize your component's external API (which is accessible via .instance())
    // in order to get it into whatever state you want to test,
    // in order to be as accurate of a test as possible.
    // source: https://github.com/airbnb/enzyme/blob/master/docs/api/ShallowWrapper/setState.md
    expect(wrapper.state().toggleOn).toBe(true);
  });
});

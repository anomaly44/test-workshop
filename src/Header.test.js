import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  it('should render the title', () => {
    const wrapper = shallow(<Header title="React test workshop" />);
    expect(wrapper.find('.title').text()).toEqual('React test workshop');
  });
});

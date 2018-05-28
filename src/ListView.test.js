import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import ConnectedListView, { ListView } from './ListView';
import { shallowUntilTarget } from './testHelpers';

const mockStore = configureStore([]);

describe('ListView', () => {
  it('should have 3 items', () => {
    const store = mockStore({
      city: {
        list: ['New York', 'London', 'Antwerp'],
      },
    });
    const wrapper = shallow(
      <ConnectedListView store={store} title="React test workshop" />,
    );
    expect(wrapper.dive().find('.item').length).toEqual(3);
  });

  // What if we have multiple HOCs?
  it('should have 3 items', () => {
    const store = mockStore({
      city: {
        list: ['New York', 'London', 'Antwerp'],
      },
    });
    const wrapper = shallowUntilTarget(
      <ConnectedListView store={store} title="React test workshop" />,
      ListView,
    );
    expect(wrapper.find('.item').length).toEqual(3);
  });
});

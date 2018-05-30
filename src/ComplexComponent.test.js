import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import ConnectedComplexComponent, {
  ComplexComponent,
} from './ComplexComponent';
import { shallowUntilTarget } from './testHelpers';

const mockStore = configureStore([]);

describe('ComplexComponent', () => {
  it('should select an item', () => {
    const store = mockStore();
    const wrapper = shallowUntilTarget(
      <ConnectedComplexComponent store={store} />,
      ComplexComponent,
    );

    const select = wrapper.find('.select');
    select.simulate('change', { target: { value: 'two' } });

    expect(wrapper.state()).toHaveProperty('selectedItem', 'two');
  });

  it('should dispatch our action with the selectedItem', () => {
    const store = mockStore();

    const submitMock = jest.fn();
    const wrapper = shallow(<ComplexComponent submit={submitMock} />);

    wrapper.instance().setState({
      selectedItem: 'three',
    });
    wrapper.find('.form').simulate('submit', { preventDefault() {} });

    expect(submitMock).toHaveBeenCalledWith('three');
  });

  it('should dispatch our action with the selectedItem', () => {
    const store = mockStore();

    const wrapper = shallow(
      <ConnectedComplexComponent store={store} title="React test workshop" />,
    );

    const childWrapper = wrapper.dive();
    childWrapper.instance().setState({
      selectedItem: 'three',
    });
    childWrapper.find('.form').simulate('submit', { preventDefault() {} });

    expect(store.getActions()).toContainEqual({
      type: 'SUBMIT',
      payload: 'three',
    });
  });
});

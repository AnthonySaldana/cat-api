/* eslint-disable */
import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Component from './Header';

Enzyme.configure({adapter: new Adapter()});

describe('<Component />', () => {
  let wrapper;
  beforeEach(() => {
    //creates the store with any initial state or middleware needed
    wrapper = mount(<Component />)
   });

  it('+++ render the component', () => {
     expect(wrapper.find(Component).length).toEqual(1)
  });

  it('+++ Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
});
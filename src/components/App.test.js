import React from "react";
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('Renders App without fail', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});

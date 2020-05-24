import React from "react";
import { shallow } from "enzyme";

import App from "./App";
import { findByTestAttr } from "../test/testUtils";

const setup = (props = {}, state = false) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("initial 'success' state is false", () => {
  const wrapper = setup();
  const initialState = wrapper.state("success");
  expect(initialState).toBe(false);
});

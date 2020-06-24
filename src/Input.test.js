import React from "react";
import { shallow } from "enzyme";

import Input from "./Input";
import { findByTestAttr } from "../test/testUtils";

const defaultProps = { secretWord: "party" };

const setup = (props = {}, state = false) => {
  const setupProps = { ...defaultProps, ...props };
  const wrapper = shallow(<Input {...setupProps} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

// OTHER WAY TO SETUP
// const setup = (secretWord: 'party') => {
//  return shallow(<Input secretWord={secretWord} />)
//}

test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-input");
  expect(appComponent.length).toBe(1);
});

describe("state controlled input field", () => {
  test("state updates with value of input box upon change", () => {
    const mockSetCurrentGuess = jest.fn();
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);

    const wrapper = setup();
    const InputBox = findByTestAttr(wrapper, "input-box");

    const mockEvent = { target: { value: "train" } };
    InputBox.simulate("change", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });
});

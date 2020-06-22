import React from "react";
import PropTypes from "prop-types";

export default function Input(props) {
  return <div data-test="component-input"></div>;
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};
import React from "react";
import PropTypes from "prop-types";

export default function Congrats(props) {
  if (props.success) {
    return (
      <div data-test="component-congrats" className="alert alert-success">
        <span data-test="congrats-message">Congrats!</span>
      </div>
    );
  } else return <div data-test="component-congrats" />;
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

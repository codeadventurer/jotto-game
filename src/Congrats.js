import React from "react";

export default function Congrats(props) {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <div data-test="congrats-message">Congrats!</div>
      </div>
    );
  } else return <div data-test="component-congrats" />;
}

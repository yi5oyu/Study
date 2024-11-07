import React, { Component } from "react";

class ClassComp extends Component {
  render() {
    return <p>Class</p>;
  }
}

function FunctionComp() {
  return <p>Function</p>;
}

const ArrowFunctionComp = () => {
  return <p>Arrow</p>;
};

export { ClassComp, FunctionComp, ArrowFunctionComp };

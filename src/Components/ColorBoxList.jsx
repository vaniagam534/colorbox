import React from "react";
import ColorBox from "./ColorBox";

function ColorBoxList({ colors }) {
  const boxes = [];
  for (let i = 0; i < 25; i++) {
    boxes.push(<ColorBox colors={colors} />);
  }
  return <div className="colorGrid">{boxes}</div>;
}
export default ColorBoxList;

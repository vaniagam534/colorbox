import React from "react";
import { useState } from "react";

const colorChoice = (arr) => {
  const index = Math.floor(Math.random() * arr.length);
  const randColor = arr[index];
  return randColor;
};

function ColorBox({ colors }) {
  const [color, setColor] = useState(colorChoice(colors));
  const changeColor = () => {
    const currColor = colorChoice(colors);
    setColor(currColor);
  };

  return (
    <>
      <div
        className="colorbox"
        onClick={changeColor}
        style={{ backgroundColor: color }}
      ></div>
    </>
  );
}

export default ColorBox;

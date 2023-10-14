import React from "react";
import { useState, useEffect } from "react";
import "./styles.css";



const App = () => {
  const colors = ["red", "green", "blue", "yellow", "orange"];
  const [selectedColor, setSelectedColor] = useState(null);
  const [showColorList, setShowColorList] = useState(false);

  const toggleColorList = () => {
    setShowColorList(!showColorList);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColorList(false);
  };

  return (
    <div className="color-picker">
      <button onClick={toggleColorList}>Pick a color</button>
      {showColorList && (
        <ul className="color-list">
          {colors.map((color, index) => (
            <li
              key={index}
              onClick={() => handleColorClick(color)}
              style={{ backgroundColor: color }}
            ></li>
          ))}
        </ul>
      )}
      {selectedColor && (
        <div className="selected-color" style={{ backgroundColor: selectedColor }}>
          Selected Color: {selectedColor}
        </div>
      )}
    </div>
  );
};


export default App;
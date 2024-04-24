// Code Keypad Component Here
import React from "react";
function Keypad() {
  function inputHandler() {
    console.log("Entering password...");
  }
  return (
    <div>
      <input
        type="password"
        onChange={inputHandler}
        placeholder="ENTER PASSWORD"
      />
    </div>
  );
}

export default Keypad;

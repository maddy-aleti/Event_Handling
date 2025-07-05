import React, { useState } from "react";

function App() {
  const [name, setName] = useState("Maddy");
  const [ismouseover, setmouse] = useState(false);
  const handleChange = (e) => setName(e.target.value);
  function mouseover() {
    setmouse(true);
  }
  function mouseout() {
    setmouse(false);
  }

  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <input
        type="text"
        placeholder="What's your name?"
        onChange={handleChange}
      />
      <button
        style={{ backgroundColor: ismouseover ? "black" : "white" }}
        onMouseOver={mouseover}
        onMouseOut={mouseout}
      >
        Submit
      </button>
    </div>
  );
}

export default App;

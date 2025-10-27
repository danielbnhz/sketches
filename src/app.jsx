import React from "react";
import ParticleSketch from "./Components/ParticleSketch.jsx";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }} >
      <ParticleSketch />
      <div style={{ position: "absolute", top: 10, left: 10, color: "white", zIndex: 1 }}>
        React + p5 Integration ✅
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import About from '../About/About';
import Projects from '../Projects/Projects';


function App() {
  return (
    <div>
      <div>
        <h2 id="about">A little about me :D!! </h2>
        <About />
      </div>
      <div>
        <h2 id="project"> View My Projects Ive completed</h2>
        <Projects />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'


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
      <div>
        <h2 id="contact"> Contact Me</h2>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

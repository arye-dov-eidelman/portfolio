import React from 'react';
import './App.css';
import WaveDivider from './WaveDivider';

function App() {
  const colors = ["lightgreen", "lightblue"]
  return (
    <div className="App" style={{ backgroundColor: colors[0] }} >
      <header style={{ marginBottom: "-5vmin", zIndex: 1, position: "relative" }}>
        <h1>Arye Eidelman</h1>
      </header>

      <WaveDivider style={{ color: colors[0], backgroundColor: colors[1] }} />
      <section className="stretchable" style={{ backgroundColor: colors[1] }} >
        <h2>Profile links</h2>
        <nav>
          <ul>
            <li><a href="https://github.com/arye-dov-eidelman">Github</a></li>
            <li><a href="https://twitter.com/arye_eidelman">Twitter</a></li>
            <li><a href="https://stackoverflow.com/users/3458162/arye-eidelman">Stack Overflow</a></li>
            <li><a href="https://www.linkedin.com/in/arye-eidelman/">Linkedin</a></li>
            <li><a href="mailto:aryedoveidelman@gmail.com">aryedoveidelman@gmail.com</a></li>
          </ul>
        </nav>
      </section>

      <WaveDivider style={{ color: colors[1], backgroundColor: colors[0] }} />
      <section className="stretchable" style={{ backgroundColor: colors[0] }} >
        <h2>Projects</h2>
        <nav>
          <ul>
            <li><a href="https://mafteiach.app">Mafteiach</a></li>
            <li><a href="https://www.linktotel.com/">Link to Tel</a></li>
            <li><a href="http://offlinechess.app/">Chess</a></li>
          </ul>
        </nav>
      </section>

      <WaveDivider style={{ color: colors[0], backgroundColor: colors[1] }} />
      <section className="stretchable" style={{ backgroundColor: colors[1] }} >
        <h2>Languages, Frameworks, & Tools</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>CSS</li>
          <li>Ruby</li>
          <li>Rails</li>
          <li>SQL</li>
          <li>Git</li>
          <li>HTML</li>
          <li>TypeScript</li>
          <li>Sass</li>
        </ul>
      </section>
      <WaveDivider style={{ color: colors[1], backgroundColor: "white" }} />
    </div>
  );
}

export default App;

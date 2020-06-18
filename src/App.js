import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Arye Eidelman</h1>
      </header>

      <article class="auto-grid">

        <section>
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

        <section>
          <h2>Projects</h2>
          <nav>
            <ul>
              <li><a href="https://mafteiach.app">Mafteiach</a></li>
              <li><a href="https://www.linktotel.com/">Link to Tel</a></li>
              <li><a href="http://offlinechess.app/">chess</a></li>
            </ul>
          </nav>
        </section>

        <section>
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

      </article>
    </div>
  );
}

export default App;

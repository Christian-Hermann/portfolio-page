function App() {
  return (
    <>
      <main>
        <section className="intro">
          <p className="name">Hi, my name is Christian Hermann.</p>

          <h1>Junior Full-Stack Developer</h1>

          <p className="description">
            I build simple, practical web apps using React, JavaScript, Node,
            and Express.
          </p>
        </section>

        <section className="about">
          <h2>About Me</h2>

          <p>
            I’m a junior developer transitioning from the hospitality industry
            into software engineering after completing Fullstack Academy’s
            coding bootcamp.
          </p>

          <p>
            I enjoy building fullstack applications with React, JavaScript,
            Express, and PostgreSQL while continuing to strengthen my frontend
            and backend skills through personal projects.
          </p>
          <p>
            Currently focused on improving my portfolio, learning modern web
            development practices, and preparing for junior developer
            opportunities.
          </p>
        </section>

        <section className="education">
          <h2>Education & Certifications</h2>

          <h3>Operation Spark</h3>
          <p>
            JavaScript and software development bootcamp focused on programming
            fundamentals, problem solving, and web development basics.
          </p>

          <h3>Fullstack Academy x LSU</h3>

          <p>
            Immersive fullstack software engineering program focused in
            javaScript, React, Node.js, Express, PostgreSQL, APIs, Git, and
            fullstack web development.
          </p>

          <h3>Codecademy Certifications</h3>

          <ul>
            <li>Learn React</li>
            <li>Learn React Router v6</li>
            <li>Learn Node.js</li>
            <li>Learn Express</li>
            <li>User Authentication & Authorization in Express</li>
            <li>Learn Intermediate JavaScript</li>
          </ul>
        </section>

        <section>
          <h2>Skills</h2>

          <div className="skills">
            <p>JavaScript</p>
            <p>React</p>
            <p>Node</p>
            <p>Express</p>
            <p>PostgreSQL</p>
          </div>
        </section>

        <section className="projects">
          <h2>Projects</h2>

          <div className="project">
            <h3>FilmRanker</h3>

            <p>Movie ranking app with authentication and CRUD features.</p>

            <div className="project-links">
              <a
                href="https://github.com/Christian-Hermann/FilmRanker"
                target="_blank"
              >
                GitHub
              </a>

              <a href="https://filmranker-2025.netlify.app/" target="_blank">
                Live Demo
              </a>
            </div>
          </div>

          <div className="project">
            <h3>PixelPal</h3>

            <p>
              Team-built digital pet applications built using React and backend
              APIs.
            </p>
            <div className="project-links">
              <a href="https://github.com/zeplin-rowe/PixelPal" target="_blank">
                GitHub
              </a>

              <a href="https://thepixelpal.netlify.app/" target="_blank">
                Live Demo
              </a>
            </div>
          </div>

          <div className="project">
            <h3>Todo List</h3>

            <p>
              Simple React application for managing and practicing fundamentals.
            </p>
            <div className="project-links">
              <a
                href="https://github.com/Christian-Hermann/todo-react"
                target="_blank"
              >
                GitHub
              </a>

              <a
                href="https://christian-todo-react.onrender.com/"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>

          <div className="project">
            <h3>Sip n' Shred</h3>

            <p>
              Planned winter sport and apres-ski app using APIs and weather
              data.
            </p>
          </div>
        </section>

        <section className="contact">
          <h2>Contact</h2>

          <p>
            Email:
            <a href="mailto:christianhermann.dev@gmail.com">
              christianhermann.dev@gmail.com
            </a>
          </p>
          <p>
            GitHub:
            <a href="https://github.com/Christian-Hermann" target="_blank">
              github.com/Christian-Hermann
            </a>
          </p>
          <p>
            LinkedIn:
            <a
              href="https://www.linkedin.com/in/christianhermanndev/"
              target="_blank"
            >
              linkedin.com/in/christianhermanndev
            </a>
          </p>
        </section>
      </main>
    </>
  );
}

export default App;

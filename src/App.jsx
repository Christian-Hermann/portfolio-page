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
            I’m a junior full-stack developer transitioning into software
            engineering after more than a decade working in the hospitality
            industry. I discovered a passion for programming through Operation
            Spark and continued my education through Fullstack Academy's
            immersive software engineering program.
          </p>

          <p>
            I enjoy building practical web applications using JavaScript, React,
            Node.js, Express, and PostgreSQL. My projects focus on creating
            useful, user-friendly experiences while continuing to strengthen
            both frontend and backend development skills.
          </p>

          <p>
            I am currently expanding my knowledge through personal projects and
            continued coursework, with a focus on full-stack development, APIs,
            authentication, and modern web technologies.
          </p>
        </section>

        <section className="education">
          <h2>Education</h2>

          <h3>Illinois Institute of Art - Chicago</h3>
          <p>Bachelor of Science in Advertising</p>

          <h3>Operation Spark</h3>
          <p>
            JavaScript and software development bootcamp focused on programming
            fundamentals, problem solving, and web development basics.
          </p>

          <h3>Fullstack Academy x LSU</h3>

          <p>
            <p>
              Full-stack software engineering program focused on JavaScript,
              React, Node.js, Express, PostgreSQL, APIs, Git, and web
              application development.
            </p>
          </p>

          <h3>
            <h3>Additional Coursework</h3>
          </h3>

          <ul>
            <li>Learn React</li>
            <li>Learn React Router v6</li>
            <li>Learn Node.js</li>
            <li>Learn Express</li>
            <li>User Authentication & Authorization in Express</li>
            <li>Learn Intermediate javaScript</li>
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
            <p>HTML</p>
            <p>CSS</p>
            <p>Git</p>
            <p>GitHub</p>
            <p>REST APIs</p>
            <p>JWT Authentication</p>
          </div>
        </section>

        <section className="projects">
          <h2>Projects</h2>

          <div className="project">
            <h3>FilmRanker</h3>

            <p>
              Fullstack movie ranking application built with React, Express, and
              PostgreSQL. Features user authentication, movie management, search
              functionality, and CRUD operations.
            </p>

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
              <p className="project-note">
                Note: The backend may take a few seconds to wake up after
                periods of inactivity.
              </p>
            </div>
          </div>

          <div className="project">
            <h3>Mini Movie Notes</h3>

            <p>
              A small full-stack CRUD application built with React and Express.
              Users can create, edit, and delete movie notes. Built as a
              refresher project to strengthen React, Express, components, props,
              and API communication skills.
            </p>

            <div className="project-links">
              <a
                href="https://github.com/Christian-Hermann/portfolio-page"
                target="_blank"
              >
                GitHub
              </a>

              <a href="https://mini-movie-notes.netlify.app/" target="_blank">
                Live Demo
              </a>
              <p className="project-note">
                Note: The backend may take a few seconds to wake up after
                periods of inactivity.
              </p>
            </div>
          </div>

          <div className="project">
            <h3>Todo List</h3>

            <p>
              Task management application built with React. Created to practice
              component structure, state management, event handling, and core
              frontend development concepts.
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
            <h3>PixelPal</h3>

            <p>
              Team-built digital pet application created during Fullstack
              Academy. Features pet status tracking, interactive gameplay
              elements, and frontend integration with backend APIs.
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
            <h3>Sip n' Shred</h3>

            <p>
              Personal fullstack application currently in development. Planned
              features include ski conditions, resort information, après-ski
              nightlife, food recommendations, and trip planning.
            </p>
            <p className="coming-soon">Currently in Development</p>
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

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
          </div>

          <div className="project">
            <h3>PixelPal</h3>

            <p>
              Team-built digital pet applications built using React and backend
              APIs.
            </p>
          </div>

          <div className="project">
            <h3>Todo List</h3>

            <p>
              Simple React application for managing and practicing fundamentals.
            </p>
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

          <p>Email: christianhermann.dev@gmail.com</p>
          <p>GitHub</p>
          <p>LinkedIn</p>
          <p>Email</p>
        </section>
      </main>
    </>
  );
}

export default App;

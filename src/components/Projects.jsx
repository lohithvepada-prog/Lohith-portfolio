import "../styles/projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="project-container">

        {/* Agri Sense */}
        <div className="project-card">
          <h3>Agri Sense</h3>
          <p>Backend Application</p>

          <div className="project-buttons">
            <a
              href="https://github.com/lohithvepada-prog/agri-sense-backend"
              className="project-btn github-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Java Programs */}
        <div className="project-card">
          <h3>Java Programs</h3>
          <p>Java Programming Projects</p>

          <div className="project-buttons">
            <a
              href="https://github.com/lohithvepada-prog/Java-Programs"
              className="project-btn github-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* CRT */}
        <div className="project-card">
          <h3>CRT</h3>
          <p>Campus Recruitment Training</p>

          <div className="project-buttons">
            <a
              href="https://github.com/lohithvepada-prog/CRT"
              className="project-btn github-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
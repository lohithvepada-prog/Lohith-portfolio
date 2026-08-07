import "../styles/projects.css";

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>

      <div className="project-container">
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>React + CSS Portfolio Website</p>
        </div>

        <div className="project-card">
          <h3>Todo App</h3>
          <p>Task Management using React</p>
        </div>

        <div className="project-card">
          <h3>E-Commerce</h3>
          <p>MERN Stack Shopping Website</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
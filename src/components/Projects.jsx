import { motion } from "motion/react";
import "../styles/projects.css";

const projects = [
  {
    title: "Agri Sense",
    category: "Backend Application",
    description:
      "A backend-focused agriculture application designed to support smart agricultural solutions through APIs, database integration, and server-side development.",
    tech: ["Node.js", "Express", "API", "Database"],
    icon: "🌱",
    github:
      "https://github.com/lohithvepada-prog/agri-sense-backend",
  },

  {
    title: "Java Programs",
    category: "Programming",
    description:
      "A collection of Java programs covering core programming concepts, arrays, loops, variables, classes, object-oriented programming, and problem solving.",
    tech: ["Java", "OOP", "Problem Solving"],
    icon: "☕",
    github:
      "https://github.com/lohithvepada-prog/Java-Programs",
  },

  {
    title: "CRT",
    category: "Programming Practice",
    description:
      "A programming practice project focused on strengthening problem-solving skills and preparing for campus recruitment and technical assessments.",
    tech: ["Python", "Programming", "Problem Solving"],
    icon: "💻",
    github:
      "https://github.com/lohithvepada-prog/CRT",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">

      <motion.div
        className="projects-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <p>MY WORK</p>

        <h2>
          Featured <span>Projects</span>
        </h2>

        <div className="heading-line"></div>

        <p className="projects-subtitle">
          A selection of projects I've built while learning,
          experimenting, and solving practical problems.
        </p>
      </motion.div>

      <div className="projects-container">

        {projects.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.title}

            initial={{
              opacity: 0,
              y: 50,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
              amount: 0.2,
            }}

            transition={{
              duration: 0.7,
              delay: index * 0.15,
            }}

            whileHover={{
              y: -10,
            }}
          >

            {/* Project Visual */}

            <div className="project-visual">

              <div className="project-grid"></div>

              <motion.div
                className="project-icon"
                whileHover={{
                  scale: 1.15,
                  rotate: 5,
                }}
              >
                {project.icon}
              </motion.div>

              <span className="project-number">
                0{index + 1}
              </span>

            </div>

            {/* Content */}

            <div className="project-content">

              <span className="project-category">
                {project.category}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">

                {project.tech.map((tech) => (
                  <span key={tech}>
                    {tech}
                  </span>
                ))}

              </div>

              <div className="project-actions">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-github"
                >
                  <span>↗</span>
                  GitHub
                </a>

              </div>

            </div>

          </motion.article>
        ))}

      </div>

      <motion.a
        href="https://github.com/lohithvepada-prog"
        target="_blank"
        rel="noopener noreferrer"
        className="all-projects-btn"

        initial={{
          opacity: 0,
          y: 20,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        viewport={{
          once: true,
        }}

        whileHover={{
          scale: 1.03,
        }}
      >
        View More on GitHub ↗
      </motion.a>

    </section>
  );
}

export default Projects;
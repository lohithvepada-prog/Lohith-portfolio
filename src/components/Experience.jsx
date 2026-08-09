import { motion } from "motion/react";
import "../styles/experience.css";

const experiences = [
  {
    type: "PROJECT",
    title: "CampusFlow",
    subtitle: "Intelligent Campus Management System",
    description:
      "A full-stack campus management platform for events, bookings, and student services with secure authentication, role-based access control, and payment integration.",
    technologies: [
      "Full Stack",
      "Celery",
      "Redis",
      "Razorpay",
      "Docker",
      "Render",
    ],
  },
  {
    type: "PROJECT",
    title: "SkillLink",
    subtitle: "Multi-Tenant Freelance & Collaboration Platform",
    description:
      "A scalable multi-tenant platform built with FastAPI and PostgreSQL, featuring asynchronous job processing, AI-assisted project matching, and intelligent content moderation.",
    technologies: [
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "AI",
      "Celery",
    ],
  },
];

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <motion.div
        className="experience-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span>MY JOURNEY</span>

        <h2>
          Experience & <strong>Education</strong>
        </h2>

        <p>
          Building practical systems, exploring modern technologies, and
          continuously growing as a developer.
        </p>
      </motion.div>

      <div className="timeline">
        {experiences.map((item, index) => (
          <motion.div
            className="timeline-item"
            key={item.title}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -50 : 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
            }}
          >
            <div className="timeline-dot"></div>

            <div className="timeline-card">
              <span className="timeline-type">{item.type}</span>

              <h3>{item.title}</h3>

              <h4>{item.subtitle}</h4>

              <p>{item.description}</p>

              <div className="timeline-tech">
                {item.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        <motion.div
          className="timeline-item education-item"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="timeline-dot"></div>

          <div className="timeline-card">
            <span className="timeline-type">EDUCATION</span>

            <h3>B.Tech in Computer Science & Engineering</h3>

            <h4>NSRIT · Visakhapatnam</h4>

            <p>
              Currently pursuing B.Tech in Computer Science & Engineering,
              focusing on software development, backend systems, AI-assisted
              development, and problem solving.
            </p>

            <div className="education-meta">
              <span>2025 – 2029</span>
              <span>Computer Science & Engineering</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
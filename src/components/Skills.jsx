import { motion } from "motion/react";
import "../styles/skills.css";

const skillGroups = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "Programming",
    icon: "💻",
    skills: ["Java", "Python"],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">

      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <p>WHAT I WORK WITH</p>

        <h2>
          Technical <span>Skills</span>
        </h2>
      </motion.div>

      <div className="skills-container">

        {skillGroups.map((group, index) => (
          <motion.div
            className="skill-group"
            key={group.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -6,
            }}
          >
            <div className="skill-group-header">
              <span>{group.icon}</span>
              <h3>{group.title}</h3>
            </div>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <motion.div
                  className="skill-item"
                  key={skill}
                  whileHover={{
                    y: -5,
                    scale: 1.03,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="skill-dot"></span>
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Skills;
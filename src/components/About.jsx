import { motion } from "motion/react";
import "../styles/about.css";

const highlights = [
  {
    icon: "💻",
    title: "Full Stack Development",
    description:
      "Building responsive frontend interfaces and developing reliable backend applications with modern web technologies.",
  },
  {
    icon: "🚀",
    title: "Continuous Learning",
    description:
      "Constantly exploring new technologies and improving development skills through practical projects and hands-on experience.",
  },
  {
    icon: "🧠",
    title: "Problem Solving",
    description:
      "Enjoy solving programming challenges and turning complex requirements into simple, effective solutions.",
  },
];

function About() {
  return (
    <section className="about-section" id="about">

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        About <span>Me</span>
      </motion.h2>

      <div className="about-container">

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <p>
            I'm a passionate Full Stack Developer who enjoys building modern,
            responsive, and user-friendly web applications. I love turning
            ideas into practical digital experiences and continuously
            improving my development skills through hands-on projects.
          </p>

          <p>
            I work with technologies like React, JavaScript, Node.js, Express,
            and MongoDB. I also have experience with Java and Python, giving me
            a strong foundation in programming, object-oriented concepts, and
            problem-solving.
          </p>

          <p>
            I'm always interested in learning new technologies, exploring
            better ways to write clean and efficient code, and building
            projects that solve real-world problems.
          </p>
        </motion.div>

        <div className="about-cards">

          {highlights.map((item, index) => (
            <motion.div
              className="about-card"
              key={item.title}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                borderColor: "rgba(0, 217, 255, 0.5)",
              }}
            >
              <div className="about-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default About;
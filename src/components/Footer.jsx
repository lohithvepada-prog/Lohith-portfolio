import { motion } from "motion/react";
import "../styles/footer.css";

function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="footer-content">
        <h3>
          Ghost<span>.</span>
        </h3>

        <p>
          Building modern digital experiences with code, creativity,
          and continuous learning.
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-line"></div>

        <p className="copyright">
          © {new Date().getFullYear()} Lohith Vepada. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}

export default Footer;
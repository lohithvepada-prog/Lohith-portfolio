import { motion } from "motion/react";
import "../styles/navbar.css";

function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <a
        href="#home"
        className="logo"
        onClick={(e) => {
          e.preventDefault();
          document
            .getElementById("home")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Ghost<span>.</span>
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </motion.nav>
  );
}

export default Navbar;
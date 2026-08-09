import { motion } from "motion/react";
import "../styles/profile.css";

function Profile() {
  return (
    <section className="profile-section" id="profile">

      <motion.div
        className="profile-content"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span className="profile-label">
          DEVELOPER PROFILE
        </span>

        <h2>
          More than just <span>code.</span>
        </h2>

        <p>
          I'm Lohith Vepada, an Applied AI Developer passionate about
          building practical applications and solving real-world problems
          with modern technologies.
        </p>

        <p>
          I enjoy working across frontend and backend development while
          continuously learning new technologies and improving my
          problem-solving skills.
        </p>

        <div className="profile-highlights">

          <div>
            <strong>Full Stack</strong>
            <span>Development</span>
          </div>

          <div>
            <strong>AI</strong>
            <span>Development</span>
          </div>

          <div>
            <strong>Problem</strong>
            <span>Solving</span>
          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default Profile;
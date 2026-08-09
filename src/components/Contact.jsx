import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

emailjs.init({
  publicKey: "2yao-C_BEvDFG2IOr",
});

function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const templateParams = {
      title: "Portfolio Contact",
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
      time: new Date().toLocaleString(),
    };

    try {
      const response = await emailjs.send(
        "service_vener5g",
        "template_g2it9fo",
        templateParams
      );

      console.log("SUCCESS:", response.status, response.text);

      alert("Message sent successfully! 🚀");

      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);

      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-label">GET IN TOUCH</span>

        <h2>
          Let's <span>Work Together</span>
        </h2>

        <p>
          Have a project, opportunity, or idea in mind? I'd love to hear
          from you. Send me a message and let's build something meaningful.
        </p>
      </motion.div>

      <motion.div
        className="contact-wrapper"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        <div className="contact-info">
          <div className="contact-badge">
            <span></span>
            Available for opportunities
          </div>

          <h3>Let's connect.</h3>

          <p>
            I'm open to internships, full-time opportunities, freelance
            projects, and interesting collaborations.
          </p>

          <div className="contact-links">
            {/* Email */}
            <a href="mailto:lohithvepada@gmail.com">
              <span>✉️</span>

              <div>
                <small>Email</small>
                <strong>lohithvepada@gmail.com</strong>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/lohithvepada-prog"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>↗</span>

              <div>
                <small>GitHub</small>
                <strong>github.com/lohithvepada-prog</strong>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/lohithvepada"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>in</span>

              <div>
                <small>LinkedIn</small>
                <strong>Let's connect on LinkedIn</strong>
              </div>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Your Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="input-group">
            <label>Your Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-group">
            <label>Your Message</label>

            <textarea
              name="message"
              placeholder="Tell me about your project..."
              required
            ></textarea>
          </div>

          <motion.button
            type="submit"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 30px rgba(0, 217, 255, 0.25)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            Send Message <span>↗</span>
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}

export default Contact;
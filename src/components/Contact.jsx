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
      console.error("Status:", error.status);
      console.error("Text:", error.text);

      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
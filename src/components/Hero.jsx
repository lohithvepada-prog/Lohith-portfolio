import "../styles/hero.css";
import hero from "../assets/hero.png";

function Hero() {
  return (
   <section className="hero" id="home">
      <div className="hero-content">
        <h1>Hi, I'm Ghost 👋</h1>

        <h2>Full Stack Developer</h2>

        <p>
          I build modern and responsive web applications using React,
          Node.js, Express, and MongoDB.
        </p>

        <button>Hire Me</button>
      </div>

      <div className="hero-image">
        <img src={hero} alt="Hero" />
      </div>
    </section>
  );
}

export default Hero;
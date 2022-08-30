import "./App.css";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import Intro from "./Component/Intro/Intro";
import Navigation from "./Component/Navigation/Navigation";
import { FiGithub, FiInstagram, FiLinkedin, FiFacebook } from "react-icons/fi";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import { motion } from "framer-motion";
function App() {
  const particlesInit = useCallback(async (engine) => {
    await console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div className="App">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: "none",
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 1,
              },
            },
          },
          particles: {
            color: {
              value: "#999",
            },
            links: {
              color: "#FFFFFF",
              distance: 75,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 30,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="App-social">
        <div className="App-line"></div>
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 270, 0, 0, 0, 0],
          }}
        >
          <a
            href="https://github.com/hubertheodore"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
          </a>
        </motion.div>
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 0, 0, 0],
          }}
        >
          <a
            href="https://www.instagram.com/hubertheodore/"
            target="_blank"
            rel="noreferrer"
          >
            <FiInstagram />
          </a>
        </motion.div>
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 0, 270, 0, 0],
          }}
        >
          <a
            href="https://www.linkedin.com/in/hubert-theodore-7a7518214/"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin />
          </a>
        </motion.div>
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 0, 0, 270, 0],
          }}
        >
          <a
            href="https://www.facebook.com/hubert.theodore/"
            target="_blank"
            rel="noreferrer"
          >
            <FiFacebook />
          </a>
        </motion.div>
        <div className="App-line"></div>
      </div>
      <div className="App-email">
        <a
          href="https://www.facebook.com/hubert.theodore/"
          target="_blank"
          rel="noreferrer"
        >
          hubertheodore18@gmail.com
        </a>

        <div className="App-line"></div>
      </div>
      <Navigation />
      <Intro />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Blogs from './Components/Blogs/Blogs';
import Explore from './Components/Explore/Explore';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Project from './Components/Project/Project';
import AuthProvider from './Components/context/AuthProvider';
import Error from './Components/Error/Error';
import { tsParticles } from 'tsparticles';

function App() {

  var color = "#75A5B7";
  var maxParticles = 80;

  // tsParticles Config.
  tsParticles.load("tsparticles", {
    fpsLimit: 60,
    particles: {
      number: {
        value: maxParticles,
        density: {
          enable: true,
          value_area: maxParticles * 10 * 2
        }
      },
      color: {
        value: color
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: color,
        opacity: 1,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      // detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 1
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    // retina_detect: true
  });


  return (
    <AuthProvider>
      <div id="tsparticles"></div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/project" element={<Services />} />
          <Route path="/project/:projectId" element={<Project />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;

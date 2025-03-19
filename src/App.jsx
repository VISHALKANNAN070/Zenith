import './styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-scroll';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="about" smooth={true} duration={500}>About</Link></li>
            <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
            <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="projects"><Project /></section>
        <section id="contact"><Contact /></section>
      </main>
    </Router>
  );
}

export default App;

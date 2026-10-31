import React, { lazy, Suspense } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import TechSkills from './components/TechSkills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
// Last, so light-theme overrides win over component styles
import './theme-light.css';

// Three.js is loaded in its own chunk so it doesn't delay the first paint
const Antigravity = lazy(() => import('./components/Antigravity'));

function App() {
  return (
    <div className="App">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="antigravity-background" aria-hidden="true">
        <Suspense fallback={null}>
          <Antigravity
            magnetRadius={14}
            ringRadius={12}
            waveAmplitude={1.6}
            particleSize={1.3}
            count={700}
            particleShape="tetrahedron"
            color="#6366f1"
            autoAnimate={true}
          />
        </Suspense>
      </div>
      <Header />
      <main id="main" tabIndex="-1">
        <Hero />
        <About />
        <TechSkills />
        <Experience />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

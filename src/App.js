import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';


function App() {
  return (
   <div>
    <Header />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  
   </div>
  );
}

export default App;
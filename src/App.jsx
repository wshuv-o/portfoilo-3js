import React from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const Home = () => (
  <div className="relative z-0 bg-primary"> 
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar />
      <Hero />
    </div>
    <About />
    <Experience />
    <Tech />
    <Works count={3}/>
    <Feedbacks />
    <div className="relative z-0">
      <Contact />
      <StarsCanvas />
    </div>
  </div>
);

const AboutPage = () => (
  <div className="relative z-0 bg-primary">
    <Navbar />
    <About />
  </div>
);

const ContactPage = () => (
  <div className="relative z-0 bg-primary">
    <Navbar />
    <Contact />
  </div>
);

// Accept count as a prop and pass it to Works
const ProjectPage = ({ count = 0 }) => (
  <div className="relative z-0 bg-primary">
    <Navbar />
    <Works count={count} />
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectPage count={0} />} />
        <Route path="/projects/:count" element={<ProjectPageWrapper />} />
      </Routes>
    </BrowserRouter>
  );
};

// Wrapper to get the count param from the URL and pass it as a prop
const ProjectPageWrapper = () => {
  const { count } = useParams();
  const countNum = Number(count) || 0;
  return <ProjectPage count={countNum} />;
};

export default App;

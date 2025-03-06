import React from 'react';
import About from './component/About/About';
import Sidebar from './component/Sidebar/Sidebar';
import TechStack from './component/TechStack/TechStack';
import Project from './component/Projects/Project';
import WorkExperience from './component/WorkExperience/WorkExperience';
import Testimonial from './component/Testimonial/Testimonial';
import Contact from './component/Contact/Contact';
import NavbarMobileView from './component/Sidebar/NavbarMobileView';
import ScrollToTop from 'react-scroll-to-top';
import './App.css';

function App() {
  return (
    <div className='App'>
      <NavbarMobileView />
      <Sidebar /> {/* Home will be inside Sidebar */}
      <About />
      <TechStack />
      <Project />
      <WorkExperience />
      <Testimonial />
      <Contact />
      <ScrollToTop
        smooth={true}
        top='600'
        color='white'
        height='20'
        width='20'
        style={{
          borderRadius: '90px',
          backgroundColor: '#38004c',
        }}
      />
    </div>
  );
}

export default App;

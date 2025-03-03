import React from 'react';
import About from './component/About/About';
import Sidebar from './component/Sidebar/Sidebar';
import TechStack from './component/TechStack/TechStack';
import Project from './component/Projects/Project';

function App() {
  return (
    <div className='App'>
      <Sidebar /> {/* Home will be inside Sidebar */}
      <div className='main-content'>
        <About />
        <TechStack />
        <Project />
      </div>
    </div>
  );
}

export default App;

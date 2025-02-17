import React from 'react';
import About from './component/About/About';
import Sidebar from './component/Sidebar/Sidebar';
import TechStack from './component/TechStack/TechStack';

function App() {
  return (
    <div className='App'>
      <Sidebar /> {/* Home will be inside Sidebar */}
      <About />
      <TechStack />
    </div>
  );
}

export default App;

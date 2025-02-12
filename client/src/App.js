import React from 'react';

import Home from './component/Home/Home';
import Sidebar from './component/Sidebar/Sidebar';

function App() {
  return (
    <div className='App'>
      <Sidebar /> {/* Home will be inside Sidebar */}
    </div>
  );
}

export default App;

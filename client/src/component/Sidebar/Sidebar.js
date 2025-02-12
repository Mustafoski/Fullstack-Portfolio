import React, { useState } from 'react';
import './Sidebar.css';
import Home from '../Home/Home';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import SidebarList from './SidebarList';

const Sidebar = () => {
  const [expandSidebar, setExpandSidebar] = useState(true);

  return (
    <div className='app-container'>
      {/* Sidebar */}
      <div className={expandSidebar ? 'sidebar sidebar-expand' : 'sidebar'}>
        <div className='icon-for-sidebar-expand-and-collapse'>
          <p onClick={() => setExpandSidebar(!expandSidebar)}>
            {expandSidebar ? (
              <BsChevronLeft size={30} />
            ) : (
              <BsChevronRight size={30} />
            )}
          </p>
        </div>
        <SidebarList expandSidebar={expandSidebar} />
      </div>

      {/* Main Content */}
      <div className={expandSidebar ? 'content expanded' : 'content'}>
        <Home />
      </div>
    </div>
  );
};

export default Sidebar;

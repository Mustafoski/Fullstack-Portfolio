import React from 'react';
import './SidebarList.css';
import profilePic from '../../image/emir.jpeg';
import {
  FcHome,
  FcNightPortrait,
  FcTodoList,
  FcContacts,
  FcFactory,
  FcSalesPerformance,
} from 'react-icons/fc';
import { MdBiotech, MdCastForEducation } from 'react-icons/md';

const SidebarList = ({ expandSidebar }) => {
  return (
    <React.Fragment
      className={`navbar-items ${expandSidebar ? 'expanded' : 'collapsed'}`}
    >
      {/* Profile Section */}
      {expandSidebar && (
        <div className='sidebar-profile-pic'>
          <img src={profilePic} alt='Emir' className='profile-pic' />
          <h3>Emir Mustafoski</h3>
        </div>
      )}

      {/* Sidebar Menu List */}
      <ul className='sidebar-menu'>
        {[
          { icon: <FcHome size={25} />, label: 'Home' },
          { icon: <FcNightPortrait size={25} />, label: 'About' },
          { icon: <FcFactory size={25} />, label: 'Work Experience' },
          { icon: <MdBiotech size={25} />, label: 'Tech Stack' },
          {
            icon: <MdCastForEducation size={25} color='orange' />,
            label: 'Education',
          },
          { icon: <FcTodoList size={25} />, label: 'Projects' },
          { icon: <FcSalesPerformance size={25} />, label: 'Testimonials' },
          { icon: <FcContacts size={25} />, label: 'Contact' },
        ].map((item, index) => (
          <li key={index} className='sidebar-item'>
            {item.icon}
            {expandSidebar && <span>{item.label}</span>}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default SidebarList;

import React from 'react';
import './Project.css';
import { FcExpand, FcCollapse } from 'react-icons/fc';

const ProjectList = ({ name, des, projectLink, techUsed }) => {
  return (
    <div className='project-list'>
      <div className='title-and-collapse-option'>
        <h5>{name}</h5>
        <p>
          <FcExpand size={20} />
        </p>
      </div>
    </div>
  );
};

export default ProjectList;

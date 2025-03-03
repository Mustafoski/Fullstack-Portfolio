import React, { useState } from 'react';
import './Project.css';
import { FcExpand, FcCollapse } from 'react-icons/fc';

const ProjectList = ({ name, des, projectLink, techUsed }) => {
  const [show, setShow] = useState(false);

  const handleShowAndCollapse = () => {
    setShow(!show);
  };

  return (
    <div
      className={show ? 'project-list-opened' : 'project-list'}
      onClick={handleShowAndCollapse}
    >
      <div className='title-and-collapse-option'>
        <h5>{name}</h5>
        <p>{show ? <FcCollapse size={20} /> : <FcExpand size={20} />}</p>
      </div>

      {show ? <p>{des}</p> : <p>{des.substring(0, 10)}... Read More</p>}

      <p>{des.substring(0, 150)}</p>
      <div className='row'>
        {techUsed &&
          techUsed.map((tech, index) => (
            <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12' key={index}>
              <div className='tech-used-in-project'>
                <p>{tech.techName}</p> {/* Fix key name to 'techName' */}
              </div>
            </div>
          ))}
      </div>
      <div className='live-demo-button'>
        <a href={projectLink} _target>
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectList;

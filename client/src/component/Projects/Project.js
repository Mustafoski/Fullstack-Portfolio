import React from 'react';
import './Project.css';
import ProjectList from './ProjectList';

const Project = () => {
  const data = [
    {
      name: 'MERN Stack Job Portal',
      des: 'A job portal application built using MERN stack.',
      projectLink: 'www.google.com',
      techUsed: [
        {
          techName: 'React',
        },
        {
          techName: 'Node',
        },
        {
          techName: 'Express',
        },
        {
          techName: 'MongoDB',
        },
      ],
    },
    {
      name: 'MERN Stack Event Management Portal',
      des: 'A job portal application built using MERN stack.',
      projectLink: 'www.google.com',
      techUsed: [
        {
          techName: 'Django',
        },
        {
          techName: 'Vue js',
        },
        {
          techName: 'Express js',
        },
        {
          techName: 'Nuxt js',
        },
      ],
    },
    {
      name: 'MERN Stack Social Media Portal',
      des: 'A job portal application built using MERN stack.',
      projectLink: 'www.google.com',
      techUsed: [
        {
          techName: 'Node',
        },
        {
          techName: 'Angular js',
        },
        {
          techName: 'Express js',
        },
        {
          techName: 'Nest.js',
        },
      ],
    },
    {
      name: 'MERN Online Learning Portal',
      des: 'A job portal application built using MERN stack.',
      projectLink: 'www.google.com',
      techUsed: [
        {
          techName: 'Node',
        },
        {
          techName: 'React',
        },
        {
          techName: 'Express js',
        },
        {
          techName: 'Next js',
        },
        {
          techName: 'MongoDB',
        },
      ],
    },
  ];
  return (
    <div className='container'>
      <div className='section-title'>
        <h5>Projects</h5>
        <span className='line'></span>
      </div>
      <div className='row'>
        {data.map((project, index) => (
          <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12' key={index}>
            <ProjectList {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;

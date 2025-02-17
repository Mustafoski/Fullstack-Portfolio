import React from 'react';
import './About.css';
import ProfilePic from '../../image/emir.jpeg';

const About = ({ isSidebarExpanded }) => {
  return (
    <div
      className={`container about-section ${
        isSidebarExpanded ? '' : 'collapsed'
      }`}
    >
      <div className='row'>
        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
          <div className='about-image'>
            <img src={ProfilePic} alt='Emir' />
          </div>
        </div>
        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
          <div className='about-details'>
            <div className='about-title'>
              <h5>About me</h5>
              <span className='line'></span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              necessitatibus molestiae obcaecati ratione animi accusamus minima
              voluptatibus illo labore! Dolore cum obcaecati magni eius sapiente
              amet! Necessitatibus commodi ab unde. Odit quam rem voluptatum,
              esse, voluptates nulla eius ab beatae quis cum alias facere! Neque
              impedit ullam officiis error distinctio sed! Tenetur distinctio
              eligendi iste necessitatibus optio iusto est voluptatem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

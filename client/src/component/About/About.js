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
      <div className='about-image'>
        <img src={ProfilePic} alt='Profile Photo' />
      </div>

      <div className='about-details'>
        <div className='about-title'>
          <h5>About Me</h5>
          <span className='line'></span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eveniet
          nesciunt veniam? Saepe ducimus laudantium possimus, ratione eaque eius
          voluptatem error sint suscipit tenetur maiores molestiae, veniam
          maxime numquam nesciunt. Culpa blanditiis veniam adipisci neque minus!
          Corrupti ut, maxime debitis sunt id accusantium consectetur veritatis
          eligendi quod consequuntur ipsa atque libero itaque tempore suscipit
          dolore, impedit cum! Numquam, corrupti animi. Dolore possimus magnam
          esse totam repellat voluptatum nobis consequatur, inventore, fugit
          porro similique veritatis eaque quisquam pariatur facere beatae, sit
          sunt sequi eum odio officiis iure facilis nam. Quis, sit!
        </p>
      </div>
    </div>
  );
};

export default About;

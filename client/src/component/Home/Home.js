import React from 'react';
import './Home.css';
import Typewriter from 'typewriter-effect';
import MyCv from './Emir CV.pdf';

const Home = () => {
  return (
    <div className='container-fluid home'>
      <div className='container home-content'>
        <h1>Hi I'm a Emir Mustafoski </h1>
        <h3>
          <Typewriter
            options={{
              strings: [
                'Web Developer',
                'React Developer',
                'MERN Stack Developer',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h3>
        <div className='button-for-action'>
          <div className='hire-me-button'>Hire Me</div>
          <div className='get-resume-button'>
            <a href={MyCv} download='EmirCV'>
              Get Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

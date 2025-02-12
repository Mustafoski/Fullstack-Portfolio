import React from 'react';
import './TechStack.css';

const TechStack = () => {
  const data = [
    {
      id: 1,
      name: 'React',
      icon: 'https://img.icons8.com/color/48/000000/react-native.png',
    },
    {
      id: 2,
      name: 'Node.js',
      icon: 'https://img.icons8.com/color/48/000000/nodejs.png',
    },
    {
      id: 3,
      name: 'MongoDB',
      icon: 'https://img.icons8.com/color/48/000000/mongodb.png',
    },
    {
      id: 4,
      name: 'Express',
      icon: 'https://img.icons8.com/?size=100&id=Lk2Q5FRKDWGI&format=png&color=000000',
      customClass: 'custom-icon',
    },
    {
      id: 5,
      name: 'JavaScript',
      icon: 'https://img.icons8.com/color/48/000000/javascript.png',
    },
    {
      id: 6,
      name: 'HTML5',
      icon: 'https://img.icons8.com/color/48/000000/html-5.png',
    },
    {
      id: 7,
      name: 'CSS3',
      icon: 'https://img.icons8.com/color/48/000000/css3.png',
    },
    {
      id: 8,
      name: 'Bootstrap',
      icon: 'https://img.icons8.com/color/48/000000/bootstrap.png',
    },
    {
      id: 9,
      name: 'Vue',
      icon: 'https://img.icons8.com/?size=100&id=rY6agKizO9eb&format=png&color=000000',
      customClass: 'custom-icon',
    },
    {
      id: 10,
      name: 'Angular',
      icon: 'https://img.icons8.com/?size=100&id=71257&format=png&color=000000',
      customClass: 'custom-icon',
    },
    {
      id: 11,
      name: 'React Native',
      icon: 'https://img.icons8.com/color/48/000000/react-native.png',
    },
    {
      id: 12,
      name: 'SQL',
      icon: 'https://img.icons8.com/color/48/000000/sql.png',
    },
  ];
  const colors = [
    '#FF0000',
    '#FFA500',
    '#FFFF00',
    '#008000',
    '#0000FF',
    '#4B0082',
    '#EE82EE',
    '#000000',
    '#FFFFFF',
    '#C0C0C0',
    '#808080',
    '#800000',
    '#808000',
    '#008080',
    '#800080',
  ];

  const [showMoreTechStack, setShowMoreTechStack] = React.useState(9);

  const loadMore = () => {
    setShowMoreTechStack(prev => prev + 3);
  };

  return (
    <div className='container techstack-section'>
      <div className='section-title'>
        <h5>TechStack</h5>
        <span className='line'></span>
      </div>
      <div className='row'>
        {data.slice(0, showMoreTechStack).map((item, index) => (
          <div key={item.id} className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
            <div className='tech-content'>
              <img
                src={item.icon}
                alt={item.name}
                className={item.customClass ? item.customClass : ''}
              />
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
      {showMoreTechStack >= data.length ? null : (
        <span className='load-more-tech-stack' onClick={loadMore}>
          Load more
        </span>
      )}
    </div>
  );
};

export default TechStack;

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
      icon: 'https://img.icons8.com/color/48/000000/express.png',
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
      icon: 'https://img.icons8.com/color/48/000000/vue-js.png',
      customClass: 'custom-icon',
    },
    {
      id: 10,
      name: 'Angular',
      icon: 'https://img.icons8.com/color/48/000000/angularjs.png',
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
    '#8181F7',
    '#F1C40F',
    '#4B088A',
    '#FE2EF7',
    '#585858',
    '#800000',
    '#0088FE',
    '#00C49F',
    '#FFBB28',
    '#FF8042',
    '#001CCE',
    '#FF1042',
    '#FFBB24',
    '#00C79F',
    '#FF1042',
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
            <div
              className={
                index === 0
                  ? 'tech-content-marked tech-content'
                  : 'tech-content'
              }
            >
              <span
                className='tech-number'
                style={{ backgroundColor: colors[index] }}
              >
                {index + 1}
              </span>
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

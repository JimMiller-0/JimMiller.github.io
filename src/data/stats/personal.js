import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1989-03-19T09:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'nationalparks',
    label: 'National Parks visited',
    value: 6,
    link:
      'https://www.google.com/maps/d/u/0/edit?mid=1mrlQTz9bPeRgvGUbCSyrhmzlqU7hm5I&usp=sharing',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'West Hartford, CT',
  },
];

export default data;

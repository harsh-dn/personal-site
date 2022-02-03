import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1999-12-29T08:20:00');
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
    key: 'cities',
    label: 'Cities visited',
    value: 30,
    link:
      'https://www.google.com/maps/d/u/0/edit?mid=1jfNIq2pjiJUoFvVS7aqZ7NyK1yLddb2X&usp=sharing',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Gaya',
  },
];

export default data;

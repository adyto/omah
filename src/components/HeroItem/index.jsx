import React from 'react';
import HeaderCard from './HeaderCard';
import HeaderText from './HeaderText';

const HeroItem = () => {
  return (
    <div className="flex flex-col xl:gap-14">
      <HeaderText />
      <HeaderCard />
    </div>
  );
};

export default HeroItem;

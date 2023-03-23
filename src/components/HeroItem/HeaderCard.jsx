import React from 'react';
import { HeroBanner } from '@/assets';

const HeaderCard = () => {
  console.log(HeroBanner);
  return (
    <div className="container mx-auto px-4 xl:mb-32">
      <div
        className=" relative w-full bg-center bg-cover bg-no-repeat py-[243px] "
        style={{ backgroundImage: `url(${HeroBanner.src})` }}
      >
        <div className="absolute -bottom-14 right-0 h-28 flex flex-row items-center max-w-4xl bg-white xl:p-4 xl:gap-28">
          <div className="flex flex-row gap-16">
            <div className="flex flex-col">
              <p>Select City</p>
              <p>Jakarta</p>
            </div>
            <div className="flex flex-col">
              <p>Select City</p>
              <p>Jakarta</p>
            </div>
            <div className="flex flex-col">
              <p>Select City</p>
              <p>Jakarta</p>
            </div>
            <div className="flex flex-col">
              <p>Select City</p>
              <p>Jakarta</p>
            </div>
          </div>
          <button className="bg-text-color-palette-2 text-white xl:py-7 xl:px-14">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderCard;

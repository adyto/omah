import React from 'react';

const HeaderText = () => {
  return (
    <div className="flex flex-row mx-auto container px-4 justify-between items-center">
      <h1 className="font-medium xl:text-6xl">
        Ready to<span className="block">find your new home</span>
      </h1>
      <div className="flex flex-row xl:w-[434px]">
        <span className="border-b-[3px] w-16 h-3 mr-5 border-text-color-palette-2" />
        <p className=" text-text-color-palette-1 xl:text-xl">
          looking for a house with a low price and quality here, and sell your
          house quickly here
        </p>
      </div>
    </div>
  );
};

export default HeaderText;

import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled, RxDot } from "react-icons/rx";

interface slideInterface {
  url: string;
}

const LocationCarousel = ({ slides }: { slides: slideInterface[] }) => {
  /* make an array of objects with image file paths as the values as pass in as prop 
     
    const slides = [
    {url: ""},
    {url: ""},
    {url: ""},
    {url: ""}
  ]   
    
    
    */
  // const slides = [
  //     {url: "/locations/chelsea/harbs01.jpg"},
  //     {url: "/locations/chelsea/harbs02.jpg"},
  //     {url: "/locations/chelsea/harbs03.jpg"},
  //     {url: "/locations/chelsea/harbs04.jpg"},
  //     {url: "/locations/chelsea/harbs05.jpg"},
  //     {url: "/locations/chelsea/harbs06.jpg"},
  //     {url: "/locations/chelsea/harbs07.jpg"},
  //     {url: "/locations/chelsea/harbs08.jpg"},
  //     {url: "/locations/chelsea/harbs09.jpg"},
  //     {url: "/locations/chelsea/harbs10.jpg"},
  //     {url: "/locations/chelsea/harbs11.jpg"}
  // ]

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className=" max-w-[1400px] h-[780px] w-full m-auto py-8 px-4 relative overflow-x-hidden">
      <div className="flex flex-row items-center content-center justify-center max-w-[1400px]">
        {/* left */}
        <img
          src={
            currentIndex === 0
              ? `${slides[slides.length - 1].url}`
              : `${slides[currentIndex - 1].url}`
          }
          className="w-auto  min-h-[50px] max-h-[300px] opacity-50 
          hidden md:block"
        ></img>

        {/* center image */}
        <img
          src={`${slides[currentIndex].url}`}
          className="w-auto  min-h-[80px] max-h-[500px] m-10"
        ></img>

        {/* right image */}
        <img
          src={
            currentIndex === slides.length - 1
              ? `${slides[0].url}`
              : `${slides[currentIndex + 1].url}`
          }
          className="w-auto  min-h-[50px] max-h-[300px] opacity-50
          hidden md:block"
        ></img>
      </div>
      <div className="absolute top-[40%] -translate-x-0 tranlate-y-[50%] left-5 text2xl rounded-full p-2 bg-black/50 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className="absolute top-[40%] -translate-x-0 tranlate-y-[50%] right-5 text2xl rounded-full p-2 bg-black/50 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} onClick={() => goToSlide(slideIndex)}>
            {slideIndex === currentIndex ? (
              <RxDotFilled />
            ) : (
              <RxDot className="hover:text-brown-500 cursor-pointer" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationCarousel;

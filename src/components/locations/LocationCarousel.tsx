import React, {useState} from "react";
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled, RxDot} from 'react-icons/rx'


const LocationCarousel = () => {

const slides = [
    {url: "/locations/chelsea/harbs01.jpg"},
    {url: "/locations/chelsea/harbs02.jpg"},
    {url: "/locations/chelsea/harbs03.jpg"}
]    

const [currentIndex, setCurrentIndex] = useState(0)

const prevSlide = () => {
    const newIndex = currentIndex === 0 ? slides.length-1 : currentIndex-1
    setCurrentIndex(newIndex)

}

const nextSlide = () => {
    const newIndex = currentIndex === slides.length-1 ? 0 : currentIndex+1
    setCurrentIndex(newIndex)
}

const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
}


  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative'>
    
        <div className="flex flex-row justify-center lg:justify-around">
        <img src={currentIndex === 0 ? `${slides[slides.length-1].url}` : `${slides[currentIndex-1].url}`} className="w-auto  min-h-[50px] max-h-[300px]"></img>
        <img src={`${slides[currentIndex].url}`} className="w-auto  min-h-[80px] max-h-[500px] m-10"></img>
        <img src={currentIndex === slides.length-1 ? `${slides[0].url}` : `${slides[currentIndex+1].url}`} className="w-auto  min-h-[50px] max-h-[300px]"></img>
        
        </div>
        <div className="absolute top-[50%] -translate-x-0 tranlate-y-[50%] left-5 text2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"><BsChevronCompactLeft onClick={prevSlide} size={30}/></div>
        <div className="absolute top-[50%] -translate-x-0 tranlate-y-[50%] right-5 text2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"><BsChevronCompactRight onClick={nextSlide} size={30}/></div>
        <div className="flex top-4 justify-center py-2">
            {slides.map((slide, slideIndex) => (
                <div key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                    {slideIndex===currentIndex ? <RxDotFilled /> : <RxDot />}
                </div>
                
                ))}
        </div>
    </div>
  );
};

export default LocationCarousel;

'use client'
import { useState } from "react";


const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    './brasilia.jpg',
    './losangeles.jpg',
    './russia.jpg',
    './orlando.jpg',
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="relative ">
      <button
        className="absolute ml-5 top-1/2 font-bold  bg-translate text-xl hover:bg-zinc-200 hover:text-black text-white p-3 rounded-full ease-linear duration-300"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        className="absolute right-0 mr-5 top-1/2 font-bold  bg-translate text-xl hover:bg-zinc-200 hover:text-black text-white p-3 rounded-full ease-linear duration-300"
        onClick={nextSlide}
      >
        &gt;
      </button>
      <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} width="100%" />
    </div>
  );
};

export default Carousel;

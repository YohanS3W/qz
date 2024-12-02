import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SliderImage {
  url: string;
  alt: string;
}

interface FeatureSliderProps {
  images: SliderImage[];
}

const FeatureSlider: React.FC<FeatureSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full hover:bg-[#7A0000] hover:text-white transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full hover:bg-[#7A0000] hover:text-white transition-colors"
      >
        <ChevronRight size={24} />
      </button>
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? 'bg-[#7A0000]' : 'bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureSlider;
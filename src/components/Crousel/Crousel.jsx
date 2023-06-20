import React, { useState } from "react";
import "./crousel.scss";

const images = [
  "https://s7ap1.scene7.com/is/image/adityabirlafashion/VH_D_HB_17_Flex?resMode=sharp2&wid=1600&hei=460",
  "https://s7ap1.scene7.com/is/image/adityabirlafashion/VH_D_HB_17_Flex?resMode=sharp2&wid=1600&hei=460",
  "https://s7ap1.scene7.com/is/image/adityabirlafashion/VH_D_HB_17_Flex?resMode=sharp2&wid=1600&hei=460",
  "https://s7ap1.scene7.com/is/image/adityabirlafashion/VH_D_HB_17_Flex?resMode=sharp2&wid=1600&hei=460",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel" style={{ "transform":`translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="jjl"
            className={index === currentIndex ? "active" : ""}
          />
        ))}
      </div>
      <div className="arrow-cont">
        <div className="arrow left-arrow" onClick={goToPrevious}>
          <span className="arrow-icon">&larr;</span>
        </div>
        <div className="arrow right-arrow" onClick={goToNext}>
          <span className="arrow-icon">&rarr;</span>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

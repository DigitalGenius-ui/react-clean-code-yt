import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import LowerSLider from "./LowerSlider";

const CustomSlider = () => {
  let data = [];
  Array.from({ length: 10 }).forEach((_, i) => {
    data.push(i);
  });

  const [activeSlide, setActiveSlide] = useState(0);

  const slideLeft = () => {
    setActiveSlide((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const slideRight = () => {
    setActiveSlide((prev) =>
      prev < data.length - 1 ? prev + 1 : data.length - 1
    );
  };

  return (
    <div className="slider-container">
      <div>
        <div className="slider">
          <button onClick={slideLeft}>
            <IoIosArrowBack />
          </button>
          {data.map((_, item) => (
            <p
              key={item}
              className={`slide ${data[activeSlide] === item ? "active" : ""}`}>
              {item + 1}
            </p>
          ))}
          <button onClick={slideRight}>
            <IoIosArrowForward />
          </button>
        </div>
        <LowerSLider
          data={data}
          setActiveSlide={setActiveSlide}
          activeSlide={activeSlide}
        />
      </div>
    </div>
  );
};

export default CustomSlider;

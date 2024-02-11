import React, { useEffect, useRef } from "react";

const LowerSLider = ({ data, setActiveSlide, activeSlide }) => {
  const ref = useRef();

  const selectSlide = (i) => {
    setActiveSlide(i);
  };

  useEffect(() => {
    const activeSlide1 = ref.current.children[activeSlide];
    if (activeSlide1) {
      activeSlide1.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [activeSlide]);
  return (
    <div ref={ref} className="lowerSlider">
      {data.map((item) => (
        <p
          className={`${
            data[activeSlide] === item ? "lowerActive" : "lowerItem"
          }`}
          onClick={() => selectSlide(item)}
          key={item}>
          {item + 1}
        </p>
      ))}
    </div>
  );
};

export default LowerSLider;

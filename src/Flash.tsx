import { useState } from "react";
import { slideShowItems } from "./assets";
import "./styles/flash-styles.css";
const Flash = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const previous = () => {
    if (currentSlide === 0) {
      setCurrentSlide(slideShowItems.length - 1);
    } else {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const next = () => {
    if (currentSlide === slideShowItems.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const controlSlideshow = (typeOfControl: string) => {
    switch (typeOfControl) {
      case "previous":
        previous();
        break;
      case "next":
        next();
    }
  };

  return (
    <div className="flash-container">
      <button
        type="button"
        title="previous"
        name="button to go back to previous slide"
        id="previous_slide_button"
        className="prev-btn"
        onClick={() => controlSlideshow("previous")}
      >
        ← PRVS
      </button>
      <div id="flash-section" className="slideshow_container">
        {slideShowItems.map((item, index) => (
          <div
            key={index}
            className={`slider ${index === currentSlide ? "block" : "hidden"}`}
          >
            <img src={item} alt="" />
          </div>
        ))}
      </div>
      <button
        type="button"
        className="next-btn"
        title="next"
        name="button to go forward to next slide"
        id="next_slide_button"
        onClick={() => controlSlideshow("next")}
      >
        NXT →
      </button>
    </div>
  );
};
export default Flash;

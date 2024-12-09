import { useEffect, useState } from "react";
import "./Slide.css";
import "react-slideshow-image/dist/styles.css";

export interface SlideProps {
  contentList: Array<SlideItemProps>;
}

export interface SlideItemProps {
  content: React.ReactNode;
}

const SlideItem = ({ content }: SlideItemProps) => {
  return <div className="slideItemContainer">{content}</div>;
};

const Slide = ({ contentList }: SlideProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? contentList.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === contentList.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        prevSlide();
      } else if (event.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, contentList.length]);

  return (
    <div className="carouselContainer">
      <button className="leftArrow" onClick={prevSlide}>
        &#9664;
      </button>

      <div className="slideContainer">
        <SlideItem content={contentList[currentIndex].content} />
      </div>

      <button className="rightArrow" onClick={nextSlide}>
        &#9654;
      </button>
      <div className="pagination">
        {currentIndex + 1} / {contentList.length}
      </div>
    </div>
  );
};

export default Slide;

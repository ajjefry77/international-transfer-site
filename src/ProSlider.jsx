import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const InfiniteSlider = () => {
  const containerRef = useRef(null);

  const cards = [
    { id: 1, title: "محصول ۱" },
    { id: 2, title: "محصول ۲" },
    { id: 3, title: "محصول ۳" },
    { id: 4, title: "محصول ۴" },
    { id: 5, title: "محصول ۵" },
  ];

  const repeatedCards = [...cards, ...cards, ...cards];  // برای ایجاد لوپ بی‌پایان

 

  const scrollManual = (dir) => {
    const container = containerRef.current;
    const cardWidth = container.firstChild.offsetWidth + 16; // gap-4 = 1rem = 16px
    container.scrollBy({
      left: dir === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="tw-relative tw-w-full tw-py-8 tw-bg-gray-100"
      
    >
      {/* دکمه‌ها */}
      <button
        onClick={() => scrollManual("left")}
        className="tw-absolute tw-left-3 tw-top-1/2 -tw-translate-y-1/2 tw-z-10 tw-bg-white tw-shadow-lg tw-p-2 tw-rounded-full hover:tw-scale-110 tw-transition"
      >
        <ArrowLeft className="tw-w-5 tw-h-5 tw-text-gray-600" />
      </button>

      <button
        onClick={() => scrollManual("right")}
        className="tw-absolute tw-right-3 tw-top-1/2 -tw-translate-y-1/2 tw-z-10 tw-bg-white tw-shadow-lg tw-p-2 tw-rounded-full hover:tw-scale-110 tw-transition"
      >
        <ArrowRight className="tw-w-5 tw-h-5 tw-text-gray-600" />
      </button>

      {/* اسلایدر */}
      <div
        ref={containerRef}
        className="tw-flex tw-gap-4 tw-overflow-x-scroll tw-scroll-smooth tw-no-scrollbar tw-w-full"
      >
        {repeatedCards.map((card, index) => (
          <div
            key={index}
            className="tw-min-w-[180px] md:tw-min-w-[240px] tw-h-36 tw-bg-white tw-rounded-xl tw-shadow-md tw-flex tw-items-center tw-justify-center tw-font-bold tw-text-gray-700 tw-select-none hover:tw-scale-105 tw-transition"
          >
            {card.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;

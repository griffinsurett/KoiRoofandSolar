// src/components/Carousel.jsx
import React, { useState, useRef, useEffect } from "react";

export default function Carousel({
  items,
  slidesToShow = 1,
  slidesToScroll = 1,
  infinite,
  autoplay,
  autoplaySpeed,
  arrows,
  containerClass,   // passed to <ul>
  itemClass,        // passed to each <li>
  renderItem,
}) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const total = items.length;

  // autoplay
  useEffect(() => {
    if (!autoplay) return;
    const id = setInterval(() => {
      setIndex(i => {
        const next = i + slidesToScroll;
        return infinite
          ? next % total
          : Math.min(next, total - slidesToShow);
      });
    }, autoplaySpeed);
    return () => clearInterval(id);
  }, [autoplay, autoplaySpeed, slidesToScroll, infinite, slidesToShow, total]);

  // smooth scroll on index change
  useEffect(() => {
    if (!containerRef.current) return;
    const slideWidth = containerRef.current.offsetWidth / slidesToShow;
    containerRef.current.scrollTo({
      left: slideWidth * index,
      behavior: "smooth",
    });
  }, [index, slidesToShow]);

  const arrowStyles = "absolute top-1/2 transform -translate-y-1/2 text-xl z-10 p-2";

  return (
    <div className="relative">
      {arrows && (
        <>
          <button
            className={`${arrowStyles} left-0`}
            onClick={() => setIndex(i => Math.max(i - slidesToScroll, 0))}
          >
            ‹
          </button>
          <button
            className={`${arrowStyles} right-0`}
            onClick={() =>
              setIndex(i => {
                const max = total - slidesToShow;
                const nxt = i + slidesToScroll;
                return infinite ? nxt % total : Math.min(nxt, max);
              })
            }
          >
            ›
          </button>
        </>
      )}

      <ul
        ref={containerRef}
        className={`
          flex flex-row flex-nowrap h-[50vh] overflow-x-auto snap-x snap-mandatory
          scrollbar-hide list-none
          ${containerClass}
        `}
      >
        {items.map(item => (
          <li
            key={item.slug}
            className={`
              ${itemClass}
              snap-align-start flex-shrink-0
            `}
            style={{ flexBasis: `${100 / slidesToShow}%` }}
          >
            {renderItem(item)}
          </li>
        ))}
      </ul>
    </div>
  );
}

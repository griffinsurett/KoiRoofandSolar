// src/components/Carousel.jsx
import React, { useState, useRef, useEffect } from "react";

export default function Carousel({
  items,
  slidesToShow,
  slidesToScroll,
  infinite,
  autoplay,
  autoplaySpeed,
  arrows,
  containerClass,   // passed to <ul>
  itemClass,        // passed to each <li>
  renderItem,
}) {
  const [index, setIndex] = useState(0);
  // track how many slides to show right now
  const [currentSlidesToShow, setCurrentSlidesToShow] = useState(slidesToShow);

  const containerRef = useRef(null);
  const total = items.length;

  // update slidesToShow on resize (1 slide on mobile)
  useEffect(() => {
    function onResize() {
      setCurrentSlides(
        window.innerWidth < 640
          ? 1                // always 1 slide on narrow screens
          : slidesToShow
      );
    }
    window.addEventListener("resize", update);
    update();
    return () => window.removeEventListener("resize", update);
  }, [slidesToShow]);

  // autoplay
  useEffect(() => {
    if (!autoplay) return;
    const id = setInterval(() => {
      setIndex(i => {
        const next = i + slidesToScroll;
        return infinite
          ? next % total
          : Math.min(next, total - currentSlidesToShow);
      });
    }, autoplaySpeed);
    return () => clearInterval(id);
  }, [autoplay, autoplaySpeed, slidesToScroll, infinite, currentSlidesToShow, total]);

  // smooth scroll on index change
  useEffect(() => {
    if (!containerRef.current) return;
    const slideWidth = containerRef.current.offsetWidth / currentSlidesToShow;
    containerRef.current.scrollTo({
      left: slideWidth * index,
      behavior: "smooth",
    });
  }, [index, currentSlidesToShow]);

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
                const max = total - currentSlidesToShow;
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
          flex overflow-x-auto scroll-snap-x scroll-snap-mandatory
          scrollbar-hide list-none
          ${containerClass}
        `}
      >
        {items.map(item => (
          <li
            key={item.slug}
            className={`
              ${itemClass}
              scroll-snap-align-start flex-shrink-0
            `}
            style={{ minWidth: `${100 / currentSlidesToShow}%` }}
          >
            {renderItem(item)}
          </li>
        ))}
      </ul>
    </div>
  );
}

// src/components/Carousel.jsx
import React, { useState, useRef, useEffect } from "react";

export default function Carousel({
  items,
  slidesToShow = 1,     // desktop default e.g. 3
  slidesToScroll = 1,
  infinite,
  autoplay,
  autoplaySpeed,
  arrows,
  containerClass,
  itemClass,
  renderItem,
}) {
  const [index, setIndex] = useState(0);
  const [currentSlides, setCurrentSlides] = useState(slidesToShow);
  const containerRef = useRef(null);
  const total = items.length;

  // 1) Responsive slide count: 1 on mobile, otherwise slidesToShow
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767.98px)");
    const update = e => setCurrentSlides(e.matches ? 1 : slidesToShow);
    update(mq); // set initial
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [slidesToShow]);

  // 2) Autoplay
  useEffect(() => {
    if (!autoplay) return;
    const id = setInterval(() => {
      setIndex(i => {
        const nxt = i + slidesToScroll;
        return infinite
          ? nxt % total
          : Math.min(nxt, total - currentSlides);
      });
    }, autoplaySpeed);
    return () => clearInterval(id);
  }, [autoplay, autoplaySpeed, slidesToScroll, infinite, total, currentSlides]);

  // 3) Smooth scroll when index or currentSlides changes
  useEffect(() => {
    if (!containerRef.current) return;
    const slideW = containerRef.current.offsetWidth / currentSlides;
    containerRef.current.scrollTo({
      left: slideW * index,
      behavior: "smooth",
    });
  }, [index, currentSlides]);

  const arrowStyles = "absolute top-1/2 transform -translate-y-1/2 z-10 p-2";

  return (
    <div className="relative">
      {arrows && (
        <>
          <button
            className={`${arrowStyles} left-0 text-xl`}
            onClick={() => setIndex(i => Math.max(i - slidesToScroll, 0))}
          >
            ‹
          </button>
          <button
            className={`${arrowStyles} right-0 text-xl`}
            onClick={() => {
              const max = total - currentSlides;
              const nxt = index + slidesToScroll;
              setIndex(infinite ? nxt % total : Math.min(nxt, max));
            }}
          >
            ›
          </button>
        </>
      )}

      <ul
        ref={containerRef}
        className={`
          flex flex-row flex-nowrap
          overflow-x-auto overflow-y-hidden
          snap-x snap-mandatory hide-scrollbar
          ${containerClass}
        `}
      >
        {items.map(item => (
          <li
            key={item.slug}
            className={`${itemClass} snap-start flex-shrink-0`}
            style={{ flexBasis: `${100 / currentSlides}%` }}
          >
            {renderItem(item)}
          </li>
        ))}
      </ul>
    </div>
  );
}

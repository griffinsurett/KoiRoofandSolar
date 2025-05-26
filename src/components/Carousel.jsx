// src/components/Carousel.jsx
import React, { useState, useRef, useEffect } from "react";

export default function Carousel({
  items,
  infinite = false,
  autoplay = false,
  autoplaySpeed = 3000,
  arrows = false,
  containerClass = "",
  itemClass = "",
  renderItem,
}) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const total = items.length;

  // Autoplay: advance by 1 slide
  useEffect(() => {
    if (!autoplay) return;
    const id = setInterval(() => {
      setIndex(i => {
        const next = i + 1;
        return infinite ? next % total : Math.min(next, total - 1);
      });
    }, autoplaySpeed);
    return () => clearInterval(id);
  }, [autoplay, autoplaySpeed, infinite, total]);

  // Smooth scroll whenever index changes
  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.scrollTo({
      left: containerRef.current.offsetWidth * index,
      behavior: "smooth",
    });
  }, [index]);

  const prev = () => setIndex(i => Math.max(i - 1, 0));
  const next = () => setIndex(i => {
    const nxt = i + 1;
    return infinite ? nxt % total : Math.min(nxt, total - 1);
  });

  const arrowStyles = "absolute top-1/2 transform -translate-y-1/2 text-xl z-10 p-2";

  return (
    <div className="relative">
      {arrows && (
        <>
          <button className={`${arrowStyles} left-0`} onClick={prev}>‹</button>
          <button className={`${arrowStyles} right-0`} onClick={next}>›</button>
        </>
      )}

      <ul
        ref={containerRef}
        className={`
          flex flex-row flex-nowrap
          overflow-x-auto overflow-y-hidden
          snap-x snap-mandatory hide-scrollbar
          list-none
          ${containerClass}
        `}
      >
        {items.map(item => (
          <li
            key={item.slug}
            className={`${itemClass} snap-start flex-shrink-0 w-full`}
          >
            {renderItem(item)}
          </li>
        ))}
      </ul>
    </div>
  );
}

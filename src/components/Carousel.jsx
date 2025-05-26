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
  containerClass,
  itemClass,
  renderItem,
}) {
  const [index, setIndex] = useState(0);
  const [currentShow, setCurrentShow] = useState(slidesToShow);
  const [currentScroll, setCurrentScroll] = useState(slidesToScroll);
  const containerRef = useRef(null);
  const total = items.length;

  // ─── 1) Responsive override ───
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 768px)");
    const onChange = e => {
      if (e.matches) {
        setCurrentShow(1);
        setCurrentScroll(1);
      } else {
        setCurrentShow(slidesToShow);
        setCurrentScroll(slidesToScroll);
      }
    };
    onChange(mq);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [slidesToShow, slidesToScroll]);

  // ─── 2) Autoplay ───
  useEffect(() => {
    if (!autoplay) return;
    const id = setInterval(() => {
      setIndex(i => {
        const nxt = i + currentScroll;
        return infinite
          ? nxt % total
          : Math.min(nxt, total - currentShow);
      });
    }, autoplaySpeed);
    return () => clearInterval(id);
  }, [autoplay, autoplaySpeed, currentScroll, infinite, total, currentShow]);

  // ─── 3) Smooth scroll on index/change of slides count ───
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const slideW = el.offsetWidth / currentShow;
    el.scrollTo({ left: slideW * index, behavior: "smooth" });
  }, [index, currentShow]);

  const arrowStyles = "absolute top-1/2 transform -translate-y-1/2 text-xl z-10 p-2";

  return (
    <div className="relative">
      {arrows && (
        <>
          <button
            className={`${arrowStyles} left-0`}
            onClick={() => setIndex(i => Math.max(i - currentScroll, 0))}
          >
            ‹
          </button>
          <button
            className={`${arrowStyles} right-0`}
            onClick={() => {
              const nxt = index + currentScroll;
              const max = total - currentShow;
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
            style={{ minWidth: `${100 / currentShow}%` }}
          >
            {renderItem(item)}
          </li>
        ))}
      </ul>
    </div>
  );
}

// src/components/LoopComponents/AccordionItem.jsx
import React, { useState } from "react";

export default function AccordionItem({
  item,
  itemClass = "",
  collectionName,
  HasPage,
}) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(prev => !prev);

  return (
    <article
      className={`
        ${itemClass}
        group
        border-t border-border slide-up
        transition-colors duration-500 ease-in-out
      `}
    >
      {/* Header */}
      <div
        onClick={toggle}
        className="
          w-full flex justify-between items-center
          py-[var(--spacing-lg)] px-[var(--spacing-xl)]
          cursor-pointer select-none
        "
      >
        <span className="h4 font-thin">
          {item.data.title || item.slug}
        </span>
        <span
          className="
            ml-2 text-4xl font-thin
            transition-colors duration-500 ease-in-out
            group-hover:text-accent
          "
        >
          {open ? "−" : "+"}
        </span>
      </div>

      {/* Body: animate max-height, opacity, and padding */}
      <div
        className={`
          overflow-hidden
          transition-all duration-300 ease-in-out
          ${open
            ? "max-h-[1000px] opacity-100 px-[var(--spacing-xl)] pb-[var(--spacing-2xl)]"
            : "max-h-0     opacity-0   px-0                pb-0"
          }
        `}
      >
        <div className="text-left">
          {item.data.description ?? item.body}
        </div>
      </div>
    </article>
  );
}

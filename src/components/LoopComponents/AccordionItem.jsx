// src/components/LoopComponents/AccordionItem.jsx
import React, { useState } from "react";

export default function AccordionItem({
  item,
  itemClass = "",
  collectionName,
  HasPage,
}) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((prev) => !prev);

  return (
    <li
      className={`
        ${itemClass}
        group
        border-t border-border
        transition-colors duration-500 ease-in-out
        ${open ? "bg-bg-2" : "hover:bg-bg-2"}
      `}
    >
      {/* Header: clicking toggles open/closed */}
      <div
        onClick={toggle}
        className="
          w-full flex justify-between items-center
          py-[var(--spacing-2xl)] px-[var(--spacing-xl)]
          cursor-pointer select-none
        "
      >
        <span className="h3 font-thin">
          {item.data.title || item.slug}
        </span>
        {/* + when closed, – when open; text-accent on hover */}
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

      {/* Body: conditionally rendered */}
      <div
        className={`
          text-left text-xl font-thin text-text
          overflow-hidden transition-[max-height] duration-[var(--transition-fast)]
          ${open ? "max-h-96 pb-[var(--spacing-2xl)] px-[var(--spacing-xl)]" : "max-h-0"}
        `}
      >
        {item.data.description ?? item.body}
      </div>
    </li>
  );
}

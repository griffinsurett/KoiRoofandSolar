// src/components/BeforeAfterCard.jsx
import React from 'react';

export default function BeforeAfterCard({ item, collectionName, hasPage }) {
  // mirror your Astro logic for per‑item hasPage override
  const effectiveHasPage =
    item.data.hasPage !== undefined ? item.data.hasPage : hasPage;

  // destructure frontmatter fields
  const { title, beforeImage, afterImage } = item.data;

  // class lists
  const cardClasses = [
    'before-after-card',
    'relative',
    'group',
    'border-radius',
    'overflow-hidden',
    'shadow',
    'hover:shadow-lg',
    'transition-shadow',
    'flex-1',
    'w-full',
    'flex',
    'flex-col',
    'h-96',
  ].join(' ');

  const wrapperClasses = ['flex', 'flex-col', 'h-full', 'w-full'].join(' ');

  const sectionClasses = ['relative', 'flex-1', 'overflow-hidden'].join(' ');

  const imageClasses = ['w-full', 'h-full', 'object-cover'].join(' ');

  const labelBase = [
    'absolute',
    'bg-secondary',
    'text-bg',
    'text-sm',
    'uppercase',
    'px-2',
    'py-1',
    'rounded',
  ].join(' ');

  return (
    <li className={cardClasses}>
      {effectiveHasPage ? (
        <a href={`/${collectionName}/${item.slug}`} className={wrapperClasses}>
          {beforeImage && (
            <div className={sectionClasses}>
              <img
                src={beforeImage}
                alt={`${title} – Before`}
                className={imageClasses}
              />
              <span className={`${labelBase} top-2 left-2`}>Before</span>
            </div>
          )}
          {afterImage && (
            <div className={sectionClasses}>
              <img
                src={afterImage}
                alt={`${title} – After`}
                className={imageClasses}
              />
              <span className={`${labelBase} bottom-2 right-2`}>After</span>
            </div>
          )}
        </a>
      ) : (
        <div className={wrapperClasses}>
          {beforeImage && (
            <div className={sectionClasses}>
              <img
                src={beforeImage}
                alt={`${title} – Before`}
                className={imageClasses}
              />
              <span className={`${labelBase} top-2 left-2`}>Before</span>
            </div>
          )}
          {afterImage && (
            <div className={sectionClasses}>
              <img
                src={afterImage}
                alt={`${title} – After`}
                className={imageClasses}
              />
              <span className={`${labelBase} bottom-2 right-2`}>After</span>
            </div>
          )}
        </div>
      )}
    </li>
  );
}

import React from 'react';

export default function ClientBeforeAfterCard({ item, collectionName, HasPage }) {
  const effectiveHasPage =
    item.data.hasPage !== undefined ? item.data.hasPage : HasPage;

  const { title, beforeImage, afterImage } = item.data;

  // unwrap AstroImageMetadata or leave a string alone:
  const unwrap = (img) =>
    !img
      ? null
      : typeof img === 'string'
      ? img
      : img.src || '';

  const beforeSrc = unwrap(beforeImage);
  const afterSrc  = unwrap(afterImage);

  return (
    <li className="before-after-card relative group overflow-hidden shadow hover:shadow-lg transition-shadow flex-1 w-full flex flex-col h-96">
      {effectiveHasPage ? (
        <a href={`/${collectionName}/${item.slug}`} className="flex flex-col h-full w-full">
          {beforeSrc && (
            <div className="relative flex-1 overflow-hidden">
              <img src={beforeSrc} alt={`${title} – Before`} className="w-full h-full object-cover" />
              <span className="absolute bg-secondary text-bg text-sm uppercase px-2 py-1 rounded top-2 left-2">Before</span>
            </div>
          )}
          {afterSrc && (
            <div className="relative flex-1 overflow-hidden">
              <img src={afterSrc} alt={`${title} – After`} className="w-full h-full object-cover" />
              <span className="absolute bg-secondary text-bg text-sm uppercase px-2 py-1 rounded bottom-2 right-2">After</span>
            </div>
          )}
        </a>
      ) : (
        <div className="flex flex-col h-full w-full">
          {beforeSrc && (
            <div className="relative flex-1 overflow-hidden">
              <img src={beforeSrc} alt={`${title} – Before`} className="w-full h-full object-cover" />
              <span className="absolute bg-secondary text-bg text-sm uppercase px-2 py-1 rounded top-2 left-2">Before</span>
            </div>
          )}
          {afterSrc && (
            <div className="relative flex-1 overflow-hidden">
              <img src={afterSrc} alt={`${title} – After`} className="w-full h-full object-cover" />
              <span className="absolute bg-secondary text-bg text-sm uppercase px-2 py-1 rounded bottom-2 right-2">After</span>
            </div>
          )}
        </div>
      )}
    </li>
  );
}

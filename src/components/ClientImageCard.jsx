import React from 'react';

/**
 * ClientImageCard
 *
 * Props:
 *  - item: the data object (expects item.slug, item.data.title, item.data.featuredImage, item.data.hasPage)
 *  - collectionName: string (e.g. "posts", "products")
 *  - HasPage: boolean default from parent to determine if cards link out
 */
export default function ClientImageCard({
  item,
  collectionName,
  HasPage,
}) {
  // If the item itself overrides hasPage, respect that
  const effectiveHasPage =
    typeof item.data.hasPage === 'boolean'
      ? item.data.hasPage
      : HasPage;

  const { title, featuredImage } = item.data;
  // featuredImage might be a string URL or an object with .src
  const imageSrc = featuredImage
    ? (typeof featuredImage === 'string' ? featuredImage : featuredImage.src)
    : null;

  // Build href only if there's a page
  const href = effectiveHasPage
    ? `/${collectionName}/${item.slug}`
    : undefined;

  return (
    <div className="scale-up relative group w-full aspect-video overflow-hidden shadow hover:shadow-lg transition-shadow list-none">
      {/* always an <a> wrapper; omit href when no page */}
      <a
        {...(href ? { href } : {})}
        className="block w-full h-full relative"
      >
        {imageSrc && (
          <img
            src={imageSrc}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover object-center transform transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        )}
        {/*
        // If you decide later you want a title overlay, you can uncomment:
        <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        */}
      </a>
    </div>
  );
}

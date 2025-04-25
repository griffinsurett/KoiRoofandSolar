// src/components/IconListItem.jsx
import React from 'react';
import Heading from '../Heading';

/**
 * A list item with an icon, colored icon background, heading, and description.
 */
export default function ListItem({ item, collectionName, HasPage }) {
    const effectiveHasPage = item.data.hasPage !== undefined ? item.data.hasPage : HasPage;
    console.log(item.data.icon);
    return (
        <div className={`flex items-start space-x-[var(--spacing-md)]`}>
          {item.data.icon && (
            <img
              src={item.data.icon.src}
              alt="Icon"
              className={`w-22 h-auto hover:scale-105 transition-transform duration-300 ease-in-out`}
            />
          )}
          {!item.data.icon && (
            <div className={`w-8 h-8`} />
          )}
        <div>
          <Heading tagName={"h3"} className="h3 text-primary">
            {item.data.title}
          </Heading>
          <p className="mt-[var(--spacing-xs)] text-text text-sm lg:text-xl">
            {item.data.description || item.body}
          </p>
        </div>
      </div>
      );
};
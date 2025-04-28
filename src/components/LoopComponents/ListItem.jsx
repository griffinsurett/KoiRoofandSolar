import React from 'react';
import Heading from '../Heading';

/**
 * NumberedListItem component: renders a title with a leading number (currently static '1') and no description.
 */
export default function NumberedListItem({ item }) {
  const { title } = item.data;

  return (
    <li className="flex items-center space-x-[var(--spacing-md)]">
      {/* Static number indicator */}
      <span className="font-thin text-primary text-lg flex-shrink-0">1.</span>
      <Heading tagName="h3" className="h4 text-primary m-0">
        {title}
      </Heading>
    </li>
  );
}

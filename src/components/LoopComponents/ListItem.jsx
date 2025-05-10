import React from 'react';
import Heading from '../Heading';

/**
ListItem component: renders a title with a leading number (currently static '1') and no description.
 */
export default function ListItem({ item }) {
  const { title } = item.data;

  return (
    <li className="flex flex-col items-start justify-start space-x-[var(--spacing-md)]">
      {/* Static number indicator */}
      <Heading tagName="h3" className="h4 text-left text-primary m-0">
        {title}
      </Heading>
      <p className="text-text text-left text-lg m-0">
        {item.data.description}
      </p>
    </li>
  );
}

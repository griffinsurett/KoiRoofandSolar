// src/utils/iconUtils.ts
import React, { ReactNode } from 'react';

// Type for our icon prop: either a React node (imported SVG/component) or a string
export type IconProp = string | ReactNode;

/**
 * Determines whether a string looks like an image path or URL.
 */
export function isImagePath(icon: string): boolean {
  return /\.(svg|png|jpe?g|gif)$/i.test(icon)
    || icon.startsWith('/')
    || icon.startsWith('http');
}

/**
 * Renders an icon prop in React contexts.
 * - If it's already a valid React element, returns it directly
 * - If it's a string image path, wraps it in <img>
 * - Otherwise wraps it in <span> for text/emoji
 */
export function renderReactIcon(icon: IconProp, className = ''): ReactNode {
  if (React.isValidElement(icon)) {
    return icon;
  }
  if (typeof icon === 'string') {
    if (isImagePath(icon)) {
      return <img src={icon} className={className} alt="" />;
    } else {
      return <span className={className}>{icon}</span>;
    }
  }
  return null;
}

/**
 * Renders an icon in Astro (.astro) templates.
 * Usage: {renderAstroIcon(item.icon, 'w-4 h-4 mr-2')}
 */
export function renderAstroIcon(icon: IconProp, className = ''): string | null {
  if (!icon) return null;
  // ReactNode isn’t valid here; in Astro we expect only strings
  if (typeof icon === 'string') {
    if (isImagePath(icon)) {
      // return an HTML string
      return `<img src="${icon}" class="${className}" alt="" />`;
    } else {
      return `<span class="${className}">${icon}</span>`;
    }
  }
  // If someone passed a component, we can’t render it here—advise text fallback
  return `<span class="${className}">ICON</span>`;
}

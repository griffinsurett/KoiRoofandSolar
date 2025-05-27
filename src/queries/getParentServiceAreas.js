// src/utils/getParentServiceAreas.js
import { getCollection } from 'astro:content';

export async function getParentServiceAreas() {
  // Fetch every entry in the "serviceAreas" collection
  const allAreas = await getCollection('serviceAreas');

  // Keep only the ones that have no `data.parent` (i.e. top‑level areas)
  const topLevel = allAreas.filter((entry) => !entry.data.parent);

  // Shape them into { id, label, slug } for your menu component
  return topLevel.map((entry) => ({
    id: entry.id,
    label: entry.data.title,
    slug: `/serviceAreas/${entry.id}`,
  }));
}

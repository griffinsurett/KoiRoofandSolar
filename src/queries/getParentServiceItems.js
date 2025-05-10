// src/utils/getParentServiceItems.js
import { getCollection } from 'astro:content';

export async function getParentServiceItems() {
  // Fetch all entries in the "services" collection
  const servicesEntries = await getCollection('services');
  // Filter out entries that have a parent (i.e., keep only top-level services)
  const topLevelServices = servicesEntries.filter(entry => !entry.data.parent);
  // Map to menu item shape
  return topLevelServices.map(entry => ({
    id: entry.id,
    label: entry.data.title,
    slug: `/${entry.slug}`,
  }));
}
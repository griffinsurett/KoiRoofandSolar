// src/queries/ContactMenuQuery.ts
import { ContactData } from "@/content/SiteData";
import { buildMenuQueries } from "@/utils/ArrayQueryUtils";

export async function getContactMenuItems() {
  // 1️⃣ Convert ContactData into [key, value] pairs
  const ContactMenu = Object.entries(ContactData).map(([key, value]) => ({
    id: key,
    label: key.toUpperCase(),
    slug: value,
    // Assign higher weight to email so it appears after phone,
    // but you can adjust as needed.
    weight: key === "email" ? 20 : 10,
  })); 


  // 2️⃣ Build and return the dynamic menu
  return await buildMenuQueries({ ContactMenu });
}

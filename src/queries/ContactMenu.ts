// src/queries/ContactMenu.ts
import { ContactData } from "@/content/SiteData";
import { buildMenuQueries } from "@/utils/ArrayQueryUtils";

export async function getContactMenuItems() {
  const ContactMenu = [
    {
      id: "email",
      label: "Email Us",
      slug: ContactData.email,   // just the address
      weight: 20,
    },
    {
      id: "phone",
      label: "Call Us",
      slug: ContactData.phone,   // just the number
      weight: 10,
    },
  ];

  return await buildMenuQueries({ ContactMenu });
}

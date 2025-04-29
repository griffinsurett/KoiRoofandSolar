// src/queries/MainNavMenu.ts

export interface MenuItem {
  id: string;
  label: string;
  slug: string;
  weight?: number;
  position?: "prepend" | "append";
}

export const MainNavMenu: MenuItem[] = [
  { id: "home",    label: "Home",     slug: "/",             weight: 100, position: "prepend" },
  { id: "about",   label: "About Us", slug: "/about-us",                },
  { id: "contact", label: "Contact",  slug: "/contact-us", weight: 100, position: "append" },
];

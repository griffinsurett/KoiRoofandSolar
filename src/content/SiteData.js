// SiteData.js
import Logo from "@/assets/logo2.png";
import LogoBGWhite from "@/assets/logo3.png";
import LogoWithWords from "@/assets/logowwords.png";
import MainBGImage from "@/assets/roofingandsolarvid-poster.jpg";

export const SiteData = {
  title: "Koi Roofing and Solar",
  tagline:
    "Koi Roofing & Solar is a family‑run, full‑service contractor proudly serving New Jersey, Pennsylvania, and all five boroughs of New York City, offering commercial, residential, and industrial roofing and solar solutions",
  description:
    "At Koi Roofing & Solar, we bring over 20 years of family-driven experience to every roof and solar install—combining expert craftsmanship with honest, reliable service.",
  logo: {
    src: LogoWithWords,
    alt: "Koi Roofing and Solar logo",
  },
  MainBGImage: {
    src: MainBGImage,
    alt: "Koi Roofing and Solar team",
  },
};

export const ContactData = {
  email: "customersupport@koiroofingandsolar.com",
  phone: "732-939-1309",
  businessHours: {
    days: "Everyday",
    hours: "8AM - 8PM",
  },
};

export const ServiceBtns = [
  {
    text: "Roofing",
    link: "/services/roofing",
    variant: "tertiary",
    class: "w-full load-slide-left",
  },
  {
    text: "Solar",
    link: "/services/solar",
    variant: "secondary",
    class: "w-full load-slide-right",
  },
];

export const SocialData = [
  {
    title: "Twitter",
    href: "https://twitter.com/griffin",
    icon: "twitter",
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com/griffin",
    icon: "linkedin",
  },
];

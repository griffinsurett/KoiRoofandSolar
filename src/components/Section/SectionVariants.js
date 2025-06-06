import HeroBg from "@/assets/roof.png";
import KoiVideo from "@/assets/roofingandsolarvid.MOV";
import { SiteData } from "@/content/SiteData";
import Poster from "@/assets/roofingandsolarvid-poster.jpg";

export const SectionVariants = {
  // Variants for different section types
  primaryHero: {
    sectionClass:
      "section-lg text-center flex items-center justify-center bg-cover bg-fixed bg-center z-100 shadow-lg p-[var(--spacing-lg)] md:p-[var(--spacing-md)]",
    contentClass: "lg:w-4/6 flex flex-col items-center justify-center",
    headingAreaClass:
      "flex flex-col items-center justify-center text-center w-full h-full z-10",
    buttonsSectionClass:
      "h6 mt-[var(--spacing-xl)] gap-[var(--spacing-md)] lg:gap-[var(--spacing-xl)] flex flex-col md:flex-row items-center justify-center w-18/20 lg:w-4/5",
    backgroundMedia: {
      video: { src: KoiVideo, preload: "auto" },
      image: { src: Poster, imageClass: "" },
      overlayClass:
        "bg-primary opacity-70 filter brightness-50 bg-cover bg-center xl:bg-fixed",
    },
  },
  media1: {
    sectionClass:
      "section-sm animate-on-appear flex text-center flex-col justify-center items-center sec-spacing-y",
    contentClass: "content-section flex justify-center",
    itemsClass:
      "w-full grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-md)] lg:gap-[var(--spacing-xl)]",
    itemClass: "",
    itemPlacement: "section-heading-area",
    descriptionClass: "text-text-light text-lg md:text-3xl italic",
    buttonsSectionClass: "my-[var(--spacing-lg)]",
    backgroundMedia: {
      video: {
        src: KoiVideo,
      },
      image: {
        src: SiteData.MainBGImage.src,
        imageClass: "filter brightness-50 bg-cover bg-center xl:bg-fixed",
      },
      overlayClass: "bg-primary opacity-90",
    },
  },
  media2: {
    sectionClass:
      "section-sm flex text-center flex-col justify-center items-center sec-spacing-y animate-on-appear",
    contentClass: "content-section flex justify-center",
    itemsClass:
      "w-full grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-md)] lg:gap-[var(--spacing-xl)]",
    itemClass: "",
    itemPlacement: "section-heading-area",
    descriptionClass: "text-text-light text-lg md:text-3xl italic",
    buttonsSectionClass: "my-[var(--spacing-lg)]",
    backgroundMedia: {
      image: {
        src: SiteData.MainBGImage.src,
        imageClass: "filter brightness-50 bg-cover bg-center xl:bg-fixed",
      },
      video: {
        src: KoiVideo,
      },
      overlayClass: "bg-primary opacity-80",
    },
  },
  media3: {
    backgroundMedia: {
      image: {
        src: SiteData.MainBGImage.src,
        imageClass: "filter brightness-50 bg-cover bg-center xl:bg-fixed",
      },
      video: {
        src: KoiVideo,
      },
      overlayClass: "bg-primary opacity-70",
    },
    sectionClass:
      "flex flex-col justify-center items-center section-md animate-on-appear",
    contentClass: "m-0 p-0 content-section",
    itemsClass:
      "w-full flex items-center justify-evenly flex-col lg:flex-row gap-[var(--spacing-md)] lg:gap-[var(--spacing-sm)]",
    headingAreaClass:
      "flex flex-col gap-[var(--spacing-sm)] text-center text-bg pb-[var(--spacing-lg)]",
    descriptionClass:
      "text-lg order-2 lg:text-2xl text-text-light md:mx-[var(--spacing-lg)]",
    itemPlacement: "",
    buttonsSectionClass: "hidden",
  },
  media4: {
    backgroundMedia: {
      image: {
        src: SiteData.MainBGImage.src,
        imageClass: "filter brightness-50 bg-cover bg-center xl:bg-fixed",
      },
      video: {
        src: KoiVideo,
      },
      overlayClass: "bg-primary opacity-80",
    },
    sectionClass:
      "flex flex-col justify-center items-center section-sm animate-on-appear",
    contentClass: "m-0 p-0 content-section",
    itemsClass:
      "w-full flex items-center justify-evenly flex-col lg:flex-row gap-[var(--spacing-md)] lg:gap-[var(--spacing-sm)]",
    headingAreaClass:
      "flex flex-col gap-[var(--spacing-sm)] text-center text-bg pb-[var(--spacing-lg)]",
    descriptionClass:
      "text-lg order-2 lg:text-2xl text-text-light md:mx-[var(--spacing-lg)]",
    itemPlacement: "",
    buttonsSectionClass: "gap-[var(--spacing-lg)] flex-col lg:flex-row",
  },
  testimonials: {
    sectionClass: "bg-bg flex text-center flex-col justify-center items-center",
    contentClass:
      "content-section flex flex-col justify-center py-[var(--spacing-2xl)]",
    itemsClass: `w-full columns-1 md:columns-2 lg:columns-2 gap-x-[var(--spacing-xl)] gap-y-[var(--spacing-xl)]`,
    topContentClass: "py-[var(--spacing-xl)]",
    headingAreaClass:
      "flex flex-col text-bg md:px-[var(--spacing-md)] gap-[var(--spacing-sm)]",
    descriptionClass: "order-2 text-lg text-text-light lg:text-3xl text-bg",
    buttonsSectionClass: "my-[var(--spacing-lg)]",
  },
  imageCol: {
    sectionClass: "section-lg flex justify-center items-center text-left",
    contentClass:
      "content-section flex flex-col-reverse md:flex-row justify-between items-start gap-[var(--spacing-xl)] xl:gap-[var(--spacing-3xl)]",
    headingAreaClass: "flex flex-col",
    buttonsSectionClass:
      "flex flex-col xl:flex-row justify-start items-start xl:items-center gap-[var(--spacing-md)] w-18/20 lg:w-full",
    childSlotClass: "w-auto lg:w-1/2 sticky-top scale-up",
    itemsClass: "flex flex-col justify-start items-start",
    buttonsPlacement: "top-content-section",
    itemPlacement: "top-content-section",
    descriptionClass: "py-[var(--spacing-sm)] text-text text-lg md:text-xl",
    topContentClass: "flex flex-col w-full sticky-top lg:w-1/2",
  },
  vidCol: {
    sectionClass: "section-lg flex justify-center items-center text-left",
    contentClass:
      "content-section flex flex-col-reverse md:flex-row justify-between items-start gap-[var(--spacing-xl)] xl:gap-[var(--spacing-3xl)]",
    itemsClass:
      "flex flex-col text-bg items-start justify-start p-[var(--spacing-sm)] gap-[var(--spacing-xl)] xl:gap-[var(--spacing-3xl)] w-full",
    itemClass: "items-start",
    headingAreaClass:
      "flex flex-col py-[var(--spacing-sm)] lg:py-[var(--spacing-xl)]",
    buttonsSectionClass:
      "justify-start gap-[var(--spacing-xl)] xl:gap-[var(--spacing-3xl)]",
    childSlotClass: "w-auto scale-up lg:w-1/2 sticky-top",
    buttonsPlacement: "top-content-section",
    itemPlacement: "top-content-section",
    topContentClass: "flex flex-col lg:w-1/2",
  },
  imageCards: {
    sectionClass:
      "flex text-center flex-col section-sm justify-center items-center",
    contentClass:
      "content-section flex flex-col justify-center lg:py-[var(--spacing-2xl)] px-[var(--spacing-lg)] md:px-[var(--spacing-md)]",
    itemsClass:
      "w-full flex items-center justify-evenly flex-col lg:flex-row gap-[var(--spacing-md)] py-[var(--spacing-md)]",
    headingAreaClass:
      "flex flex-col gap-[var(--spacing-sm)] py-[var(--spacing-sm)] lg:py-[var(--spacing-md)]",
    buttonsSectionClass: "my-[var(--spacing-lg)]",
    headingAreaClass: "hidden",
    descriptionClass: "text-sm lg:text-xl text-text",
  },
  portfolio: {
    backgroundMedia: {
      video: {
        src: KoiVideo,
      },
      image: {
        src: SiteData.MainBGImage.src,
        imageClass: "filter brightness-50 bg-cover bg-center xl:bg-fixed",
      },
      overlayClass: "bg-primary opacity-80",
    },
    sectionClass:
      "section-md flex flex-col justify-center items-center section-md",
    contentClass: "m-0 p-0 content-section fade-in",
    itemsClass:
      "w-full flex items-center justify-evenly flex-col-reverse lg:flex-row gap-[var(--spacing-md)] lg:gap-[var(--spacing-sm)]",
    headingAreaClass:
      "flex flex-col gap-[var(--spacing-sm)] text-center text-bg pb-[var(--spacing-lg)]",
    descriptionClass:
      "text-lg order-2 lg:text-2xl text-text-light md:mx-[var(--spacing-lg)]",
    itemPlacement: "",
    buttonsSectionClass:
      "flex flex-col lg:flex-row justify-center items-center gap-[var(--spacing-md)] py-[var(--spacing-lg)] lg:py-[var(--spacing-xl)]",
  },
  gallery: {
    backgroundMedia: {
      video: {
        src: KoiVideo,
      },
      image: {
        src: SiteData.MainBGImage.src,
        imageClass: "filter brightness-50 bg-cover bg-center xl:bg-fixed",
      },
      overlayClass: "bg-primary opacity-80",
    },
    sectionClass:
      "section-md flex flex-col justify-center items-center section-md",
    contentClass: "m-0 p-0 content-section fade-in",
    itemsClass:
      "w-full flex items-center justify-evenly gap-[var(--spacing-md)] lg:gap-[var(--spacing-sm)]",
    headingAreaClass:
      "flex flex-col gap-[var(--spacing-sm)] text-center text-bg lg:pb-[var(--spacing-sm)]",
    descriptionClass:
      "text-lg order-2 lg:text-2xl text-text-light md:mx-[var(--spacing-lg)]",
    itemPlacement: "",
    buttonsSectionClass:
      "flex flex-col lg:flex-row justify-center items-center gap-[var(--spacing-md)] py-[var(--spacing-lg)] lg:py-[var(--spacing-xl)]",
  },
  cardSection: {
    sectionClass:
      "flex text-center flex-col section-md justify-center items-center",
    contentClass:
      "content-section flex flex-col justify-center lg:py-[var(--spacing-2xl)]",
    // Use grid for wrapping: 1 column on mobile, 2 on sm, 3 on lg
    itemsClass:
      "w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[var(--spacing-xl)] py-[var(--spacing-md)]",
    headingAreaClass:
      "flex flex-col gap-[var(--spacing-sm)] py-[var(--spacing-sm)] lg:py-[var(--spacing-md)]",
    descriptionClass:
      "text-lg order-2 lg:text-2xl text-text m-[var(--spacing-lg)]",
  },
  listSection: {
    sectionClass: "flex text-center flex-col justify-center items-center",
    contentClass: "content-section flex flex-col justify-center",
    // Use grid for wrapping: 1 column on mobile, 2 on sm, 3 on lg
    itemsClass:
      "w-full grid grid-cols-1 sm:grid-cols-2 gap-[var(--spacing-xl)] py-[var(--spacing-md)]",
    headingAreaClass:
      "flex flex-col gap-[var(--spacing-sm)] py-[var(--spacing-sm)] lg:py-[var(--spacing-md)]",
    descriptionClass:
      "text-lg order-2 lg:text-2xl text-text m-[var(--spacing-lg)]",
  },
  listOfBoxes: {
    sectionClass:
      "section-md flex text-center flex-col justify-center items-center",
    contentClass: "content-section flex flex-col justify-center",
    // Use grid for wrapping: 1 column on mobile, 2 on sm, 3 on lg
    itemsClass: "flex flex-col w-full gap-[var(--spacing-xl)]",
    itemClass: "flex flex-row-reverse",
    headingAreaClass:
      "flex flex-col gap-[var(--spacing-sm)] py-[var(--spacing-sm)] lg:py-[var(--spacing-md)]",
    descriptionClass:
      "text-lg order-2 lg:text-2xl text-text m-[var(--spacing-lg)]",
  },
  faqs: {
    sectionClass:
      "flex text-center flex-col section-md justify-center items-center",
    contentClass:
      "content-section flex flex-col justify-center lg:py-[var(--spacing-2xl)] md:px-[var(--spacing-md)]",
    headingAreaClass: "lg:pb-[var(--spacing-2xl)]",
  },
  banner: {
    // mirror your solar upsell sectionClass
    sectionClass:
      "min-h-[70vh] lg:min-h-[50vh] bg-bg text-center px-[var(--spacing-2xl)] rounded-md my-[var(--spacing-lg)] py-[var(--spacing-lg)] lg:py-0 flex flex-col justify-center items-center scale-up",
    contentClass: "flex flex-col justify-center items-center",
    descriptionClass: "text-xl text-text py-[var(--spacing-sm)]",
    buttonsSectionClass:
      "flex flex-col lg:flex-row items-center justify-center gap-[var(--spacing-md)]",
  },
};

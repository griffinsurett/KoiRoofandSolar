import HeroBg from "@/assets/roof.png";

export const SectionVariants = {
  // Variants for different section types
  media1: {
    sectionClass:
      "section-lg flex text-center flex-col justify-center items-center",
    contentClass:
      "content-section flex flex-col justify-center px-[var(--spacing-lg)] md:px-[var(--spacing-md)]",
    itemsClass:
    "w-full grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-md)] lg:gap-[var(--spacing-xl)]",
    itemClass: "",
    headingAreaClass: "flex flex-col text-bg",
    descriptionClass: "text-sm lg:text-xl text-bg py-[var(--spacing-sm)]",
    backgroundMedia: {
      image: {
        src: HeroBg,
        imageClass: "filter brightness-50 bg-cover bg-center xl:bg-fixed",
      },
      overlayClass: "bg-secondary opacity-30",
    },
  },
  imageCol: {
    sectionClass:
      "section-xs flex justify-center items-center text-left py-[var(--spacing-2xl)]",
    contentClass:
      "content-section flex flex-col-reverse md:flex-row justify-between items-start gap-[var(--spacing-xl)] xl:gap-[var(--spacing-3xl)]",
    itemsClass:
      "flex flex-col text-bg items-start justify-start gap-[var(--spacing-xl)] xl:gap-[var(--spacing-3xl)] w-full lg:w-2/3 lg:sticky lg:top-0",
    itemClass: "",
    headingAreaClass: "flex flex-col",
    topContentClass: "hidden",
    childSlotClass: "w-auto lg:w-1/3 lg:sticky lg:top-0",
    buttonsPlacement: "top-content-section",
  },
  imageCards: {
    sectionClass:
      "flex text-center flex-col section-sm justify-center items-center",
    contentClass:
      "content-section flex flex-col justify-center py-[var(--spacing-md)] lg:py-[var(--spacing-2xl)] px-[var(--spacing-lg)] md:px-[var(--spacing-md)]",
    itemsClass:
      "w-full flex items-center justify-evenly flex-col lg:flex-row gap-[var(--spacing-md)] lg:gap-[var(--spacing-sm)]",
    headingAreaClass:
      "flex flex-col gap-[var(--spacing-sm)] py-[var(--spacing-sm)] lg:py-[var(--spacing-md)]",
    buttonsSectionClass: "py-[var(--spacing-lg)] lg:py-[var(--spacing-xl)]",
    descriptionClass: "text-sm lg:text-xl text-text",
  },
};

import HeroBg from "@/assets/wholeteamkoisolar-old.jpg";

export const SectionVariants = {
  // Variants for different section types
  media1: {
    sectionClass: "flex flex-col justify-center items-center text-center section-sm text-bg",
    contentClass:
      "content-section flex justify-between items-center flex-col",
    itemsClass:
      "flex flex-col items-start justify-start gap-[var(--spacing-xl)] xl:gap-[var(--spacing-3xl)] w-full lg:w-1/2",
    itemClass: "",
    buttonsSectionClass: "",
    headingAreaClass: "flex flex-col text-accent",
    backgroundMedia:{
      image: {
        src: HeroBg,
        imageClass: "filter brightness-50 bg-cover bg-center xl:bg-fixed",
      },
      overlayClass: "bg-secondary opacity-30",
  }
  },  
  imageCol: {
        sectionClass: "flex justify-center items-center text-left section-sm",
        contentClass:
          "content-section flex justify-between py-[var(--spacing-md)] lg:py-[var(--spacing-xl)] items-start flex-col md:flex-row gap-[var(--spacing-md)] lg:gap-[var(--spacing-xl)]",
        itemsClass:
          "flex flex-col items-start justify-start gap-[var(--spacing-xl)] xl:gap-[var(--spacing-3xl)] w-full lg:w-1/2",
        itemClass: "",
        buttonsSectionClass: "",
        headingAreaClass: "flex flex-col",
        backgroundMedia: undefined,
        topContentClass: "hidden",
        childPlacement: "",
        childSlotClass: "lg:sticky lg:top-0",
        buttonsPlacement: "top-content-section",
      },
      cards: {
        sectionClass: "flex text-center flex-col section-sm justify-center items-center",
        contentClass:
          "content-section flex flex-col justify-center py-[var(--spacing-xl)] lg:py-[var(--spacing-2xl)] p-[var(--spacing-lg)] md:p-[var(--spacing-md)]",
        itemsClass:
          "w-full flex items-center justify-evenly flex-col lg:flex-row gap-[var(--spacing-xl)] lg:gap-[var(--spacing-2xl)]",
        headingAreaClass: "flex flex-col gap-[var(--spacing-sm)] py-[var(--spacing-sm)] lg:py-[var(--spacing-md)]",
        backgroundMedia: undefined,
        buttonsPlacement: "top-content-section",
      },
}
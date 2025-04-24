export const SectionVariants = {
    imageCol: {
        sectionClass: "flex justify-center items-center text-left section-sm",
        contentClass:
          "flex justify-between py-[var(--spacing-2xl)] lg:py-[var(--spacing-4xl)] items-start flex-col md:flex-row gap-[var(--spacing-xl)] lg:gap-[var(--spacing-4xl)]",
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
        sectionClass: "flex flex-col items-center justify-evenly text-center",
        contentClass:
          "flex flex-col py-[var(--spacing-2xl)] lg:py-[var(--spacing-4xl)]",
        itemsClass:
          "flex flex-col lg:flex-row w-full gap-[var(--spacing-2xl)] xl:gap-[var(--spacing-4xl)]",
        headingAreaClass: "flex flex-col gap-[var(--spacing-sm)] py-[var(--spacing-xl)] lg:py-[var(--spacing-2xl)]",
        backgroundMedia: undefined,
        buttonsPlacement: "top-content-section",
      }
}
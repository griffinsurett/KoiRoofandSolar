// src/components/ButtonVariants.js

// Shared base classes: container, spacing, typography, and transitions
export const baseButtonClasses =
  "relative inline-flex items-center group uppercase text-center px-[var(--spacing-xl)] lg:px-[var(--spacing-3xl)] py-[var(--spacing-md)] font-medium w-full lg:w-auto transition-colors duration-300 ease-in-out";

export const ButtonVariants = {
  primary: {
    variantClasses:
      "bg-[var(--color-primary)] text-[var(--color-bg)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)]",
    buttonClasses: baseButtonClasses,
    iconDefaults: { hoverOnly: true, animateIcon: true },
  },
  secondary: {
    variantClasses:
      "bg-[var(--color-accent)] text-[var(--color-primary)] hover:bg-[var(--color-secondary)]",
    buttonClasses: baseButtonClasses,
    iconDefaults: { hoverOnly: true, animateIcon: true },
  },
  tertiary: {
    variantClasses:
      "bg-[var(--color-bg)] text-[var(--color-primary)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-bg)]",
    buttonClasses: baseButtonClasses,
    iconDefaults: { hoverOnly: true, animateIcon: true },
  },
  underline: {
    variantClasses:
      "underline text-[var(--color-primary)] hover:text-[var(--color-secondary)]",
    buttonClasses: baseButtonClasses,
    iconDefaults: { hoverOnly: false, animateIcon: false },
  },
};

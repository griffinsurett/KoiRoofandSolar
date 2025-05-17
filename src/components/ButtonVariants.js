// src/components/ButtonVariants.js
export const baseButtonClasses =
  "border-radius uppercase text-center px-[var(--spacing-xl)] lg:px-[var(--spacing-3xl)] py-[var(--spacing-md)] transform transition-all duration-300 ease-in-out font-medium text-center w-full lg:w-auto";

export const ButtonVariants = {
  primary: {
    variantClasses:
      "bg-[var(--color-primary)] text-[var(--color-bg)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)]",
    buttonClasses: baseButtonClasses,
  },
  secondary: {
    variantClasses:
      "bg-[var(--color-accent)] text-[var(--color-primary)] hover:bg-[var(--color-secondary)]",
    buttonClasses: baseButtonClasses,
  },
  tertiary: {
    variantClasses:
      "bg-[var(--color-bg)] text-[var(--color-primary)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-bg)]",
    buttonClasses: baseButtonClasses,
  },
  underline: {
    variantClasses:
      "underline text-[var(--color-primary)] hover:text-[var(--color-secondary)]",
    buttonClasses: "",
  },
};

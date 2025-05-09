// src/components/Button.jsx
import DefaultIcon from "@/assets/astro.svg"; // Neutral default icon for the template (if needed)
import { getImage } from "astro:assets";
import ButtonIcon from "./ButtonIcon.jsx"; // <-- import ButtonIcon component

// Default base button classes for non-underline variants.
const baseButtonClasses =
  "border-radius uppercase text-center px-[var(--spacing-xl)] lg:px-[var(--spacing-3xl)] py-[var(--spacing-md)] transform transition-all duration-300 ease-in-out font-medium text-center w-full lg:w-auto";

// Consolidate variant defaults.
const buttonVariantDefaults = {
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

export default async function Button({
  as: ComponentProp,
  type = "button",
  onClick,
  disabled, // New prop to manually disable a button.
  children,
  className = "",
  href,
  variant, // "primary", "secondary", or "underline"
  iconProps = {}, // Consolidated icon properties.
  showIcon = false, // Controls whether an icon is rendered.
  ...props
}) {
  // Default the variant to "primary" if not provided.
  variant = variant || "primary";

  // Pull in the variant defaults.
  const { variantClasses, buttonClasses } =
    buttonVariantDefaults[variant] || buttonVariantDefaults.primary;

  // Merge the variant's icon defaults with any custom iconProps.
  const mergedIconProps = { ...iconProps };
  const {
    element,               // The actual icon element (e.g., an inline SVG, image, etc.)
    position = "right",    // "left" or "right"
    className: iconCustomClass = "", // Additional class for the icon container.
    hoverOnly,
    animateIcon,
  } = mergedIconProps;

  // Ensure the button container is positioned correctly.
  const containerDefaults = "relative group";

  // Build overall class names.
  let combinedClassNames =
    variant === "underline"
      ? `${className} ${variantClasses} transition-colors duration-300 ease-in-out ${containerDefaults} group`
      : `${className} ${variantClasses} ${buttonClasses} ${containerDefaults}`;

  // Determine disabled state.
  // If the disabled prop is passed, or if no href is provided (implying hasPage is false), then disable.
  const computedDisabled = disabled ?? false;
  // Force disabled rendering as a <button> (i.e. not as an anchor).
  const ComponentFinal =
    computedDisabled
      ? "button"
      : ComponentProp || (href ? "a" : "button");

  // Prepare additional props.
  const additionalProps = { ...props };
  if (ComponentFinal === "button") {
    additionalProps.disabled = computedDisabled;
  } else if (ComponentFinal === "a") {
    // When rendering as an anchor, if disabled then remove href and add disabled styling.
    additionalProps.href = computedDisabled ? undefined : href;
    if (computedDisabled) {
      combinedClassNames += " pointer-events-none opacity-50";
    }
  }

  return (
    <ComponentFinal
      {...(ComponentFinal === "button" ? { type } : { href: additionalProps.href })}
      onClick={computedDisabled ? undefined : onClick}
      className={combinedClassNames}
      {...(ComponentFinal === "button" ? additionalProps : {})}
    >
      {showIcon && position === "left" && (
        <ButtonIcon
          showIcon={showIcon}
          element={element}
          hoverOnly={hoverOnly}
          animateIcon={animateIcon}
          position={position}
          iconCustomClass={iconCustomClass}
        />
      )}
      {children}
      {showIcon && position === "right" && (
        <ButtonIcon
          showIcon={showIcon}
          element={element}
          hoverOnly={hoverOnly}
          animateIcon={animateIcon}
          position={position}
          iconCustomClass={iconCustomClass}
        />
      )}
    </ComponentFinal>
  );
}

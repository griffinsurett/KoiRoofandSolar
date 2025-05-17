// src/components/Button.jsx
import ButtonIcon from "./ButtonIcon.jsx";
import { ButtonVariants } from "./ButtonVariants.js";

export default async function Button({
  as: ComponentProp,
  type = "button",
  onClick,
  disabled,
  children,
  className = "",
  href,
  variant = "primary",
  iconProps = {},
  showIcon = false,
  ...props
}) {
  const { variantClasses, buttonClasses, iconDefaults } =
    ButtonVariants[variant] || ButtonVariants.primary;

  // merge icon defaults
  const mergedIcon = { ...iconDefaults, ...iconProps };
  const {
    element,
    position = "right",
    className: iconClass = "",
    hoverOnly,
    animateIcon,
  } = mergedIcon;

  // build class list
  let classes = [className, variantClasses, buttonClasses]
    .filter(Boolean)
    .join(" ");

  // handle disabled/link vs. button
  const isDisabled = disabled ?? false;
  const ComponentFinal = isDisabled
    ? "button"
    : ComponentProp || (href ? "a" : "button");

  const extra = { ...props };
  if (ComponentFinal === "button") {
    extra.disabled = isDisabled;
  } else {
    extra.href = isDisabled ? undefined : href;
    if (isDisabled) classes += " pointer-events-none opacity-50";
  }

  return (
    <ComponentFinal
      {...(ComponentFinal === "button" ? { type } : { href: extra.href })}
      onClick={isDisabled ? undefined : onClick}
      className={classes}
      {...(ComponentFinal === "button" ? extra : {})}
    >
      {showIcon && position === "left" && (
        <ButtonIcon
          showIcon={showIcon}
          element={element}
          hoverOnly={hoverOnly}
          animateIcon={animateIcon}
          position={position}
          iconCustomClass={iconClass}
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
          iconCustomClass={iconClass}
        />
      )}
    </ComponentFinal>
  );
}

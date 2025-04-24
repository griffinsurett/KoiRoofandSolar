import Button from "../Button.jsx";

/**
 * ServiceCard component for rendering an individual service.
 * It uses the effective hasPage value (service's own value if defined,
 * otherwise the default provided via Section meta) to decide
 * whether to render the "Learn More" button.
 */
export default function ServiceCard({ item, HasPage }) {
  const effectiveHasPage =
    item.data.hasPage !== undefined ? item.data.hasPage : HasPage;
  const { title, description, icon } = item.data;

  // Determine icon source if it's an Astro image metadata object or a string URL
  let iconSrc;
  if (icon) {
    if (typeof icon === "string") {
      iconSrc = icon;
    } else if (icon.src) {
      iconSrc = icon.src;
    }
  }

  return (
    <li className="service-card p-[var(--spacing-lg)] rounded-4xl shadow hover:shadow-lg transition min-h-[50vh] flex flex-col justify-evenly items-center w-full">
      <div className="card-content">
        {iconSrc && (
            <img
              src={iconSrc}
              alt={`${title} icon`}
              width={icon?.width}
              height={icon?.height}
              className="w-auto h-18 mx-auto mb-[var(--spacing-sm)]"
            />
        )}

        <div className="text-content">
          <h3 className="text-primary text-center h3">
            {title}
          </h3>
          <p className="text-center">
            {description || item.body}
          </p>
        </div>
      </div>
      {effectiveHasPage && (
        <div className="text-center">
          <Button href={`/services/${item.slug}`}>Learn More</Button>
        </div>
      )}
    </li>
  );
}

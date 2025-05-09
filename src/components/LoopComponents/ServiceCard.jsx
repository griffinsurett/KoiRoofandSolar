// src/components/ServiceCard.jsx
import Button from "../Button.jsx";

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
    <li className="service-card scale-up p-[var(--spacing-lg)] shadow hover:shadow-lg transition-shadow group flex flex-col justify-between items-center w-full min-h-[30vh] lg:min-h-[60vh] border-radius">
      {effectiveHasPage ? (
        <a
          href={`/services/${item.slug}`}
          className="w-full flex-1 flex flex-col justify-evenly items-center text-center no-underline"
        >
          {iconSrc && (
            <img
              src={iconSrc}
              alt={`${title} icon`}
              width={icon?.width}
              height={icon?.height}
              className="w-auto h-22 mx-auto mb-[var(--spacing-sm)] transition-transform duration-300 ease-in-out group-hover:scale-120"
            />
          )}
          <h3 className="text-primary text-center h3 mb-[var(--spacing-sm)]">
            {title}
          </h3>
          <p className="text-center">{description || item.body}</p>
        </a>
      ) : (
        <div className="card-content flex-1 flex flex-col justify-evenly items-center text-center">
          {iconSrc && (
            <img
              src={iconSrc}
              alt={`${title} icon`}
              width={icon?.width}
              height={icon?.height}
              className="w-auto h-22 mx-auto mb-[var(--spacing-sm)] transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
          )}
          <h3 className="text-primary text-center h3 mb-[var(--spacing-sm)]">
            {title}
          </h3>
          <p className="text-center text-lg">{description || item.body}</p>
        </div>
      )}

      {effectiveHasPage && (
        <div className="mt-4 text-center">
          <Button
            href={`/services/${item.slug}`}
            className="transition-colors duration-300 ease-in-out group-hover:bg-[var(--color-secondary)] group-hover:text-[var(--color-primary)]"
          >
            Learn More
          </Button>
        </div>
      )}
    </li>
  );
}

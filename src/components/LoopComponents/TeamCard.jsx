// src/components/TeamCard.jsx

export default function TeamCard({ item }) {
    const { title, role, description, featuredImage } = item.data;
  
    // figure out the image source and dimensions
    let imageSrc;
    let imageWidth;
    let imageHeight;
    if (featuredImage) {
      if (typeof featuredImage === "string") {
        imageSrc = featuredImage;
      } else if (featuredImage.src) {
        imageSrc = featuredImage.src;
        imageWidth = featuredImage.width;
        imageHeight = featuredImage.height;
      }
    }
  
    return (
      <li className="team-card p-[var(--spacing-lg)] shadow hover:shadow-lg transition-shadow group flex flex-col justify-center items-center text-center h-[60vh] w-full">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            width={imageWidth}
            height={imageHeight}
            className="w-32 h-32 rounded-full object-cover mb-[var(--spacing-sm)]"
          />
        ) : (
          <div
            className="
              w-32 h-32 rounded-full 
              border border-[var(--color-border)] 
              mb-[var(--spacing-sm)]
            "
          />
        )}
  
        <h3 className="text-primary h3 mb-[var(--spacing-xs)]">{title}</h3>
        {role && (
          <p className="text-text mb-[var(--spacing-sm)]">{role}</p>
        )}
        <p className="text-center">{description}</p>
      </li>
    );
  }
  
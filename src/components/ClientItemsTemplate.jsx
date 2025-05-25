// src/components/ClientItemsTemplate.jsx
import { componentMapping } from "@/utils/ComponentMapping";
import Carousel from "./Carousel";

export default function ClientItemsTemplate({
  items = [],
  sortBy = "date",
  sortOrder = "desc",
  manualOrder = false,
  componentKey = "Card",
  itemClass = "",
  itemsClass = "",
  collectionName,
  HasPage,
  slider = {
    enabled: true,
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    slidesToShow,
    slidesToScroll,
    arrows: true,
  },
}) {
  // ─── Sort items ───
  const sorted = [...items];
  if (manualOrder) {
    sorted.sort((a, b) => (a.data.order || 0) - (b.data.order || 0));
  } else {
    // your other sortBy logic...
    sorted.sort((a, b) => 0);
    if (sortOrder === "desc") sorted.reverse();
  }

  const Comp = componentMapping[componentKey] || componentMapping.Card;

  // ─── Render as carousel or simple list ───
  if (slider.enabled) {
    return (
      <Carousel
        items={sorted}
        slidesToShow={slider.slidesToShow}
        slidesToScroll={slider.slidesToScroll}
        infinite={slider.infinite}
        autoplay={slider.autoplay}
        autoplaySpeed={slider.autoplaySpeed}
        arrows={slider.arrows}
        containerClass={itemsClass}
        itemClass={itemClass}
        renderItem={item => (
          <Comp
            key={item.slug}
            item={item}
            itemClass={itemClass}
            collectionName={collectionName}
            HasPage={HasPage}
          />
        )}
      />
    );
  }

  // fallback: simple flex/grid
  return (
    <ul className={itemsClass}>
      {sorted.map(item => (
          <Comp
            item={item}
            itemClass={itemClass}
            collectionName={collectionName}
            HasPage={HasPage}
          />
      ))}
    </ul>
  );
}

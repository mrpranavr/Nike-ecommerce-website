import Image from "next/image";

interface CardProps {
  /** Product or shoe name */
  title: string;
  /** Path to the product image (relative to /public or external URL) */
  image: string;
  /** Price displayed as a formatted string, e.g. "$149.99" */
  price: string;
  /** Optional badge label such as "Best Seller" or "New Arrival" */
  badge?: string;
  /** Product category, e.g. "Men's Shoes" */
  category?: string;
  /** Number of available color variants */
  colorCount?: number;
}

export default function Card({
  title,
  image,
  price,
  badge,
  category,
  colorCount,
}: CardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg bg-light-100 transition-shadow hover:shadow-md cursor-pointer">
      {/* Image area */}
      <div className="relative aspect-square w-full bg-light-200 overflow-hidden">
        {badge && (
          <span className="absolute top-3 left-3 z-10 rounded bg-red px-2 py-1 text-footnote text-light-100">
            {badge}
          </span>
        )}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content area */}
      <div className="flex flex-col gap-0.5 px-4 pt-4 pb-5">
        {/* Title row: name left, price right */}
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-body-medium text-dark-900 leading-snug">
            {title}
          </h3>
          <span className="text-body-medium text-dark-900 shrink-0">
            {price}
          </span>
        </div>

        {/* Category */}
        {category && (
          <span className="text-body text-dark-700">{category}</span>
        )}

        {/* Colour count */}
        {colorCount !== undefined && colorCount > 0 && (
          <span className="text-body text-dark-700">
            {colorCount} {colorCount === 1 ? "Colour" : "Colour"}
          </span>
        )}
      </div>
    </article>
  );
}

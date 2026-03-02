import Image from "next/image";

interface CardProps {
  /** Product or shoe name */
  title: string;
  /** Short description or subtitle */
  description?: string;
  /** Path to the product image (relative to /public or external URL) */
  image: string;
  /** Price displayed as a formatted string, e.g. "$120.00" */
  price: number;
  /** Optional badge label such as "Best Seller" or "New Arrival" */
  badge?: { label: string; tone: "orange" | "red" | "green" };
  /** Product category, e.g. "Men's Shoes" */
  category?: string;
  /** Number of available color variants */
  colorCount?: number;
  subtitle?: string;
  meta?: string;
}

export default function Card({
  title,
  description,
  image,
  price,
  badge,
  category,
  colorCount,
}: CardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg bg-light-100 transition-shadow hover:shadow-md border-1 border-light-300">
      {/* Image area */}
      <div className="relative aspect-square w-full bg-light-200">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content area */}
      <div className="flex flex-1 flex-col gap-1 p-4">
        {category && (
          <span className="text-caption text-orange">{category}</span>
        )}
        <h3 className="text-body-medium text-dark-900">{title}</h3>
        <p className="text-body text-dark-700 line-clamp-2">{description}</p>
        {colorCount !== undefined && colorCount > 0 && (
          <span className="text-body text-dark-700">
            {colorCount} {colorCount === 1 ? "Colour" : "Colours"}
          </span>
        )}
        <p className="mt-2 text-body-medium text-dark-900">{price}</p>
      </div>
    </article>
  );
}

import React from "react";
import Card from "@/components/Card";

const sampleProducts = [
  {
    title: "Air Max Pulse",
    category: "Men's Shoes",
    colorCount: 6,
    price: "$149.99",
    image: "/shoes/shoe-1.jpg",
    badge: "Best Seller",
  },
  {
    title: "Air Zoom Pegasus",
    category: "Men's Shoes",
    colorCount: 4,
    price: "$129.99",
    image: "/shoes/shoe-5.avif",
  },
  {
    title: "InfinityRN 4",
    category: "Men's Shoes",
    colorCount: 6,
    price: "$159.99",
    image: "/shoes/shoe-8.avif",
  },
  {
    title: "Metcon 9",
    category: "Men's Shoes",
    colorCount: 3,
    price: "$139.99",
    image: "/shoes/shoe-4.webp",
  },
];

const Home = () => {
  return (
    <main className="flex-1 mx-auto max-w-[1440px] px-6 py-10 lg:px-12">
      <h1 className="text-heading-1 font-jost mb-8">Nike</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {sampleProducts.map((product) => (
          <Card
            key={product.title}
            title={product.title}
            image={product.image}
            price={product.price}
            badge={product.badge}
            category={product.category}
            colorCount={product.colorCount}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;

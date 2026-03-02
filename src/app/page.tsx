import React from "react";
import Card from "@/components/Card";

const products = [
  {
    id: 1,
    title: "Air Max Pulse",
    subtitle: "Men's Shoes",
    meta: "6 Colour",
    price: 149.99,
    imageSrc: "/shoes/shoe-1.jpg",
    badge: { label: "New", tone: "orange" as const },
  },
  {
    id: 2,
    title: "Air Zoom Pegasus",
    subtitle: "Men's Shoes",
    meta: "4 Colour",
    price: 129.99,
    imageSrc: "/shoes/shoe-2.webp",
    badge: { label: "Hot", tone: "red" as const },
  },
  {
    id: 3,
    title: "InfinityRN 4",
    subtitle: "Men's Shoes",
    meta: "6 Colour",
    price: 159.99,
    imageSrc: "/shoes/shoe-3.webp",
    badge: { label: "Trending", tone: "green" as const },
  },
  {
    id: 4,
    title: "Metcon 9",
    subtitle: "Men's Shoes",
    meta: "3 Colour",
    price: 139.99,
    imageSrc: "/shoes/shoe-4.webp",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 mx-auto max-w-[1440px] px-6 py-10 lg:px-12">
        <h1 className='text-heading-1 font-jost mb-8'>Nike</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Nike Air Force 1 Mid '07"
            image="/shoes/shoe-1.jpg"
            price="$130.00"
            badge="Best Seller"
            category="Men's Shoes"
            colorCount={2}
          />
          <Card
            title="Nike Air Max 90"
            image="/shoes/shoe-5.avif"
            price="$120.00"
            category="Women's Shoes"
            colorCount={5}
          />
          <Card
            title="Nike Huarache Run"
            image="/shoes/shoe-8.avif"
            price="$90.00"
            badge="New Arrival"
            category="Kids' Shoes"
            colorCount={3}
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
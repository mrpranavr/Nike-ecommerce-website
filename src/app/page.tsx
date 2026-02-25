import { db } from "@/db";
import { products } from "@/db/schema";
import ProductList from "@/components/ProductList";

export const dynamic = "force-dynamic";

export default async function Home() {
  const allProducts = await db.select().from(products);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-black text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight mb-4">
          Just Do It.
        </h1>
        <p className="text-lg text-gray-300 max-w-xl mx-auto">
          Explore the latest Nike gear — from iconic sneakers to everyday
          essentials.
        </p>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-8">Featured Products</h2>
        <ProductList initialProducts={allProducts} />
      </section>
    </main>
  );
}

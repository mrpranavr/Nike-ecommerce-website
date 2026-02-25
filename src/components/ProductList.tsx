"use client";

import { useEffect } from "react";
import { useProductStore } from "@/store/useProductStore";
import type { Product } from "@/db/schema";
import Image from "next/image";

interface Props {
  initialProducts: Product[];
}

export default function ProductList({ initialProducts }: Props) {
  const {
    setProducts,
    selectedCategory,
    setSelectedCategory,
    filteredProducts,
  } = useProductStore();

  useEffect(() => {
    setProducts(initialProducts);
  }, [initialProducts, setProducts]);

  const displayProducts = filteredProducts();
  const categories = Array.from(
    new Set(initialProducts.map((p) => p.category))
  );

  return (
    <>
      {/* Category Filter */}
      <div className="flex gap-3 mb-8 flex-wrap">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            selectedCategory === null
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              selectedCategory === cat
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      {displayProducts.length === 0 ? (
        <p className="text-gray-500 text-center py-12">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <div className="relative w-full h-64 bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                  {product.category}
                </span>
                <h3 className="text-lg font-semibold mt-1">{product.name}</h3>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xl font-bold">${product.price}</span>
                  <span className="text-xs text-gray-400">
                    {product.stock} in stock
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

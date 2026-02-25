import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { products } from "./schema";
import dotenv from "dotenv";

dotenv.config();

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

const sampleProducts = [
  {
    name: "Nike Air Max 90",
    description:
      "The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU accents.",
    price: "130.00",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/wzitsrb4oucx3mza5jyq/AIR+MAX+90.png",
    category: "Shoes",
    stock: 50,
  },
  {
    name: "Nike Air Force 1 '07",
    description:
      "The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best.",
    price: "115.00",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/350e7f3a-979a-402b-9396-a8a998dd76ab/W+AIR+FORCE+1+%2707.png",
    category: "Shoes",
    stock: 75,
  },
  {
    name: "Nike Dunk Low Retro",
    description:
      "Created for the hardwood but taken to the streets, the Nike Dunk Low Retro returns with crisp overlays and original team colours.",
    price: "115.00",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b1bcb542-cf5e-4d60-a8b0-28cf3b9e1eee/NIKE+DUNK+LOW+RETRO.png",
    category: "Shoes",
    stock: 60,
  },
  {
    name: "Nike Sportswear Tech Fleece Hoodie",
    description:
      "Engineered for warmth without the bulk, the Nike Sportswear Tech Fleece Hoodie features a streamlined design perfect for everyday wear.",
    price: "130.00",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c1a1e45d-1eab-4b73-9e0b-e4c86e8b0bb3/M+NK+TCH+FLC+FZ+HOODIE.png",
    category: "Clothing",
    stock: 40,
  },
  {
    name: "Nike Pegasus 41",
    description:
      "Responsive cushioning in the Pegasus provides an energised ride for everyday road running. Experience lighter-than-ever cushioning with the Air Zoom unit.",
    price: "140.00",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a0a0a060-0a0a-4a0a-8a0a-0a0a0a0a0a0a/PEGASUS+41.png",
    category: "Shoes",
    stock: 35,
  },
  {
    name: "Nike Club Fleece Joggers",
    description:
      "The Nike Club Fleece Joggers combine classic style with the soft comfort of fleece for an elevated everyday look.",
    price: "70.00",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b0b0b060-0b0b-4b0b-8b0b-0b0b0b0b0b0b/CLUB+FLEECE+JOGGERS.png",
    category: "Clothing",
    stock: 90,
  },
];

async function seed() {
  console.log("🌱 Seeding products...");
  await db.insert(products).values(sampleProducts);
  console.log("✅ Seeded 6 Nike products successfully!");
}

seed().catch((err) => {
  console.error("❌ Seed failed:", err);
  process.exit(1);
});

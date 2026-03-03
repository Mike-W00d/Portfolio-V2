/**
 * One-time script to backfill readTime for existing posts.
 *
 * Usage:
 *   npx tsx scripts/backfill-readtime.ts
 *
 * Requires MONGODB_URI in .env (or .env.local).
 */

import { config } from "dotenv";
config({ path: ".env.local" });
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  console.error("MONGODB_URI is not set");
  process.exit(1);
}

async function main() {
  await mongoose.connect(MONGODB_URI as string);
  const db = mongoose.connection.db!;
  const collection = db.collection("posts");

  const posts = await collection.find({}).toArray();
  let updated = 0;

  for (const post of posts) {
    const content = (post.content as string) || "";
    const wordCount = content
      .replace(/[#*_~`>\[\]()!|\\-]/g, "")
      .split(/\s+/)
      .filter(Boolean).length;
    const readTime = Math.max(1, Math.ceil(wordCount / 200));

    await collection.updateOne({ _id: post._id }, { $set: { readTime } });
    console.log(`  ${post.title}: ${readTime} min`);
    updated++;
  }

  console.log(`\nBackfilled ${updated} posts.`);
  await mongoose.disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

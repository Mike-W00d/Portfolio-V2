/**
 * One-time script to set status=1 (active) on all existing posts
 * that don't already have a status field.
 *
 * Usage:
 *   npx tsx scripts/migrate-status.ts
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

  const result = await collection.updateMany(
    { status: { $exists: false } },
    { $set: { status: 1 } },
  );

  console.log(`Updated ${result.modifiedCount} posts to status=1 (active).`);
  await mongoose.disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

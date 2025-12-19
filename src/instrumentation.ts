import connectToDB from "./lib/dbConnect";

export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    console.log("🚀 Server starting - Pre-warming database connection...");
    try {
      await connectToDB();
      console.log("🔥 Database pre-warmed successfully!");
    } catch (error) {
      console.error("🚨 Failed to pre-warm database:", error);
    }
  }
}

import { Metadata } from "next";

import { IPost } from "@/lib/models/posts";

export const metadata: Metadata = {
  title: "Blog",
};

export default async function Index() {
  // Fetch posts with caching for optimization
  const fetchPosts = async (): Promise<IPost[]> => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/posts`,
        {
          cache: "no-store", // Ensure fresh data on each request
        },
      );

      if (!res.ok) throw new Error("Failed to fetch posts");

      return res.json();
    } catch (error) {
      console.error("Error fetching posts:", error);
      return []; // Return empty array on failure
    }
  };

  const posts = await fetchPosts();

  console.log(posts);

  return (
    <div>
      {/* <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

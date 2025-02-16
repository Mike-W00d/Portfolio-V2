import axios from "axios";
import { Metadata } from "next";

import Container from "@/components/blog-components/container";
import { HeroPost } from "@/components/blog-components/hero-post";
import { Intro } from "@/components/blog-components/intro";
import { MoreStories } from "@/components/blog-components/more-stories";
import { getAllPosts } from "@/lib/api";
import posts, { Post } from "@/lib/models/posts";

export const metadata: Metadata = {
  title: "Blog",
};

export default async function Index() {
  // Fetch posts with caching for optimization
  const fetchPosts = async (): Promise<Post[]> => {
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

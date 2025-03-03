import console from "console";

import { Metadata } from "next";

import HeroPost from "@/components/heroPost";
import PostContainer from "@/components/postContainer";

export const metadata: Metadata = {
  title: "Blog",
};

interface postProps {
  _id: string;
  title: string;
  coverImage: string;
  excerpt: string;
  date: string;
  content: string;
}

export default async function Index() {
  const fetchPosts = async (): Promise<{ data: postProps[] }> => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/posts`,
      );

      if (!res.ok) throw new Error("Failed to fetch posts");

      return res.json();
    } catch (error) {
      console.error("Error fetching posts:", error);
      return { data: [] };
    }
  };

  const data = await fetchPosts();

  const posts = data.data;

  const heroPost = posts[0];

  return (
    <div className="flex w-full flex-col">
      <h1 className="my-4 text-4xl font-bold text-fedblue">
        Welcome to my blog
      </h1>
      <span className="my-4 text-lg text-honblue">
        Follow along for Code Snippets, podcast reviews and whatever else I feel
        like posting.
      </span>
      <div className="my-4 flex w-full flex-col rounded-md bg-white p-4 shadow-lg max-lg:hidden">
        <h2 className="mb-2 text-3xl font-bold text-fedblue">
          {" "}
          Featured Post{" "}
        </h2>
        <HeroPost
          id={heroPost._id}
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          excerpt={heroPost.excerpt}
          date={heroPost.date}
          content={heroPost.content}
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold text-fedblue max-lg:hidden">
          All Blog Posts
        </h1>
        <h1 className="text-3xl font-bold text-fedblue lg:hidden">All Posts</h1>
      </div>
      <div className="grid grid-cols-2 max-[900px]:grid-cols-1">
        {posts.map((post: postProps) => (
          <PostContainer
            key={post._id}
            id={post._id}
            title={post.title}
            coverImage={post.coverImage}
            excerpt={post.excerpt}
            date={post.date}
          />
        ))}
      </div>
    </div>
  );
}

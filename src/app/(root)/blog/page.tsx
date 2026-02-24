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
      const res = await fetch(`${process.env.VERCEL_URL}/api/posts`);

      if (!res.ok) throw new Error("Failed to fetch posts");

      return res.json();
    } catch (error) {
      console.error("Error fetching posts:", error);
      return { data: [] };
    }
  };

  const data = await fetchPosts();
  const posts = data.data;

  if (!posts || posts.length === 0) {
    return (
      <div className="flex w-full flex-col items-center justify-center py-20">
        <h1 className="text-4xl font-bold text-fedblue">Blog</h1>
        <p className="mt-4 text-lg text-honblue">
          No posts yet. Check back soon!
        </p>
      </div>
    );
  }

  const heroPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <div className="flex w-full flex-col">
      <div className="my-4">
        <HeroPost
          _id={heroPost._id}
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          excerpt={heroPost.excerpt}
          date={heroPost.date}
        />
      </div>

      {remainingPosts.length > 0 && (
        <>
          <div className="my-8 h-px bg-gradient-to-r from-transparent via-pacific to-transparent" />

          <h2 className="mb-6 text-3xl font-bold text-fedblue">All Posts</h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {remainingPosts.map((post: postProps) => (
              <PostContainer
                key={post._id}
                _id={post._id}
                title={post.title}
                coverImage={post.coverImage}
                excerpt={post.excerpt}
                date={post.date}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

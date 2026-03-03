import { auth } from "@clerk/nextjs/server";
import { Types } from "mongoose";
import { Metadata } from "next";

import HeroPost from "@/components/blog-components/heroPost";
import PostContainer from "@/components/blog-components/postContainer";
import connectToDB from "@/lib/dbConnect";
import Post from "@/lib/models/posts";

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

interface PostDocument {
  _id: Types.ObjectId;
  title: string;
  coverImage: string;
  excerpt: string;
  date: string;
  content: string;
}

async function getPosts(isLoggedIn: boolean): Promise<postProps[]> {
  await connectToDB();
  try {
    const filter = isLoggedIn ? { status: { $in: [1, 2] } } : { status: 1 };
    const posts = (await Post.find(filter)
      .sort({ date: -1 })
      .select("title coverImage excerpt date content status")
      .lean()
      .exec()) as unknown as PostDocument[];

    return posts.map((post) => ({
      _id: post._id.toString(),
      title: post.title,
      coverImage: post.coverImage,
      excerpt: post.excerpt,
      date: post.date,
      content: post.content,
    }));
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export default async function Index() {
  const { userId } = await auth();
  const posts = await getPosts(!!userId);

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
      <div className="flex my-6 justify-center">
        <h1 className="text-4xl font-bold text-fedblue">Sub Par Engineering</h1>
      </div>
      <HeroPost
        _id={heroPost._id}
        title={heroPost.title}
        coverImage={heroPost.coverImage}
        excerpt={heroPost.excerpt}
        date={heroPost.date}
      />

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

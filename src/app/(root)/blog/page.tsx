import { Metadata } from "next";

import Container from "@/components/blog-components/container";
import { HeroPost } from "@/components/blog-components/hero-post";
import { Intro } from "@/components/blog-components/intro";
import { MoreStories } from "@/components/blog-components/more-stories";
import { getAllPosts } from "@/lib/api";

export const metadata: Metadata = {
  title: "Blog",
};

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Intro />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}

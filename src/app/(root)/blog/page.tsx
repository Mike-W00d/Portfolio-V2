import { Metadata } from "next";

import { IPost } from "@/lib/models/posts";
import HeroPost from "@/components/heroPost";
import PostContainer from "@/components/postContainer";
import console from "console";

export const metadata: Metadata = {
  title: "Blog",
};

const mockPost = {
  _id: "67b367ae734caffda3e7fb0c",
  title: "Lorem Ipsum Post",
  coverImage: "/BaldBibleHome.jpg",
  excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  date: "2021-01-01",
  content: `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

  Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea dictumst.

  Fusce convallis, mauris imperdiet gravida bibendum, nisl turpis suscipit mauris, sed placerat ipsum urna sed risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Nulla facilisi. Phasellus feugiat, sapien ullamcorper viverra pretium, nisl est bibendum sapien, nec facilisis mauris ipsum a odio. Praesent dapibus. Curabitur urna. Vestibulum tempor, sapien fringilla auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis ultricies, lacus sed tincidunt tincidunt, nibh ligula cursus erat, at vehicula libero turpis vitae arcu. Aliquam erat volutpat. Suspendisse potenti. Ut a eros at ligula vehicula pretium. Maecenas feugiat pede vel risus. Nulla et lectus vestibulum urna fringilla ultrices. Phasellus eu tellus sit amet tortor gravida placerat. Integer sapien est, iaculis in, pretium quis, viverra ac, nunc. Praesent eget sem vel leo ultrices bibendum.

  Aenean faucibus. Morbi dolor nulla, malesuada eu, pulvinar at, mollis ac, nulla. Curabitur auctor semper nulla. Donec varius orci eget risus. Duis nibh mi, congue eu, accumsan eleifend, sagittis quis, diam. Duis eget orci sit amet orci dignissim rutrum. Nam dui ligula, fringilla a, euismod sodales, sollicitudin vel, wisi. Morbi auctor lorem non justo. Nam lacus libero, pretium at, lobortis vitae, ultricies et, tellus. Donec aliquet, tortor sed accumsan bibendum, erat ligula aliquet magna, vitae ornare odio metus a mi. Morbi ac orci et nisl hendrerit mollis. 

  Suspendisse ut massa. Cras nec ante. Pellentesque a nulla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam tincidunt urna. Nulla ullamcorper vestibulum turpis. Pellentesque cursus luctus mauris. Nulla malesuada porttitor diam. Donec felis erat, congue non, volutpat at, tincidunt tristique, libero. Vivamus viverra fermentum felis. Donec nonummy pellentesque ante. Phasellus adipiscing semper elit. Proin fermentum massa ac quam. Sed diam turpis, molestie vitae, placerat a, molestie nec, leo. Maecenas lacinia. Nam ipsum ligula, eleifend at, accumsan nec, suscipit a, ipsum. Morbi blandit ligula feugiat magna. Nunc eleifend consequat lorem. Sed lacinia nulla vitae enim. Pellentesque tincidunt purus vel magna. Integer non enim. Praesent euismod nunc eu purus. Donec bibendum quam in tellus. Nullam curabitur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. 

  Etiam bibendum elit eget erat. Nullam sit amet magna in magna gravida vehicula. Mauris tincidunt sem sed arcu. Nunc posuere. Sed viverra, ipsum et scelerisque placerat, orci magna condimentum augue, nec ultricies nibh arcu eu tellus. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin vel sem at odio varius mattis. Sed vitae justo. 
  `,
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
  // Fetch posts with caching for optimization
  const fetchPosts = async () => {
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

  const data = await fetchPosts();

  const posts = data.data;

  return (
    <div className="flex flex-col w-full">
      <h1 className="text-fedblue my-4 text-4xl font-bold">
        Welcome to my blog
      </h1>
      <span className="text-honblue my-4 text-lg">
        Follow along for Code Snippets, podcast reviews and whatever else I feel
        like posting.
      </span>
      <div className="flex flex-col w-full max-lg:hidden shadow-md rounded-md p-4 my-4">
        <h2 className="text-fedblue text-3xl font-bold mb-2">
          {" "}
          Featured Post{" "}
        </h2>
        <HeroPost
          id={mockPost._id}
          title={mockPost.title}
          coverImage={mockPost.coverImage}
          excerpt={mockPost.excerpt}
          date={mockPost.date}
          content={mockPost.content}
        />
      </div>
      <div>
        <h1 className="text-3xl text-fedblue font-bold max-lg:hidden">
          {" "}
          More Blog Posts
        </h1>
        <h1 className="text-3xl text-fedblue font-bold lg:hidden">
          {" "}
          All Posts
        </h1>
      </div>
      <div className="grid grid-cols-2 max-sm:grid-cols-1">
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
      {/* <PostContainer
        id={mockPost.id}
        title={mockPost.title}
        coverImage={mockPost.coverImage}
        excerpt={mockPost.excerpt}
        date={mockPost.date}
      /> */}
    </div>
  );
}

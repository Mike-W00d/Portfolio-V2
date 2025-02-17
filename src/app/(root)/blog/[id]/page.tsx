// import { Metadata } from "next";
// import { notFound } from "next/navigation";

import { title } from "process";

import Image from "next/image";

import { Preview } from "@/components/editor/Preview";
import Avatar from "@/components/blog-components/avatar";

// import Container from "@/components/blog-components/container";
// import { getAllPosts, getPostBySlug } from "@/lib/api";
// import { CMS_NAME } from "@/lib/constants";
// import markdownToHtml from "@/lib/markdowntoHTML";

// type Params = {
//   params: Promise<{
//     slug: string;
//   }>;
// };

// export default async function Post(props: Params) {
//   const params = await props.params;
//   const post = getPostBySlug(params.slug);

//   if (!post) {
//     return notFound();
//   }

//   // const content = await markdownToHtml(post.content || "");

//   return (
//     <main>
//       <Container>
//         {/* <article className="mb-32">
//           <PostHeader
//             title={post.title}
//             coverImage={post.coverImage}
//             date={post.date}
//             author={post.author}
//           />
//           <PostBody content={content} />
//         </article> */}
//       </Container>
//     </main>
//   );
// }

// export async function generateMetadata(props: Params): Promise<Metadata> {
//   const params = await props.params;
//   const post = getPostBySlug(params.slug);

//   if (!post) {
//     return notFound();
//   }

//   const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;

//   return {
// //     title,
// //     openGraph: {
// //       title,
// //       images: [post.ogImage.url],
// //     },
// //   };
// // }

// export async function generateStaticParams() {
//   const posts = getAllPosts();

//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
//

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const fetchPost = async (id: string) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/posts/${id}`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch post");
    }
    return response.json();
  };

  const data = await fetchPost(id);

  const { title, content, coverImage, date } = data.data;

  const formattedDate = new Date(date).toLocaleDateString();

  return (
    <main>
      <div className="flex flex-col items-center px-10">
        <Image
          src={coverImage}
          alt={title}
          width={0}
          height={0}
          sizes="(max-width: 800px) 100vw, 800px"
          style={{
            width: "auto",
            height: "auto",
            maxWidth: "100%",
            maxHeight: "500px",
          }}
          className="mt-4"
        />
        <div className="w-full flex items-center mt-4 justify-between">
          <h1 className="text-4xl text-fedblue font-bold"> {title} </h1>
          <div>
            <Avatar name="Michael Wood" picture="/HERO2.png" />
            <p className="flex justify-end text-honblue text-lg">
              {" "}
              {formattedDate}{" "}
            </p>
          </div>
        </div>
        <Preview content={content} />
      </div>
    </main>
  );
}

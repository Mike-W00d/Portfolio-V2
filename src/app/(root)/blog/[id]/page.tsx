// import { Metadata } from "next";
// import { notFound } from "next/navigation";

import { title } from "process";

import Image from "next/image";

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

  const { title, content, coverImage, excerpt, date, author } = data.data;

  return (
    <main>
      <h1> {title} </h1>
      <Image src={coverImage} alt={title} width={200} height={200} />
      <p> {excerpt} </p>
      <p> {date} </p>
      <p> {author} </p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </main>
  );
}

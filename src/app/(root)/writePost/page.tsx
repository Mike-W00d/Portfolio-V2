"use client";

import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

import { BlogForm } from "@/components/forms/blogForm";

export default function WritePost() {
  const searchParams = useSearchParams();
  const editId = searchParams.get("edit");
  const [postData, setPostData] = useState<any>(null);

  useEffect(() => {
    if (!editId) return;

    async function fetchPost() {
      try {
        const res = await fetch(`/api/posts/${editId}`);
        if (!res.ok) throw new Error("Failed to fetch post");
        const { data } = await res.json();
        setPostData({
          _id: data._id,
          title: data.title,
          coverImage: data.coverImage,
          excerpt: data.excerpt,
          content: data.content,
        });
      } catch (error) {
        console.error("Error fetching post for edit:", error);
      }
    }

    fetchPost();
  }, [editId]);

  if (editId && !postData) {
    return (
      <div className="flex h-[calc(100vh-64px)] items-center justify-center">
        <p className="text-lg text-honblue">Loading post...</p>
      </div>
    );
  }

  return (
    <div className="flex h-[calc(100vh-64px)] flex-col items-center">
      <h1 className="mb-4 mt-2 flex text-3xl font-bold text-fedblue">
        {editId ? "Edit Post" : "Write a Post"}
      </h1>
      <BlogForm initialValues={postData || undefined} />
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

function getViewedPosts(): string[] {
  try {
    const raw = localStorage.getItem("viewed_posts");
    if (raw) return JSON.parse(raw);
  } catch {}
  return [];
}

function markPostViewed(postId: string) {
  try {
    const posts = getViewedPosts();
    if (!posts.includes(postId)) {
      posts.push(postId);
      localStorage.setItem("viewed_posts", JSON.stringify(posts));
    }
  } catch {}
}

export default function ViewCounter({
  postId,
  isLoggedIn,
}: {
  postId: string;
  isLoggedIn: boolean;
}) {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    const alreadyViewed = getViewedPosts().includes(postId);
    const method = isLoggedIn || alreadyViewed ? "GET" : "POST";

    fetch(`/api/posts/${postId}/views`, { method })
      .then((res) => res.json())
      .then((data) => {
        setViews(data.viewCount);
        if (method === "POST") markPostViewed(postId);
      })
      .catch(() => {});
  }, [postId, isLoggedIn]);

  if (views === null) return null;

  return (
    <span className="text-sm text-honblue">
      {views} {views === 1 ? "view" : "views"}
    </span>
  );
}

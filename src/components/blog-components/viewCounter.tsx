"use client";

import { useEffect } from "react";

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

export default function TrackView({
  postId,
  isLoggedIn,
}: {
  postId: string;
  isLoggedIn: boolean;
}) {
  useEffect(() => {
    const alreadyViewed = getViewedPosts().includes(postId);
    const method = isLoggedIn || alreadyViewed ? "GET" : "POST";

    fetch(`/api/posts/${postId}/views`, { method })
      .then((res) => res.json())
      .then(() => {
        if (method === "POST") markPostViewed(postId);
      })
      .catch(() => {});
  }, [postId, isLoggedIn]);

  return null;
}

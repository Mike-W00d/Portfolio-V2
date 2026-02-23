"use client";

import { useEffect, useState } from "react";

export default function ViewCounter({
  postId,
  isLoggedIn,
}: {
  postId: string;
  isLoggedIn: boolean;
}) {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    fetch(`/api/posts/${postId}/views`, {
      method: isLoggedIn ? "GET" : "POST",
    })
      .then((res) => res.json())
      .then((data) => setViews(data.viewCount))
      .catch(() => {});
  }, [postId, isLoggedIn]);

  console.log({ views });

  if (views === null) return null;

  return (
    <span className="text-sm text-honblue">
      {views} {views === 1 ? "view" : "views"}
    </span>
  );
}

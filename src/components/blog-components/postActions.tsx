"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function PostActions({ postId }: { postId: string }) {
  const router = useRouter();

  async function handleDelete() {
    if (!confirm("Are you sure you want to delete this post?")) return;

    try {
      const res = await fetch(`/api/posts/${postId}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      toast.success("Post deleted");
      router.push("/blog");
    } catch (error) {
      console.error("Error deleting post:", error);
      toast.error("Failed to delete post");
    }
  }

  return (
    <div className="mt-4 flex gap-3">
      <button
        onClick={() => router.push(`/writePost?edit=${postId}`)}
        className="rounded-lg border border-honblue px-4 py-2 text-sm font-medium text-honblue transition-colors hover:bg-honblue hover:text-white"
      >
        Edit Post
      </button>
      <button
        onClick={handleDelete}
        className="rounded-lg border border-red-500 px-4 py-2 text-sm font-medium text-red-500 transition-colors hover:bg-red-500 hover:text-white"
      >
        Delete Post
      </button>
    </div>
  );
}

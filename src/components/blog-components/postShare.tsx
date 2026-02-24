"use client";

import { Share, Share2 } from "lucide-react";
import Image from "next/image";

interface PostShareProps {
  postId: string;
  title: string;
}

export default function PostShare({ postId, title }: PostShareProps) {
  const postUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/post/${postId}`;

  const shareOnLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`;
    window.open(url, "_blank", "noopener,noreferrer,width=600,height=600");
  };

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={shareOnLinkedIn}
        title={`Share "${title}" on LinkedIn`}
        className="text-honblue transition-transform hover:scale-110 hover:text-pacific"
      >
        <Share className="size-5" />
      </button>
      <a
        href="https://www.linkedin.com/in/mike-wood22/"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn Profile"
        className="transition-transform hover:scale-110"
      >
        <Image src="/linkedin.png" alt="LinkedIn" width={20} height={20} />
      </a>
    </div>
  );
}

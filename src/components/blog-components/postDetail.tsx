"use client";

import { useEffect, useRef } from "react";

import { ArrowUp } from "lucide-react";
import moment from "moment";
import { CldImage } from "next-cloudinary";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

import useScroll from "@/hooks/use-scroll";

interface PostHeroProps {
  coverImage: string;
  title: string;
  date: string;
}

export function PostHero({ coverImage, title, date }: PostHeroProps) {
  const formattedDate = moment(date).format("MMMM Do YYYY");

  return (
    <div className="relative overflow-hidden rounded-xl shadow-lg">
      <div className="relative aspect-[2/1] w-full md:aspect-[21/9]">
        <CldImage
          src={coverImage}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 896px"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-fedblue/80 via-fedblue/30 to-transparent" />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <h1 className="mb-2 text-2xl font-bold text-white drop-shadow-lg md:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="text-sm text-lb drop-shadow">{formattedDate}</p>
      </div>
    </div>
  );
}

interface PostContentProps {
  content: string;
}

export function PostContent({ content }: PostContentProps) {
  const scrollContainerRef = useRef<HTMLElement | null>(null);
  const scrolled = useScroll(300, scrollContainerRef);

  useEffect(() => {
    function findScrollParent(el: HTMLElement | null): HTMLElement | null {
      while (el) {
        const style = getComputedStyle(el);
        if (style.overflowY === "auto" || style.overflowY === "scroll") {
          return el;
        }
        el = el.parentElement;
      }
      return null;
    }

    const card = document.getElementById("post-content-card");
    scrollContainerRef.current = findScrollParent(card?.parentElement ?? null);
  }, []);

  const handleScrollToTop = () => {
    scrollContainerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="post-content-card" className="rounded-xl bg-white p-6 shadow-sm md:p-10">
      <article className="prose prose-lg max-w-none prose-headings:text-fedblue prose-a:text-honblue prose-strong:text-fedblue">
        <Markdown rehypePlugins={[rehypeHighlight]}>{content}</Markdown>
      </article>
      {scrolled && (
        <>
          <div className="my-6 h-px bg-gradient-to-r from-transparent via-honblue/40 to-transparent" />
          <div className="flex justify-end">
            <button
              onClick={handleScrollToTop}
              className="flex items-center gap-1.5 text-sm font-medium text-honblue transition-colors hover:text-pacific"
            >
              <ArrowUp className="size-4" />
              Back to Top
            </button>
          </div>
        </>
      )}
    </div>
  );
}

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { PostSchema } from "@/lib/models/blogPostSchema";

const BlogEditor = dynamic(() => import("@/components/editor/BlogEditor"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[300px] items-center justify-center rounded-lg border">
      Loading editor...
    </div>
  ),
});

const CldUploadWidget = dynamic(
  () => import("next-cloudinary").then((mod) => mod.CldUploadWidget),
  { ssr: false },
);

type PostFormValues = z.infer<typeof PostSchema>;

export function BlogForm() {
  const [coverPreview, setCoverPreview] = useState("");
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<PostFormValues>({
    resolver: zodResolver(PostSchema),
    defaultValues: {
      title: "",
      coverImage: "",
      excerpt: "",
      content: "",
    },
  });
  const router = useRouter();

  async function onSubmit(values: PostFormValues) {
    try {
      const res = await axios.post("/api/posts", values);
      const { data } = res;
      toast.success("Post created successfully");
      router.push(`/blog/${data.data._id}`);
    } catch (error) {
      console.error("Error submitting form", error);
      toast.error("Failed to create post");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto flex w-full max-w-3xl flex-col gap-5 px-4"
    >
      <div>
        <label className="mb-1 block font-medium text-fedblue">Title</label>
        <input
          placeholder="Post title"
          className="w-full rounded-lg border p-4"
          {...register("title")}
        />
        {errors.title?.message && (
          <p className="ml-1 mt-1 text-sm text-red-400">
            {errors.title.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-1 block font-medium text-fedblue">
          Cover Image
        </label>
        <CldUploadWidget
          uploadPreset="Blog-Upload"
          onSuccess={(result: any) => {
            const url = result?.info?.secure_url;
            if (url) {
              setValue("coverImage", url, { shouldValidate: true });
              setCoverPreview(url);
            }
          }}
        >
          {({ open }: { open: () => void }) => (
            <button
              type="button"
              onClick={() => open()}
              className="rounded-lg border border-fedblue px-4 py-2 font-medium text-fedblue transition-colors hover:bg-fedblue hover:text-white"
            >
              Upload Cover Image
            </button>
          )}
        </CldUploadWidget>
        {coverPreview && (
          <div className="mt-2">
            <Image
              src={coverPreview}
              alt="Cover preview"
              width={400}
              height={200}
              className="rounded-lg object-cover"
            />
          </div>
        )}
        {errors.coverImage?.message && (
          <p className="ml-1 mt-1 text-sm text-red-400">
            {errors.coverImage.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-1 block font-medium text-fedblue">Excerpt</label>
        <textarea
          rows={3}
          placeholder="Brief excerpt..."
          className="w-full rounded-lg border p-4"
          {...register("excerpt")}
        />
        {errors.excerpt?.message && (
          <p className="ml-1 mt-1 text-sm text-red-400">
            {errors.excerpt.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-1 block font-medium text-fedblue">Content</label>
        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <BlogEditor value={field.value} onChange={field.onChange} />
          )}
        />
        {errors.content?.message && (
          <p className="ml-1 mt-1 text-sm text-red-400">
            {errors.content.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-lg border border-fedblue bg-fedblue py-2.5 font-medium text-white transition-colors hover:bg-honblue disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? "Publishing..." : "Publish Post"}
      </button>
    </form>
  );
}

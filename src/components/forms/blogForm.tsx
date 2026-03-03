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
    <div className="flex h-full items-center justify-center rounded-lg border">
      Loading editor...
    </div>
  ),
});

const CldUploadWidget = dynamic(
  () => import("next-cloudinary").then((mod) => mod.CldUploadWidget),
  { ssr: false },
);

type PostFormValues = z.infer<typeof PostSchema>;

interface BlogFormProps {
  initialValues?: PostFormValues & { _id: string; status?: number };
}

export function BlogForm({ initialValues }: BlogFormProps) {
  const isEditing = !!initialValues;
  const [coverPreview, setCoverPreview] = useState(
    initialValues?.coverImage || "",
  );
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [generatingExcerpt, setGeneratingExcerpt] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<PostFormValues>({
    resolver: zodResolver(PostSchema),
    defaultValues: {
      title: initialValues?.title || "",
      coverImage: initialValues?.coverImage || "",
      excerpt: initialValues?.excerpt || "",
      content: initialValues?.content || "",
      status: initialValues?.status ?? 1,
    },
  });
  const router = useRouter();
  const contentValue = watch("content");

  async function onSubmit(values: PostFormValues) {
    try {
      if (isEditing) {
        const changedFields: Partial<PostFormValues> = {};
        for (const key of Object.keys(values) as (keyof PostFormValues)[]) {
          if (values[key] !== initialValues[key as keyof typeof initialValues]) {
            (changedFields as Record<string, unknown>)[key] = values[key];
          }
        }
        await axios.patch(`/api/posts/${initialValues._id}`, changedFields);
        toast.success("Post updated successfully");
        router.push(`/blog/post/${initialValues._id}`);
      } else {
        const res = await axios.post("/api/posts", values);
        const { data } = res;
        toast.success("Post created successfully");
        router.push(`/blog/post/${data.data._id}`);
      }
    } catch (error) {
      console.error("Error submitting form", error);
      toast.error(isEditing ? "Failed to update post" : "Failed to create post");
    }
  }

  async function generateExcerpt() {
    setGeneratingExcerpt(true);
    try {
      const res = await axios.post("/api/generate-excerpt", {
        content: contentValue,
      });
      setValue("excerpt", res.data.excerpt, { shouldValidate: true });
      toast.success("Excerpt generated");
    } catch (error) {
      console.error("Error generating excerpt:", error);
      toast.error("Failed to generate excerpt");
    } finally {
      setGeneratingExcerpt(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto flex h-full w-full max-w-6xl flex-col gap-3 px-4 pb-4"
    >
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <div>
          <label className="mb-1 block text-sm font-medium text-fedblue">
            Title
          </label>
          <input
            placeholder="Post title"
            className="w-full rounded-lg border p-2.5"
            {...register("title")}
          />
          {errors.title?.message && (
            <p className="ml-1 mt-1 text-sm text-red-400">
              {errors.title.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-fedblue">
            Status
          </label>
          <select
            className="w-full rounded-lg border p-2.5"
            {...register("status", { valueAsNumber: true })}
          >
            <option value={1}>Active</option>
            <option value={2}>Draft</option>
          </select>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-fedblue">
            Cover Image
          </label>
          <div className="flex items-center gap-3">
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
                  className="rounded-lg border border-fedblue px-4 py-2 text-sm font-medium text-fedblue transition-colors hover:bg-fedblue hover:text-white"
                >
                  Upload Cover Image
                </button>
              )}
            </CldUploadWidget>
            {coverPreview && (
              <Image
                src={coverPreview}
                alt="Cover preview"
                width={80}
                height={40}
                className="rounded object-cover"
              />
            )}
          </div>
          {errors.coverImage?.message && (
            <p className="ml-1 mt-1 text-sm text-red-400">
              {errors.coverImage.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <div className="mb-1 flex items-center gap-2">
          <label className="block text-sm font-medium text-fedblue">
            Excerpt
          </label>
          <button
            type="button"
            onClick={generateExcerpt}
            disabled={!contentValue || generatingExcerpt}
            className="rounded border border-pacific px-2 py-0.5 text-xs font-medium text-pacific transition-colors hover:bg-pacific hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            {generatingExcerpt ? "Generating..." : "Generate with AI"}
          </button>
        </div>
        <textarea
          rows={2}
          placeholder="Brief excerpt..."
          className="w-full rounded-lg border p-2.5"
          {...register("excerpt")}
        />
        {errors.excerpt?.message && (
          <p className="ml-1 mt-1 text-sm text-red-400">
            {errors.excerpt.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-fedblue">
          Upload Image for Post
        </label>
        <div className="flex items-center gap-3">
          <CldUploadWidget
            uploadPreset="Blog-Upload"
            onSuccess={(result: any) => {
              const url = result?.info?.secure_url;
              if (url) {
                setUploadedImageUrl(url);
              }
            }}
          >
            {({ open }: { open: () => void }) => (
              <button
                type="button"
                onClick={() => open()}
                className="rounded-lg border border-fedblue px-4 py-2 text-sm font-medium text-fedblue transition-colors hover:bg-fedblue hover:text-white"
              >
                Upload Image
              </button>
            )}
          </CldUploadWidget>
          {uploadedImageUrl && (
            <>
              <input
                type="text"
                readOnly
                value={uploadedImageUrl}
                className="min-w-0 flex-1 rounded-lg border bg-gray-50 p-2.5 text-sm text-gray-600"
              />
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(uploadedImageUrl);
                  toast.success("URL copied to clipboard");
                }}
                className="rounded-lg border border-fedblue px-4 py-2 text-sm font-medium text-fedblue transition-colors hover:bg-fedblue hover:text-white"
              >
                Copy
              </button>
            </>
          )}
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col">
        <label className="mb-1 block text-sm font-medium text-fedblue">
          Content
        </label>
        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <BlogEditor
              value={field.value}
              onChange={field.onChange}
              className="min-h-0 flex-1 [&_.w-md-editor]:!h-full"
            />
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
        className="rounded-lg border border-fedblue bg-fedblue py-2 text-sm font-medium text-white transition-colors hover:bg-honblue disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting
          ? isEditing
            ? "Updating..."
            : "Publishing..."
          : isEditing
            ? "Update Post"
            : "Publish Post"}
      </button>
    </form>
  );
}

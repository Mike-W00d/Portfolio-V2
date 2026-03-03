"use client";

import axios from "axios";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const CldUploadWidget = dynamic(
  () => import("next-cloudinary").then((mod) => mod.CldUploadWidget),
  { ssr: false },
);

export default function ImageUploadPage() {
  const router = useRouter();
  const [src, setSrc] = useState("");
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!src) {
      toast.error("Please upload an image first");
      return;
    }
    if (!description.trim()) {
      toast.error("Please enter a description");
      return;
    }

    setIsSubmitting(true);
    try {
      await axios.post("/api/gallery", { src, description, height, width });
      toast.success("Photo added to gallery");
      router.push("/gallery");
    } catch (error) {
      console.error("Error creating photo:", error);
      toast.error("Failed to add photo");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex justify-center px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-lg flex-col gap-5"
      >
        <h1 className="text-3xl font-bold text-fedblue">
          Upload Gallery Photo
        </h1>

        <div>
          <label className="mb-1 block text-sm font-medium text-fedblue">
            Image
          </label>
          <CldUploadWidget
            uploadPreset="Blog-Upload"
            onSuccess={(result: any) => {
              const info = result?.info;
              if (info?.secure_url) {
                setSrc(info.secure_url);
                setWidth(info.width);
                setHeight(info.height);
              }
            }}
          >
            {({ open }: { open: () => void }) => (
              <button
                type="button"
                onClick={() => open()}
                className="rounded-lg border border-fedblue px-4 py-2 text-sm font-medium text-fedblue transition-colors hover:bg-fedblue hover:text-white"
              >
                {src ? "Replace Image" : "Upload Image"}
              </button>
            )}
          </CldUploadWidget>
          {src && (
            <Image
              src={src}
              alt="Upload preview"
              width={400}
              height={300}
              className="mt-3 rounded-lg object-cover"
            />
          )}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-fedblue">
            Description
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the photo..."
            className="w-full rounded-lg border p-2.5"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !src || !description.trim()}
          className="rounded-lg border border-fedblue bg-fedblue py-2 text-sm font-medium text-white transition-colors hover:bg-honblue disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? "Adding..." : "Add to Gallery"}
        </button>
      </form>
    </div>
  );
}

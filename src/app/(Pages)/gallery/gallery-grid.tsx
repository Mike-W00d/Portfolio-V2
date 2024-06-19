"use client";

import { ImageGrid } from "@/components/image-grid";
import { SearchResults } from "./page";
import { CloudinaryImage } from "@/components/cloudinaryIMG";

export default function GalleryGrid({ images }: { images: SearchResults[] }) {
  return (
    <ImageGrid
      images={images}
      getImage={(imageData: SearchResults) => {
        return (
          <CloudinaryImage
            key={imageData.public_id}
            src={imageData.secure_url}
            width={imageData.width}
            height={imageData.height}
            alt="Image captured my myself"
            className="rounded-sm shadow-md hover:scale-105"
          />
        );
      }}
    />
  );
}
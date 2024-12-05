"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  RenderImageContext,
  RenderImageProps,
  RowsPhotoAlbum,
} from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "react-photo-album/rows.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";

interface Photo {
  src: string;
  description: string;
  height: number;
  width: number;
  _id: string;
}

function renderNextImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext<Photo>,
) {
  /// needed to avoid rendering an image without a url
  if (!photo.src) return null;

  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image
        src={photo.src}
        alt={photo.description || alt}
        width={photo.width || 500}
        height={photo.height || 500}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
        loading="eager"
      />
    </div>
  );
}

export default function PhotoGallery() {
  const [index, setIndex] = useState(-1);
  const [photos, setPhotos] = useState<Photo[]>([]);

  // Fetch photos from the API
  const fetchPhotos = async (): Promise<Photo[]> => {
    const res = await fetch("/api/photos");
    const photos: Photo[] = await res.json();
    return photos.map((photo) => ({
      src: photo.src,
      description: photo.description,
      height: photo.height,
      width: photo.width,
      _id: photo._id,
    }));
  };

  useEffect(() => {
    fetchPhotos().then(setPhotos);
  }, []);

  if (photos.length === 0) return <p>Loading...</p>;

  return (
    <>
      <RowsPhotoAlbum
        photos={photos.map((photo) => ({
          ...photo,
          key: photo._id,
        }))}
        render={{ image: renderNextImage }}
        targetRowHeight={500}
        defaultContainerWidth={1200}
        sizes={{
          size: "1168px",
          sizes: [
            { viewport: "(max-width: 1200px)", size: "calc(100vw - 32px)" },
          ],
        }}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        slides={photos.map((photo) => ({
          src: photo.src,
          alt: photo.description || "No description available",
          title: photo.description || "No description available",
          width: photo.width,
          height: photo.height,
        }))}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom, Captions]}
      />
    </>
  );
}

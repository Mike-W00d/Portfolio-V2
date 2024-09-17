'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  RenderImageContext,
  RenderImageProps,
  RowsPhotoAlbum,
} from "react-photo-album";
import "react-photo-album/rows.css";

function renderNextImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext,
) {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image
        fill
        src={photo}
        alt={alt}
        title={title}
        sizes={sizes}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
      />
    </div>
  );
}

export default function Page() {
  const fetchPhotos = async () => {
    const res = await fetch("/api/photos");
    const photos = await res.json();
    return photos;
  };

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos().then((photos) => setPhotos(photos));
  }, []);


  return (
      <div> 
        <h1> Gallery </h1>
        {photos.map((photo: any) => ( 
          <div key={photo._id}>
            <Image 
            src={photo.url} 
            alt={photo.description} 
            width={300}
            height={300}
            />
            <p>{photo.description}</p>
      </div>
    ))}
    </div>
  );
}







// import React from 'react'
// import cloudinary from 'cloudinary'
// import GalleryGrid from './gallery-grid'

// import { ReceiptRussianRuble } from "lucide-react";

// export type SearchResults = {
//   public_id: string;
//   secure_url: string;
//   width: number;
//   height: number;
// }

// import { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Gallery',
// };

// export default async function Gallery () {
//   const results = await cloudinary.v2.search
//   .expression('mgmwood.com')
//   .sort_by('public_id','desc')
//   .max_results(100)
//   .execute() as {resources: SearchResults[]}

//   return (
//     <section className='flex flex-col gap-8'>
//       <GalleryGrid images={results.resources} />
//     </section>
//   )
// }

import React from "react";

import "react-photo-album/rows.css";
import connectToDB from "@/lib/dbConnect";
import Photo from "@/lib/models/photoSchema";

import ClientGallery from "./ClientGallery";

interface PhotoType {
  src: string;
  description: string;
  height: number;
  width: number;
  _id: string;
}

// Server component to fetch photos
async function getPhotos(): Promise<PhotoType[]> {
  await connectToDB();

  try {
    const photos = await Photo.find({})
      .select("src description height width")
      .lean()
      .exec();

    return photos.map((photo) => ({
      src: photo.src,
      description: photo.description,
      height: photo.height,
      width: photo.width,
      _id: photo._id.toString(),
    }));
  } catch (error) {
    console.error("Error fetching photos:", error);
    return [];
  }
}

export default async function PhotoGallery() {
  const photos = await getPhotos();

  if (photos.length === 0) {
    return <p>No photos available</p>;
  }

  return <ClientGallery initialPhotos={photos} />;
}

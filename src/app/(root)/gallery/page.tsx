import { Types } from "mongoose";

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

interface PhotoDocument {
  _id: Types.ObjectId;
  src: string;
  description: string;
  height: number;
  width: number;
}

async function getPhotos(): Promise<PhotoType[]> {
  await connectToDB();

  try {
    const photos = (await Photo.find({})
      .select("src description height width")
      .lean()
      .exec()) as unknown as PhotoDocument[];

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

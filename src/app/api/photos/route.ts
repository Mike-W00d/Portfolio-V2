import connectToDB from "@/lib/dbConnect";
import Photo from "@/lib/models/photoSchema";

export default async function GET () {
  await connectToDB();

  try {
    const photos = await Photo.find({});

  } catch (error) {

  }
}
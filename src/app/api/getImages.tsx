import cloudinary from "@/cloudinary/config";
import { useState, useEffect } from "react";


interface CloudinaryImage {
  public_id: string
  secure_url: string
}


const [images, setImages] = useState(null)
useEffect(() => {
  async function fetchImages () {
    const { resources } = await cloudinary.search.expression('folder:mgmwood.com').execute()
    setImages(resources)
    console.log(images)
  }
  fetchImages()
}, [])
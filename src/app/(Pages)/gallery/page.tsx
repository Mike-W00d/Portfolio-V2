import React from 'react'
import cloudinary from 'cloudinary'
import { CloudinaryImage } from '@/components/cloudinaryIMG'
import GalleryGrid from './gallery-grid'

 export type SearchResults = {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
}

export default async function Gallery () {
  const results = await cloudinary.v2.search
  .expression('mgmwood.com')
  .sort_by('public_id','desc')
  .max_results(30)
  .execute() as {resources: SearchResults[]}

  return (
    <section>
      <div className='flex flex-col gap-8'>
      <GalleryGrid images={results.resources} />
      </div>
    </section>
  )
}

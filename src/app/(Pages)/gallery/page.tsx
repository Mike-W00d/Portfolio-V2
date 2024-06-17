import React from 'react'
import cloudinary from 'cloudinary'
import { CloudinaryImage } from '@/components/cloudinaryIMG'


type SearchResults = {
  public_id: string;
  secure_url: string;
}

export default async function Gallery () {
  const results = await cloudinary.v2.search
  .expression('mgmwood.com')
  .sort_by('public_id','desc')
  .max_results(30)
  .execute() as {resources: SearchResults[]}

  return (
    <section>
      <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {results.resources.map((result) => (
          <CloudinaryImage 
          key={result.public_id}
          src={result.secure_url}
          alt= "An Image of something"
          width= "300"
          height= "300"
          />
        ))}
      </div>
    </section>
  )
}

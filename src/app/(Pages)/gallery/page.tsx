import React from 'react'
import cloudinary from 'cloudinary'
import GalleryGrid from './gallery-grid'

export type SearchResults = {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
};

export default async function Gallery () {
  const results = await cloudinary.v2.search
  .expression('mgmwood.com')
  .sort_by('public_id','desc')
  .max_results(100)
  .execute() as {resources: SearchResults[]}

  return (
    <section className='flex flex-col gap-8'>
      <GalleryGrid images={results.resources} />
    </section>
  )
}
